import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _loader: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loader.start();

    const token = sessionStorage.token; 

    // un solo return 
    if (!token) {
      return next.handle(req).pipe(finalize(() => this._loader.complete()));
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1).pipe(finalize(() => this._loader.complete()));   
  }

}
