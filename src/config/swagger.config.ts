import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Api Documentation')
    .setVersion('1.0.0')
    .setContact('Backend team', 'https://back.com', 'support@nesttry.com')
    .addBearerAuth()
    .build();
}
