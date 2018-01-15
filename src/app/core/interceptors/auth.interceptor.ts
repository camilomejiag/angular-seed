import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VimeoConstants} from '../../commons/constant/vimeo.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service. "Authorization : basic " + base64(client_id + ":" + client_secret)
    const authHeader = 'basic ' + btoa(VimeoConstants.CLIENT_IDENTIFIER + ':' + VimeoConstants.CLIENT_SECRETS);
    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}