import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/${id}`);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/books`, book);
  }

  updateBook(id: number, book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/books/${id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/books/${id}`);
  }

  getPublishers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/publishers`);
  }

  getPublisher(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/publishers/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }
}
