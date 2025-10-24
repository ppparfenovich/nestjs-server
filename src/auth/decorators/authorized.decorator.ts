import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import type { Request } from 'express';

export const Authorized = createParamDecorator(
  (data: keyof UserEntity, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();

    const user = request.user;

    return data ? user?.[data] : user;
  },
);
