import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((data) => {
      this.book = data;
    });
  }
}
