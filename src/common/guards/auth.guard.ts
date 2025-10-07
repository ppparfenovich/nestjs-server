import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    const token = request.headers['authorization'];

    if (!token || !token.startsWith('Bearer ')) {
      throw new UnauthorizedException('User not authorized');
    }

    return true;
  }
}
