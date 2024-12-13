import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:3000';

  constructor(private http: HttpClient) {}

  // Books
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/${id}`);
  }

  createBook(book: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books`, book);
  }

  updateBook(id: number, book: any): Observable<any> {
    return this.http.put<any>(`${
