import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PublishersListComponent } from './publishers-list/publishers-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'publishers', component: PublishersListComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
