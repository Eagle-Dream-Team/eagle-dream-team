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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const user_service_1 = require("../user/user.service");
const signUp_dto_1 = require("../user/dto/signUp.dto");
let StaffController = class StaffController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    createTutor(dto) {
        return this.userService.createTutor(dto);
    }
    createStudent(dto) {
        return this.userService.createStudent(dto);
    }
    findAllTutors(search) {
        return this.userService.findAllTutors(search);
    }
    findAllTutees(search, isAllocated) {
        const allocated = isAllocated === 'true'
            ? true
            : isAllocated === 'false'
                ? false
                : undefined;
        return this.userService.findAllTutees(search, allocated);
    }
    findOne(id) {
        return this.userService.findById(id);
    }
    update(id, dto) {
        return this.userService.updateUser(id, dto);
    }
};
exports.StaffController = StaffController;
__decorate([
    (0, common_1.Post)('users/tutor'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a tutor' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signUp_dto_1.SignUpDto]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "createTutor", null);
__decorate([
    (0, common_1.Post)('users/student'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a student' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signUp_dto_1.SignUpDto]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)('users/tutors'),
    (0, swagger_1.ApiOperation)({ summary: 'List all tutors' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "findAllTutors", null);
__decorate([
    (0, common_1.Get)('users/students'),
    (0, swagger_1.ApiOperation)({ summary: 'List all students' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'is_allocated', required: false }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('is_allocated')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "findAllTutees", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single user' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a user' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "update", null);
exports.StaffController = StaffController = __decorate([
    (0, swagger_1.ApiTags)('staff'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('staff'),
    (0, common_1.Controller)('staff'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], StaffController);
//# sourceMappingURL=staff.controller.js.map