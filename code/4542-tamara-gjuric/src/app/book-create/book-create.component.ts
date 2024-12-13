import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  book = {
    title: '',
    author: '',
    publishedYear: ''
  
  };

  constructor(private apiService: ApiService, private router: Router) { }

  addBook(): void {
    this.apiService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
