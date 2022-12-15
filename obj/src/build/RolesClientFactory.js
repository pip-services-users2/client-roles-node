"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const RolesNullClientV1_1 = require("../version1/RolesNullClientV1");
const RolesMemoryClientV1_1 = require("../version1/RolesMemoryClientV1");
const RolesDirectClientV1_1 = require("../version1/RolesDirectClientV1");
const RolesCommandableHttpClientV1_1 = require("../version1/RolesCommandableHttpClientV1");
const RolesCommandableLambdaClientV1_1 = require("../version1/RolesCommandableLambdaClientV1");
const RolesCommandableGrpcClientV1_1 = require("../version1/RolesCommandableGrpcClientV1");
const RolesGrpcClientV1_1 = require("../version1/RolesGrpcClientV1");
class RolesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(RolesClientFactory.NullClientV1Descriptor, RolesNullClientV1_1.RolesNullClientV1);
        this.registerAsType(RolesClientFactory.MemoryClientV1Descriptor, RolesMemoryClientV1_1.RolesMemoryClientV1);
        this.registerAsType(RolesClientFactory.DirectClientV1Descriptor, RolesDirectClientV1_1.RolesDirectClientV1);
        this.registerAsType(RolesClientFactory.HttpClientV1Descriptor, RolesCommandableHttpClientV1_1.RolesCommandableHttpClientV1);
        this.registerAsType(RolesClientFactory.LambdaClientV1Descriptor, RolesCommandableLambdaClientV1_1.RolesCommandableLambdaClientV1);
        this.registerAsType(RolesClientFactory.CommandableGrpcClientV1Descriptor, RolesCommandableGrpcClientV1_1.RolesCommandableGrpcClientV1);
        this.registerAsType(RolesClientFactory.GrpcClientV1Descriptor, RolesGrpcClientV1_1.RolesGrpcClientV1);
    }
}
exports.RolesClientFactory = RolesClientFactory;
RolesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'factory', 'default', 'default', '1.0');
RolesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'null', 'default', '1.0');
RolesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'memory', 'default', '1.0');
RolesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'direct', 'default', '1.0');
RolesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'commandable-http', 'default', '1.0');
RolesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'commandable-lambda', 'default', '1.0');
RolesClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'commandable-grpc', 'default', '1.0');
RolesClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-roles', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=RolesClientFactory.js.map