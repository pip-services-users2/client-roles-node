const assert = require('chai').assert;

import { RolesMemoryClientV1 } from '../../src/version1/RolesMemoryClientV1';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';

suite('RolesMemoryClientV1', ()=> {
    let client: RolesMemoryClientV1;
    let fixture: RolesClientFixtureV1;

    setup(() => {
        client = new RolesMemoryClientV1();

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
