import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IRolesClientV1 } from './IRolesClientV1';
import { UserRolesV1 } from './UserRolesV1';
export declare class RolesGrpcClientV1 extends GrpcClient implements IRolesClientV1 {
    constructor();
    getRolesByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<UserRolesV1>>;
    getRolesById(correlationId: string, userId: string): Promise<string[]>;
    setRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]>;
    grantRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]>;
    revokeRoles(correlationId: string, userId: string, roles: string[]): Promise<string[]>;
    authorize(correlationId: string, userId: string, roles: string[]): Promise<boolean>;
}
