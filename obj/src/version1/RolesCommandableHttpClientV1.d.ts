import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { UserRolesV1 } from './UserRolesV1';
import { IRolesClientV1 } from './IRolesClientV1';
export declare class RolesCommandableHttpClientV1 extends CommandableHttpClient implements IRolesClientV1 {
    constructor(config?: any);
    getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>>;
    getRolesById(correlationId: string, userId: string): Promise<string[]>;
    setRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]>;
    grantRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]>;
    revokeRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]>;
    authorize(correlationId: string, userId: string, roles: string[]): Promise<boolean>;
}
