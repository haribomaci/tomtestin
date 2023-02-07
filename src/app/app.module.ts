// <!--
// * File: about.component.html <br>
// * Author: Tóth Júlia <br>
// * Copyright: 2023, Tóth Júlia <br>
// * Group: Szoft 2/N <br>
// * Date: 2022-02-07 <br>
// * Github: https://github.com/haribomaci/ <br>
// * Licenc: GNU GPL <br> 
// -->


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
