import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment["baseUrl"];

  }

  public getPendingEntries(token: string): Observable<Entry[]> {
    let payload = {
      token: token
    }

    return this.http.post<Entry[]>(this.baseUrl + "/admin/getPendingEntries", payload);
  }
}
