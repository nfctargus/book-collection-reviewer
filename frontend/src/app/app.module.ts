import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { AddItemPageComponent } from './components/pages/add-item-page/add-item-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { TitleComponent } from './components/partials/title/title.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/partials/search/search.component';
import { ErrorComponent } from './components/partials/error/error.component';
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { LoginComponent } from './components/pages/login/login.component';
import { ThreedboxComponent } from './components/threedbox/threedbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AddItemPageComponent,
    HeaderComponent,
    LoadingComponent,
    TitleComponent,
    BookPageComponent,
    ErrorComponent,
    LoginComponent,
    ThreedboxComponent,
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
	HttpClientModule,
	ReactiveFormsModule,
	ToastrModule.forRoot({
		timeOut:2000,
		positionClass:'toast-bottom-right'
	}),
  ],
  
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
