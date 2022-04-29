import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IRolesClientV1 } from './IRolesClientV1';

export class RolesNullClientV1 implements IRolesClientV1 {
    
    public async getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>> {
        return new DataPage<UserRolesV1>([], 0);
    }

    public async getRolesById(correlationId: string, userId: string): Promise<string[]> {
        return [];
    }

    public async setRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        return roles || [];
    }

    public async grantRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        return roles;
    }

    public async revokeRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]> {
        return [];
    }

    public async authorize(correlationId: string, userId: string, roles: string[]): Promise<boolean> {
        return true;
    }
    
}
