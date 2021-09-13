import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment["baseUrl"];
  }

  public addEntry(entry: Entry): void {
    this.http.post(this.baseUrl + "/guestBook", entry).subscribe();
  }

}
