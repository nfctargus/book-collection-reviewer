import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemPageComponent } from './components/pages/add-item-page/add-item-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
	{path:'',component:HomeComponent},
  	{path:'add',component:AddItemPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
