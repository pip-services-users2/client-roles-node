const assert = require('chai').assert;

import { RolesMockClientV1 } from '../../src/version1/RolesMockClientV1';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';

suite('RolesMockClientV1', ()=> {
    let client: RolesMockClientV1;
    let fixture: RolesClientFixtureV1;

    setup(() => {
        client = new RolesMockClientV1();

        fixture = new RolesClientFixtureV1(client);
    });
    
    test('Get and Set Roles', async () => {
        await fixture.testGetAndSetRoles();
    });

    test('Grant and Revoke Roles', async () => {
        await fixture.testGrantAndRevokeRoles();
    });

    test('Authorize', async () => {
        await fixture.testAuthorize();
    });
});
