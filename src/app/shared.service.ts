import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getApplicationList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/application/');
  }

  addApplication(val: any) {
    return this.http.post(this.APIUrl + '/application/', val);
  }

  updateApplication(val: any) {
    return this.http.put(this.APIUrl + '/application/', val);
  }

  deleteApplication(val: any) {
    return this.http.delete(this.APIUrl + '/application/' + val);
  }

  getCommonInformationList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/common/');
  }

  addCommonInformation(val: any) {
    return this.http.post(this.APIUrl + '/common/', val);
  }

  updateCommonInformation(val: any) {
    return this.http.put(this.APIUrl + '/common/', val);
  }

  deleteCommonInformation(val: any) {
    return this.http.delete(this.APIUrl + '/common/' + val);
  }

  getAllApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/application/');
  }
}
