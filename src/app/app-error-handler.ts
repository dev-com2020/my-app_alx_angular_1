import {ErrorHandler, Injectable} from "@angular/core";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";


@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: any) {
    const err = error.rejection || error;
    let message = '';
    if (err instanceof HttpErrorResponse) {
      switch (err.status) {
        case 0:
          message = 'client error'
          break;
        case HttpStatusCode.NotFound:
          message = 'Nie znaleziono produktu';
          break;
        case HttpStatusCode.BadRequest:
          message = 'Request error'
          break;
        default:
          message = 'błąd serwera'
      }
    } else {
      message = 'Błąd aplikacji'
    }
    console.log(message, err);
  }
}
