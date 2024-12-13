import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from '../models/publisher.model';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  private apiUrl = 'http://localhost:3000/publishers';

  constructor(private http: HttpClient) {}

  getPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.apiUrl);
  }

  getPublisherById(id: number): Observable<Publisher> {
    return this.http.get<Publisher>(`${this.apiUrl}/${id}`);
  }
}
