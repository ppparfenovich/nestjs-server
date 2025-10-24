import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guargs/auth.guard';

export function Authorization() {
  return applyDecorators(UseGuards(JwtGuard));
}
