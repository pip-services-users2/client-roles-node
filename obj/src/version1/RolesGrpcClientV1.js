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
exports.RolesGrpcClientV1 = void 0;
const services = require('../../../src/protos/roles_v1_grpc_pb');
const messages = require('../../../src/protos/roles_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const RolesGrpcConverterV1_1 = require("./RolesGrpcConverterV1");
class RolesGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.RolesClient);
    }
    getRolesByFilter(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RolesPageRequest();
            RolesGrpcConverterV1_1.RolesGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(RolesGrpcConverterV1_1.RolesGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'roles.get_roles_by_filter');
            try {
                let response = yield this.call('get_roles_by_filter', correlationId, request);
                if (response.error != null)
                    throw RolesGrpcConverterV1_1.RolesGrpcConverterV1.toError(response.error);
                return response ? RolesGrpcConverterV1_1.RolesGrpcConverterV1.toUserRolesPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getRolesById(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RoleIdRequest();
            request.setUserId(userId);
            let timing = this.instrument(correlationId, 'roles.get_roles_by_id');
            try {
                let response = yield this.call('get_roles_by_id', correlationId, request);
                if (response.error != null)
                    throw RolesGrpcConverterV1_1.RolesGrpcConverterV1.toError(response.error);
                return response ? response.getRolesList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RolesRequest();
            request.setUserId(userId);
            request.setRolesList(roles);
            let timing = this.instrument(correlationId, 'roles.set_roles');
            try {
                let response = yield this.call('set_roles', correlationId, request);
                if (response.error != null)
                    throw RolesGrpcConverterV1_1.RolesGrpcConverterV1.toError(response.error);
                return response ? response.getRolesList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    grantRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RolesRequest();
            request.setUserId(userId);
            request.setRolesList(roles);
            let timing = this.instrument(correlationId, 'roles.grant_roles');
            try {
                let response = yield this.call('grant_roles', correlationId, request);
                if (response.error != null)
                    throw RolesGrpcConverterV1_1.RolesGrpcConverterV1.toError(response.error);
                return response ? response.getRolesList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    revokeRoles(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RolesRequest();
            request.setUserId(userId);
            request.setRolesList(roles);
            let timing = this.instrument(correlationId, 'roles.revoke_roles');
            try {
                let response = yield this.call('revoke_roles', correlationId, request);
                if (response.error != null)
                    throw RolesGrpcConverterV1_1.RolesGrpcConverterV1.toError(response.error);
                return response ? response.getRolesList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    authorize(correlationId, userId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RolesRequest();
            request.setUserId(userId);
            request.setRolesList(roles);
            let timing = this.instrument(correlationId, 'roles.authorize');
            try {
                let response = yield this.call('authorize', correlationId, request);
                if (response.error != null)
                    throw RolesGrpcConverterV1_1.RolesGrpcConverterV1.toError(response.error);
                return response ? response.getAuthorized() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.RolesGrpcClientV1 = RolesGrpcClientV1;
//# sourceMappingURL=RolesGrpcClientV1.js.map