import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,
              @Optional() @Inject('token') protected token: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const serverReq = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`,
      headers: req.headers.set('Authorization', `Bearer `+this.token)
    });

    return next.handle(serverReq);

  }

}
