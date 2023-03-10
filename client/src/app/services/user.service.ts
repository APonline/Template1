import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
const baseUrl = environment.apiUrl + '/users';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByEmail(email: any): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}?email=${email}`);
  }
  findByStatus(status: any): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}?status=${status}`);
  }
  getAZ(data: any): Observable<any[]> {
    return this.http.post<any[]>(`${baseUrl}/altAPI`, data);
  }
}
