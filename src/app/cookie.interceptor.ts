import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const TOKEN_KEY = makeStateKey('tokenKey');

@Injectable()
export class CookieInterceptor implements HttpInterceptor {

  constructor(private state: TransferState) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const browserReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.state.get(TOKEN_KEY,null as any)}`
          }
    });

    return next.handle(browserReq);

  }

}
