"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
let DatabaseModule = class DatabaseModule {
    onModuleInit() {
        const dbType = process.env.DB_TYPE || 'mysql';
        common_1.Logger.log(`Database module initialized with ${dbType} database`, 'DatabaseModule');
    }
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const dbType = configService.get('DB_TYPE', 'mysql');
                    const baseConfig = {
                        type: dbType,
                        host: configService.get('DB_HOST', 'localhost'),
                        port: configService.get('DB_PORT', dbType === 'mysql' ? 3306 : 5432),
                        username: configService.get('DB_USERNAME', 'root'),
                        password: configService.get('DB_PASSWORD', ''),
                        database: configService.get('DB_NAME', 'railway'),
                        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                        synchronize: configService.get('DB_SYNCHRONIZE', true),
                        logging: configService.get('DB_LOGGING', false),
                    };
                    const typeSpecificConfig = dbType === 'postgres'
                        ? {
                            ssl: configService.get('DB_SSL', false),
                        }
                        : {
                            charset: 'utf8mb4',
                        };
                    return {
                        ...baseConfig,
                        ...typeSpecificConfig,
                    };
                },
            }),
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map