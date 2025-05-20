import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tenantId = sessionStorage.getItem('current_tenant_id');

    if (tenantId) {
      const modifiedReq = req.clone({
        setParams: {
          client_id: tenantId,
        },
      });

      return next.handle(modifiedReq);
    }

    return next.handle(req);
  }
}
