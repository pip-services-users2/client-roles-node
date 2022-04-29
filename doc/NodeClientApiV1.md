# Client API (version 1) <br/> Roles Microservices Client SDK for Node.js

Node.js client API for Settings microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [IRolesClientV1 interface](#interface)
    - [getRoles()](#operation1)
    - [setRoles()](#operation2)
    - [grantRoles()](#operation3)
    - [revokeRoles()](#operation4)
    - [authorize()](#operation5)
* [RolesHttpClientV1 class](#client_http)
* [RolesSenecaClientV1 class](#client_seneca)
* [RolesDirectClientV1 class](#client_direct)
* [RolesNullClientV1 class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-roles-node": "^1.0.*",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('client-roles-node').Version1;

// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
var client = sdk.RolesHttpClientV1(config);

// Open client connection to the microservice
await client.open(null);

console.log('Opened connection');

// Grant user 123 a role
let roles = await client.grantRoles(null, '123', ['admin']);

console.log('User roles are');
console.log(roles);

// Authorize user 123
let authorized = await client.authorize(null, '123', ['admin']);

console.log('User authorization is');
console.log(authorized);
                    
// Close connection
await client.close(); 

```

## <a name="interface"></a> IRolesClientV1 interface

If you are using Typescript, you can use IRolesClientV1 as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IRolesClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IRolesClientV1 {
    getRoles(correlationId, userId);
    setRoles(correlationId, userId, roles);
    grantRoles(correlationId, userId, roles);
    revokeRoles(correlationId, userId, roles);
    authorize(correlationId, userId, roles);
}
```

### <a name="operation1"></a> getRoles(correlationId, userId)

Gets all roles granted to specified user.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- userId: string - unique user id
- callback: (err, roles) => - callback function
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation2"></a> setRoles(correlationId, userId, roles)

Sets all roles granted to specified user. 
This operation overrides all previously granted roles.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- userId: string - unique user id
- roles: [string] - all roles 
- callback: (err, roles) => void - callback
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation3"></a> grantRoles(correlationId, userId, roles, callback)

Grant roles to the user. It doesn't affect other granted roles.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- userId: string - unique user id
- roles: [string] - roles granted to the user
- callback: (err, roles) => void - callback function
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation4"></a> revokeRoles(correlationId, userId, roles, callback)

Revokes roles from the user. It doesn't affect other granted roles.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- userId: string - unique user id
- roles: [string] - roles to be revoked from the user
- callback: (err, roles) => void - callback function
  - err: Error - occured error or null for success
  - roles: [string] - all roles granted to the user

### <a name="operation5"></a> authorize(correlationId, userId, roles, callback)

Authorizes user by checking if he was granted all requested roles.

**Params properties:** 
- correlationId: string - id that uniquely identifies transaction
- userId: string - unique user id
- roles: [string] - requested roles to authorize
- callback: (err, authorized) => void - callback function
  - err: Error - occured error or null for success
  - authorized: boolean - **true** if user was authorized and **false** otherwise
 
## <a name="client_rest"></a> RolesHttpClientV1 class

RolesHttpClientV1 is a client that implements HTTP protocol

```javascript
class RolesHttpClientV1 extends CommandableHttpClient implements IRolesClientV1 {
    constructor(config?: any);
    init(refs);
    open();
    close();
    getRoles(userId);
    setRoles(userId, roles);
    grantRoles(userId, roles);
    revokeRoles(userId, roles);
    authorize(userId, roles);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - protocol: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> RolesSenecaClientV1 class

RolesSenecaClientV1 is a client that implements Seneca protocol

```javascript
class RolesSenecaClientV1 extends CommandableSenecaClient implements IRolesClientV1 {
    constructor(config?: any);        
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getRoles(correlationId, userId);
    setRoles(correlationId, userId, roles);
    grantRoles(correlationId, userId, roles);
    revokeRoles(correlationId, userId, roles);
    authorize(correlationId, userId, roles);
}
```

**Constructor config properties:** 
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - protocol: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_direct"></a> RolesDirectClientV1 class

RolesDirectClientV1 is a client that calls controller directly from the same container.
It can be used in monolythic deployments when multiple microservices run in the same process.

```javascript
class RolesDirectClientV1 extends DirectClient implements IRolesClientV1 {
    constructor(config?: any);        
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getRoles(correlationId, userId);
    setRoles(correlationId, userId, roles);
    grantRoles(correlationId, userId, roles);
    revokeRoles(correlationId, userId, roles);
    authorize(correlationId, userId, roles);
}
```

## <a name="client_null"></a> RolesNullClientV1 class

RolesNullClient is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```javascript
class RolesNullClientV1 implements IRolesClientV1 {
    constructor();        
    getRoles(correlationId, userId);
    setRoles(correlationId, userId, roles);
    grantRoles(correlationId, userId, roles);
    revokeRoles(correlationId, userId, roles);
    authorize(correlationId, userId, roles);
}
```
