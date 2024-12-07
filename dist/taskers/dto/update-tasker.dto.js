"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_tasker_dto_1 = require("./create-tasker.dto");
class UpdateTaskerDto extends (0, swagger_1.PartialType)(create_tasker_dto_1.CreateTaskerDto) {
}
exports.UpdateTaskerDto = UpdateTaskerDto;
//# sourceMappingURL=update-tasker.dto.js.map