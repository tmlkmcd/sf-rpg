import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: process.env.VITE_PROXY,
    changeOrigin: true,
    ws: true,
  });

  use(req: Request, res: Response, next: NextFunction) {
    this.proxy(req, res, next);
  }
}
