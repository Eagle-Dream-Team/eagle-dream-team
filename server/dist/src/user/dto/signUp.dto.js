"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = void 0;
const openapi = require("@nestjs/swagger");
const api_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-property.decorator");
const class_validator_1 = require("class-validator");
const client_1 = require("../../generated/prisma/client");
class SignUpDto {
    email;
    password;
    firstName;
    lastName;
    role;
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, format: "email" }, password: { required: true, type: () => String, minLength: 6 }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, role: { required: true, type: () => Object } };
    }
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "lastName", void 0);
__decorate([
    (0, api_property_decorator_1.ApiProperty)({ enum: client_1.Role, enumName: 'Role' }),
    (0, class_validator_1.IsEnum)(client_1.Role),
    __metadata("design:type", String)
], SignUpDto.prototype, "role", void 0);
//# sourceMappingURL=signUp.dto.js.map