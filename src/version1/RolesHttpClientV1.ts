import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IRolesClientV1 } from './IRolesClientV1';

export class RolesHttpClientV1 extends CommandableHttpClient implements IRolesClientV1 {

    constructor(config?: any) {
        super('v1/roles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>> {
        let timing = this.instrument(correlationId, 'roles.get_roles_by_filter');

        try {
            return await this.callCommand(
                'get_roles_by_filter',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
        
    public async getRolesById(correlationId: string, userId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.get_roles_by_id');

        try {
            return await this.callCommand(
                'get_roles_by_id',
                correlationId,
                {
                    user_id: userId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.set_roles');

        try {
            return await this.callCommand(
                'set_roles',
                correlationId,
                {
                    user_id: userId,
                    roles: roles
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async grantRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.grant_roles');

        try {
            return await this.callCommand(
                'grant_roles',
                correlationId,
                {
                    user_id: userId,
                    roles: roles
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async revokeRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        let timing = this.instrument(correlationId, 'roles.revoke_roles');

        try {
            return await this.callCommand(
                'revoke_roles',
                correlationId,
                {
                    user_id: userId,
                    roles: roles
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
    public async authorize(correlationId: string, userId: string, roles: string[]): Promise<boolean> {
        let timing = this.instrument(correlationId, 'roles.authorize');

        try {
            let result = await this.callCommand<any>(
                'authorize',
                correlationId,
                {
                    user_id: userId,
                    roles: roles
                }
            );

            if (result == 'null')
                result = false;

            return result
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
