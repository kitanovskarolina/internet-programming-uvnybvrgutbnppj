import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; {{ currentYear }} Edo Medo</p>
    </footer>
  `,
  styleUrls: ['./footer.component.css'], // Optional
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
