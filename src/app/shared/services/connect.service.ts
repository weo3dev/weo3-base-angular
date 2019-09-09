import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface IMessage {
  name?: string;
  email?: string;
  message?: string;
}

@Injectable()
export class AppService {
  private emailUrl = 'assets/php/connecting.php';
  constructor(private http: HttpClient) { }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message),
    map(response => {
      console.log('Sending email was successful', response);
      return response;
    });
  }
}
