import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit {
  publisher: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.apiService.getPublisher(id).subscribe(data => {
      this.publisher = data;
    }, error => {
      console.error('Error fetching publisher:', error);
    });
  }
}
