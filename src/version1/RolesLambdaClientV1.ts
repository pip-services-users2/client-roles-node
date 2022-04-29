import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IRolesClientV1 } from './IRolesClientV1';

export class RolesLambdaClientV1 extends CommandableLambdaClient implements IRolesClientV1 {

    constructor(config?: any) {
        super('roles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>> {
        let timing = this.instrument(correlationId, 'activities.get_roles_by_filter');

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
        let timing = this.instrument(correlationId, 'activities.get_roles_by_id');

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
        let timing = this.instrument(correlationId, 'activities.set_roles');

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
        let timing = this.instrument(correlationId, 'activities.grant_roles');

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
        let timing = this.instrument(correlationId, 'activities.revoke_roles');

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
        let timing = this.instrument(correlationId, 'activities.authorize');

        try {
            let result = await this.callCommand(
                'authorize',
                correlationId,
                {
                    user_id: userId,
                    roles: roles
                }
            );

            return result ? result.authorized : null
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
