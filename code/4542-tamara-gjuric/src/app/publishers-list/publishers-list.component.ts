import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.css'],
  imports: [RouterModule],
  standalone: true
})
export class PublishersListComponent {
  publishers: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPublishers().subscribe(data => {
      this.publishers = data;
    });
  }
}
