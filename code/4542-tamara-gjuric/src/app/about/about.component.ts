import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  studentName: string = "Tamara Gjurikj";
  studentId: string = "4542";
  currentYear: number = new Date().getFullYear();
  githubLink: string = "https://github.com/buddy-ui/internet-programming-uvnybvrgutbnppj/tree/main/code/4542-tamara-gjuric"; 
}
