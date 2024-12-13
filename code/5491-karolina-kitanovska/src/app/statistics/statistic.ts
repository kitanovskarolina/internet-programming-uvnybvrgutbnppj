import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent implements OnInit {
  totalBooks: number = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.totalBooks = books.length;
    });
  }
}
