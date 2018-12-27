import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Status {
  shuffle: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  constructor(
    private http: HttpClient,
  ) { }

  getStatus(): Observable<Status> {
    const url = `${environment.hostUrl}/status`;
    return this.http.get<Status>(url, httpOptions);
  }

  start(): Observable<Status> {
    const url = `${environment.hostUrl}/start`;
    return this.http.post<Status>(url, httpOptions);
  }

  stop(): Observable<Status> {
    const url = `${environment.hostUrl}/stop`;
    return this.http.post<Status>(url, httpOptions);
  }
}
