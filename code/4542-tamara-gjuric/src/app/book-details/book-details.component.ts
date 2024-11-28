import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // For accessing route parameters
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true
})
export class BookDetailsComponent {
  book: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Extract route parameter
    this.apiService.getBook(id).subscribe(data => {
      this.book = data; // Assign the fetched book data
    });
  }
}

