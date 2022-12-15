"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class RolesCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('roles');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getRolesByFilter(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_roles_by_filter', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getRolesById(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_roles_by_id', correlationId, {
                user_id: userId
            });
        });
    }
    setRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_roles', correlationId, {
                user_id: userId,
                roles: roles
            });
        });
    }
    grantRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('grant_roles', correlationId, {
                user_id: userId,
                roles: roles
            });
        });
    }
    revokeRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('revoke_roles', correlationId, {
                user_id: userId,
                roles: roles
            });
        });
    }
    authorize(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.callCommand('authorize', correlationId, {
                user_id: userId,
                roles: roles
            });
            return result ? result.authorized : null;
        });
    }
}
exports.RolesCommandableLambdaClientV1 = RolesCommandableLambdaClientV1;
//# sourceMappingURL=RolesCommandableLambdaClientV1.js.map