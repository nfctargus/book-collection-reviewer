import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemPageComponent } from './components/pages/add-item-page/add-item-page.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LibraryPageComponent } from './components/pages/library-page/library-page.component';

const routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'library',component:LibraryPageComponent},
	{path:'search/:searchTerm',component:LibraryPageComponent},
  	{path:'add',component:AddItemPageComponent},
	{path:'books/:id',component:BookPageComponent},
	{path:'categories/:category',component:LibraryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

