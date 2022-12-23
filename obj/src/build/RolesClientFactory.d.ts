import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';
export declare class RolesClientFactory extends Factory {
    static Descriptor: Descriptor;
    static NullClientV1Descriptor: Descriptor;
    static MockClientV1Descriptor: Descriptor;
    static DirectClientV1Descriptor: Descriptor;
    static HttpClientV1Descriptor: Descriptor;
    static LambdaClientV1Descriptor: Descriptor;
    static CommandableGrpcClientV1Descriptor: Descriptor;
    static GrpcClientV1Descriptor: Descriptor;
    constructor();
}
