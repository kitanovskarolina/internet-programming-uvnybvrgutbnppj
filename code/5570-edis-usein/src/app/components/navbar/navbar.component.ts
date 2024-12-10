import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/books">Books</a></li>
        <li><a routerLink="/publishers">Publishers</a></li>
        <li><a routerLink="/statistics">Statistics</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </nav>
  `,
})
export class NavbarComponent {}
