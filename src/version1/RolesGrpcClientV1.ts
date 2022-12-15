const services = require('../../../src/protos/roles_v1_grpc_pb');
const messages = require('../../../src/protos/roles_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IRolesClientV1 } from './IRolesClientV1';
import { UserRolesV1 } from './UserRolesV1';
import { RolesGrpcConverterV1 } from './RolesGrpcConverterV1';

export class RolesGrpcClientV1 extends GrpcClient implements IRolesClientV1 {
        
    public constructor() {
        super(services.RolesClient);
    }

    public async getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>> {
        let request = new messages.RolesPageRequest();

        RolesGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(RolesGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'roles.get_roles_by_filter');

        try {
            let response = await this.call<any>('get_roles_by_filter', correlationId, request);

            if (response.error != null)
                throw RolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? RolesGrpcConverterV1.toUserRolesPage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getRolesById(correlationId: string, userId: string): Promise<string[]> {

        let request = new messages.RoleIdRequest();
        request.setUserId(userId);

        let timing = this.instrument(correlationId, 'roles.get_roles_by_id');

        try {
            let response = await this.call<any>('get_roles_by_id', correlationId, request);

            if (response.error != null)
                throw RolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getRolesList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }    
    }

    public async setRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {

        let request = new messages.RolesRequest();
        request.setUserId(userId);
        request.setRolesList(roles);

        let timing = this.instrument(correlationId, 'roles.set_roles');

        try {
            let response = await this.call<any>('set_roles', correlationId, request);

            if (response.error != null)
                throw RolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getRolesList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }      
    }

    public async grantRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {

        let request = new messages.RolesRequest();
        request.setUserId(userId);
        request.setRolesList(roles);

        let timing = this.instrument(correlationId, 'roles.grant_roles');

        try {
            let response = await this.call<any>('grant_roles', correlationId, request);

            if (response.error != null)
                throw RolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getRolesList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }            
    }

    public async revokeRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {

        let request = new messages.RolesRequest();
        request.setUserId(userId);
        request.setRolesList(roles);

        let timing = this.instrument(correlationId, 'roles.revoke_roles');

        try {
            let response = await this.call<any>('revoke_roles', correlationId, request);

            if (response.error != null)
                throw RolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getRolesList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }         
    }

        
    public async authorize(correlationId: string, userId: string, roles: string[]): Promise<boolean> {

        let request = new messages.RolesRequest();
        request.setUserId(userId);
        request.setRolesList(roles);

        let timing = this.instrument(correlationId, 'roles.authorize');

        try {
            let response = await this.call<any>('authorize', correlationId, request);

            if (response.error != null)
                throw RolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getAuthorized() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }                 
    }
}
