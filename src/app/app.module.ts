import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
//new
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { from } from 'rxjs';
import { JumbtronComponent } from './home/jumbtron/jumbtron.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './home/footer/footer.component';
import { BooksComponent } from './books/books.component';
import { NewsComponent } from './News/news.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { RolesComponent } from './roles/roles.component';
import { LevelsComponent } from './levels/levels.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    JumbtronComponent,
    ContentComponent,
    FooterComponent,
    BooksComponent,
    NewsComponent,
    StuffsComponent,
    RolesComponent,
    LevelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //new
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
