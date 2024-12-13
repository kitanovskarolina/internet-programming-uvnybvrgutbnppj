import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router'; // Correctly import RouterModule

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  imports: [RouterModule], // Add RouterModule to imports for standalone component
  standalone: true
})
export class BookDetailsComponent {
  book: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.apiService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }
}
