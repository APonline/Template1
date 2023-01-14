import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
const baseUrl = environment.apiUrl + '/mail';

@Injectable({ providedIn: 'root' })
export class MailService {

  res=null;
  constructor(private http: HttpClient) { }

  sendContactEmail(email: any, subject: string, message: string): Observable<any> {
    let data = {
      email,
      subject,
      message
    }

    return this.http.post(baseUrl, data);
  }

}
