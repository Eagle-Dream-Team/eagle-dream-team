"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../prisma.service");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async signUp(dto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.ConflictException('Email already in use');
        }
        const password_hash = await bcrypt.hash(dto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email.toLocaleLowerCase(),
                password_hash,
                first_name: dto.firstName,
                last_name: dto.lastName,
                role: dto.role,
            },
        });
        const { password_hash: _, ...result } = user;
        return result;
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: {
                email: email.toLocaleLowerCase(),
            },
        });
    }
    async changePassword(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email.toLocaleLowerCase() },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const password_hash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.user.update({
            where: { email: dto.email.toLocaleLowerCase() },
            data: { password_hash },
        });
        return { success: true, message: 'Password changed successfully' };
    }
    async findById(user_id) {
        const user = await this.prisma.user.findUnique({ where: { user_id } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const { password_hash: _, ...result } = user;
        return result;
    }
    async createTutor(dto) {
        return this.signUp({ ...dto, role: 'tutor' });
    }
    async createStudent(dto) {
        return this.signUp({ ...dto, role: 'student' });
    }
    async findAllTutors(search) {
        const users = await this.prisma.user.findMany({
            where: {
                role: 'tutor',
                ...(search && {
                    OR: [
                        { first_name: { contains: search, mode: 'insensitive' } },
                        { last_name: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            omit: { password_hash: true },
        });
        return users;
    }
    async findAllTutees(search, isAllocated) {
        const users = await this.prisma.user.findMany({
            where: {
                role: 'student',
                ...(search && {
                    OR: [
                        { first_name: { contains: search, mode: 'insensitive' } },
                        { last_name: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } },
                    ],
                }),
                ...(isAllocated !== undefined && {
                    student_allocations: isAllocated
                        ? { some: { is_current: true } }
                        : { none: { is_current: true } },
                }),
            },
            omit: { password_hash: true },
            include: {
                student_allocations: {
                    where: { is_current: true },
                    include: { tutor: { omit: { password_hash: true } } },
                },
            },
        });
        return users;
    }
    async updateUser(user_id, dto) {
        const user = await this.prisma.user.findUnique({ where: { user_id } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const updated = await this.prisma.user.update({
            where: { user_id },
            data: {
                ...(dto.firstName && { first_name: dto.firstName }),
                ...(dto.lastName && { last_name: dto.lastName }),
                ...(dto.email && { email: dto.email.toLocaleLowerCase() }),
            },
            omit: { password_hash: true },
        });
        return updated;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map