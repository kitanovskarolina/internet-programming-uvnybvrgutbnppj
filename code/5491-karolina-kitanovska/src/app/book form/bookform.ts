import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedYear: ['', Validators.required],
      available: [true],
      condition: ['New', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookService.getBookById(Number(id)).subscribe(data => {
        this.bookForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.bookService.updateBook(this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
