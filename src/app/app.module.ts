import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MovieComponent } from './movie/movie.component';
import { DeferLoadDirective } from './deferLoad.directive'


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MovieComponent,
    DeferLoadDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgScrollbarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
