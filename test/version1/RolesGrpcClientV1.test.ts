const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { RolesMemoryPersistence } from 'service-roles-node';
import { RolesController } from 'service-roles-node';
import { RolesGrpcServiceV1 } from 'service-roles-node';

import { RolesGrpcClientV1 } from '../../src/version1/RolesGrpcClientV1';
import { RolesClientFixtureV1 } from './RolesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('RolesGrpcClientV1', ()=> {
    let service: RolesGrpcServiceV1;
    let persistence: RolesMemoryPersistence;
    let client: RolesGrpcClientV1;
    let fixture: RolesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        persistence = new RolesMemoryPersistence();
        let controller = new RolesController();

        service = new RolesGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-roles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-roles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-roles', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RolesGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RolesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
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
