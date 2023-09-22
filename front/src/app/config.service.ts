import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:3000'; // Update with your NestJS API URL

  constructor(private http: HttpClient) { }

  getStringArray(): Observable<string[]> {
    const url = `${this.apiUrl}`; // Update with your API endpoint
    return this.http.get<string[]>(url);
  }
}
