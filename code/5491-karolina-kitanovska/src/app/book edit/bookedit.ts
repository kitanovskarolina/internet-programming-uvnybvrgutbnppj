import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedYear: ['', Validators.required],
      publisher: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((book) => {
      this.bookForm.patchValue(book);
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.updateBook(this.bookForm.getRawValue().id, this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
