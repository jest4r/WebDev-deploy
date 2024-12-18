"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = RolesGuard;
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../guards/role.guard");
function RolesGuard(roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(role_guard_1.RoleGuard));
}
//# sourceMappingURL=role-guard.decorator.js.map