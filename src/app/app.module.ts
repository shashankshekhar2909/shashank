import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './_shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/personal/personal.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HomeComponent,
    PersonalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
