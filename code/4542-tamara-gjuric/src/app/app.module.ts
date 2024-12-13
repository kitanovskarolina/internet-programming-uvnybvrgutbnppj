import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';

export class AppModule {
  static imports = [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Ensure global navigation works
  ];

  static bootstrap = [AppComponent];
}
