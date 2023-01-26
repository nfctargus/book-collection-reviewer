import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { AddItemPageComponent } from './components/pages/add-item-page/add-item-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CategoriesComponent } from './components/partials/categories/categories.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { TitleComponent } from './components/partials/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddItemPageComponent,
    LoginPageComponent,
    CategoriesComponent,
    HeaderComponent,
    LoadingComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
