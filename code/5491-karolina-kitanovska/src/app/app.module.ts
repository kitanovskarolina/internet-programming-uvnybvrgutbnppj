import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importing Components
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherDetailsComponent } from './components/publisher-details/publisher-details.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Importing Routing Module
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookCreateComponent,
    PublisherListComponent,
    PublisherDetailsComponent,
    StatisticsComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
