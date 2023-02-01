import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemPageComponent } from './components/pages/add-item-page/add-item-page.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'login',component:LoginComponent},
	{path:'search/:searchTerm',component:HomeComponent},
  	{path:'add',component:AddItemPageComponent},
	{path:'books/:id',component:BookPageComponent},
	{path:'categories/:category',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

