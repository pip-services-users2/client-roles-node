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
exports.RolesDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IRolesController } from 'service-roles-node';
class RolesDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-roles", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getRolesByFilter(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'roles.get_roles_by_filter');
            try {
                let res = yield this._controller.getRolesByFilter(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getRolesById(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'roles.get_roles_by_id');
            try {
                let res = yield this._controller.getRolesById(correlationId, userId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'roles.set_roles');
            try {
                let res = yield this._controller.setRoles(correlationId, userId, roles);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    grantRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'roles.grant_roles');
            try {
                let res = yield this._controller.grantRoles(correlationId, userId, roles);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    revokeRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'roles.revoke_roles');
            try {
                let res = yield this._controller.revokeRoles(correlationId, userId, roles);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    authorize(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'roles.authorize');
            try {
                let res = yield this._controller.authorize(correlationId, userId, roles);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.RolesDirectClientV1 = RolesDirectClientV1;
//# sourceMappingURL=RolesDirectClientV1.js.map