import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { Http } from '@angular/http';
import { Resolve } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

export interface IMessage {
  name?: string;
  email?: string;
  message?: string;
}

@Injectable()
export class AppService {
  private emailUrl = 'assets/php/connecting.php';
  constructor(private http: Http) { }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message),
    map(response => {
      console.log('Sending email was successful', response);
      return response;
    });
  }
}
