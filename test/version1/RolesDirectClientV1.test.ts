const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';

import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { RolesMemoryPersistence } from 'service-roles-node';
import { RolesController } from 'service-roles-node';

import { RolesDirectClientV1 } from '../../src/version1/RolesDirectClientV1';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';

suite('RolesDirectClientV1', ()=> {
    let persistence: RolesMemoryPersistence;
    let client: RolesDirectClientV1;
    let fixture: RolesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        persistence = new RolesMemoryPersistence();
        let controller = new RolesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-roles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-roles', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new RolesDirectClientV1();
        client.setReferences(references);

        fixture = new RolesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    setup(async () => {
        await persistence.clear(null);
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
