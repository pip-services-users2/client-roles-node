const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';

import { IRolesClientV1 } from '../../src/version1/IRolesClientV1';

let ROLES = ['Role 1', 'Role 2', 'Role 3'];

export class RolesClientFixtureV1 {
    private _client: IRolesClientV1;
    
    constructor(client: IRolesClientV1) {
        this._client = client;
    }

    public async testGetAndSetRoles() {

        // Update party roles
        let roles = await this._client.setRoles(
            null,
            '1',
            ROLES
        );

        assert.lengthOf(roles, 3);

        // Read and check party roles
        roles = await this._client.getRolesById(null, '1');

        assert.lengthOf(roles, 3);

        // Read and check party roles
        let page = await this._client.getRolesByFilter(null, FilterParams.fromTuples('roles', ROLES), null);

        assert.lengthOf(page.data, 1);

    }

    public async testGrantAndRevokeRoles() {
        // Grant roles first time
        let roles = await this._client.grantRoles(null, '1', ['Role 1']);

        assert.lengthOf(roles, 1);
        assert.sameMembers(roles, ['Role 1']);

        // Grant roles second time
        roles = await this._client.grantRoles(
            null,
            '1',
            ['Role 1', 'Role 2', 'Role 3']
        );

        assert.lengthOf(roles, 3);
        assert.sameMembers(roles, ['Role 1', 'Role 2', 'Role 3']);

        // Revoke roles first time
        roles = await this._client.revokeRoles(null, '1', ['Role 1']);

        assert.lengthOf(roles, 2);
        assert.sameMembers(roles, ['Role 2', 'Role 3']);

        // Get roles
        roles = await this._client.getRolesById(null, '1');

        assert.lengthOf(roles, 2);
        assert.sameMembers(roles, ['Role 2', 'Role 3']);

        // Revoke roles second time
        roles = await this._client.revokeRoles(null, '1', ['Role 1', 'Role 2']);

        assert.lengthOf(roles, 1);
        assert.sameMembers(roles, ['Role 3']);
    }

    public async testAuthorize() {
        // Grant roles
        let roles = await this._client.grantRoles(null, '1', ['Role 1', 'Role 2']);

        assert.lengthOf(roles, 2);

        // Authorize positively
        let authorized = await this._client.authorize(null, '1', ['Role 1']);

        assert.isTrue(authorized);

        // Authorize negatively
        authorized = await this._client.authorize(null, '1', ['Role 2', 'Role 3']);

        assert.isFalse(authorized);   
    } 
}
