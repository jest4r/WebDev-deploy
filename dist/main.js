"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT-auth',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('PORT') || 5000);
    app.use('*', (req, res, next) => {
        const path = req.originalUrl;
        if (!path.startsWith('/api') && !path.includes('.')) {
            res.sendFile((0, path_1.join)(__dirname, '..', 'out', 'index.html'));
        }
        else {
            next();
        }
    });
}
bootstrap();
//# sourceMappingURL=main.js.map