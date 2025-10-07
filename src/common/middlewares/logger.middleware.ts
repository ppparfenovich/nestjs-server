// import { Injectable, type NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

export function Logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request .... ${req.method} ${req.url}`);
  next();
}

// @Injectable()
// export class LoggingMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(`Request .... ${req.method} ${req.url}`);
//     next();
//   }
// }
