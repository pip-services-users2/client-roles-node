import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { RolesNullClientV1 } from '../version1/RolesNullClientV1';
import { RolesMemoryClientV1 } from '../version1/RolesMemoryClientV1';
import { RolesDirectClientV1 } from '../version1/RolesDirectClientV1';
import { RolesCommandableHttpClientV1 } from '../version1/RolesCommandableHttpClientV1';
import { RolesCommandableLambdaClientV1 } from '../version1/RolesCommandableLambdaClientV1';
import { RolesCommandableGrpcClientV1 } from '../version1/RolesCommandableGrpcClientV1';
import { RolesGrpcClientV1 } from '../version1/RolesGrpcClientV1';

export class RolesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-roles', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-roles', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('service-roles', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-roles', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-roles', 'client', 'commandable-http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-roles', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-roles', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-roles', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(RolesClientFactory.NullClientV1Descriptor, RolesNullClientV1);
		this.registerAsType(RolesClientFactory.MemoryClientV1Descriptor, RolesMemoryClientV1);
		this.registerAsType(RolesClientFactory.DirectClientV1Descriptor, RolesDirectClientV1);
		this.registerAsType(RolesClientFactory.HttpClientV1Descriptor, RolesCommandableHttpClientV1);
		this.registerAsType(RolesClientFactory.LambdaClientV1Descriptor, RolesCommandableLambdaClientV1);
		this.registerAsType(RolesClientFactory.CommandableGrpcClientV1Descriptor, RolesCommandableGrpcClientV1);
		this.registerAsType(RolesClientFactory.GrpcClientV1Descriptor, RolesGrpcClientV1);
	}
	
}
