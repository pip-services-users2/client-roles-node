import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IRolesClientV1 } from './IRolesClientV1';
//import { IRolesController } from 'service-roles-node';

export class RolesDirectClientV1 extends DirectClient<any> implements IRolesClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-roles", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>> {
        let timing = this.instrument(correlationId, 'roles.get_roles_by_filter');

        try {
            let res = await this._controller.getRolesByFilter(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getRolesById(correlationId: string, userId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.get_roles_by_id');

        try {
            let res = await this._controller.getRolesById(correlationId, userId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.set_roles');

        try {
            let res = await this._controller.setRoles(correlationId, userId, roles);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async grantRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.grant_roles');

        try {
            let res = await this._controller.grantRoles(correlationId, userId, roles);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async revokeRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.revoke_roles');

        try {
            let res = await this._controller.revokeRoles(correlationId, userId, roles);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async authorize(correlationId: string, userId: string, roles: string[]): Promise<boolean> {
        let timing = this.instrument(correlationId, 'roles.authorize');

        try {
            let res = await this._controller.authorize(correlationId, userId, roles);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
}