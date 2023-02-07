// <!--
// * File: app.routing.module.ts <br>
// * Author: Tóth Júlia <br>
// * Copyright: 2023, Tóth Júlia <br>
// * Group: Szoft 2/N <br>
// * Date: 2022-02-07 <br>
// * Github: https://github.com/haribomaci/ <br>
// * Licenc: GNU GPL <br> 
// -->

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "github", component: GithubComponent},
   {path: "index", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
