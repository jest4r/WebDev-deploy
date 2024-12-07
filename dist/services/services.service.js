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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const service_entity_1 = require("./entities/service.entity");
const typeorm_2 = require("typeorm");
let ServicesService = class ServicesService {
    constructor(servicesRepository) {
        this.servicesRepository = servicesRepository;
    }
    async create(createServiceDto) {
        const { title, range } = createServiceDto;
        try {
            const service = this.servicesRepository.create({
                title,
                range,
            });
            return await this.servicesRepository.save(service);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        return await this.servicesRepository.find();
    }
    async findOne(id) {
        const service = await this.servicesRepository.findOneBy({ id });
        if (!service) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return service;
    }
    async findByRange(range) {
        if (!range || typeof range !== 'string') {
            throw new common_1.BadRequestException('Invalid range parameter');
        }
        try {
            const services = await this.servicesRepository.find({
                where: { range },
            });
            if (!services || services.length === 0) {
                throw new common_1.NotFoundException(`No services found with range "${range}"`);
            }
            return services;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while fetching services');
        }
    }
    async update(id, updateServiceDto) {
        try {
            const service = await this.servicesRepository.findOneBy({ id });
            if (!service) {
                throw new common_1.NotFoundException(`Service with ID ${id} not found`);
            }
            if (updateServiceDto.title) {
                service.title = updateServiceDto.title;
            }
            if (updateServiceDto.range) {
                service.range = updateServiceDto.range;
            }
            return await this.servicesRepository.save(service);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError && error.driverError.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Title already exists. Please use a different title.');
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const service = await this.servicesRepository.findOneBy({ id });
            if (!service) {
                throw new common_1.NotFoundException(`Service with ID ${id} not found`);
            }
            await this.servicesRepository.remove(service);
            return 'Successfully deleted service id ' + id;
        }
        catch (error) {
            console.error('Error while deleting service:', error);
            throw new common_1.InternalServerErrorException('Failed to delete the service');
        }
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServicesService);
//# sourceMappingURL=services.service.js.map