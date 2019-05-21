import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './books/books.component';
import { NewsComponent } from './News/news.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { RolesComponent } from './roles/roles.component';
import { from } from 'rxjs';
import { LevelsComponent } from './levels/levels.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Fees', component: ProductsComponent },
  { path: 'Books', component: BooksComponent},
  { path: 'News', component: NewsComponent},
  { path: 'Stuffs', component: StuffsComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'Levels', component: LevelsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
