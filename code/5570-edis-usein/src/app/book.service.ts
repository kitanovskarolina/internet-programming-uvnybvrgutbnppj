import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:3000';

  constructor() { }


  getBooks() {
    return fetch(`${this.apiUrl}/book`)
      .then(response => response.json())
      .catch(error => console.error('err fetch:', error));
  }


  getBookById(id: number) {
    return fetch(`${this.apiUrl}/books/${id}`)
      .then(response => response.json())
      .catch(error => console.error('err fetch:', error));
  }


  createBook(book: any) {
    return fetch(`${this.apiUrl}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .catch(error => console.error('err crate:', error));
  }

  updateBook(id: number, book: any) {
    return fetch(`${this.apiUrl}/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .catch(error => console.error('err update:', error));
  }

  deleteBook(id: number) {
    return fetch(`${this.apiUrl}/books/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .catch(error => console.error('err del:', error));
  }
}
