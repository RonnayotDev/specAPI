import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './page/information/information.component';

const routes: Routes = [
  {
    path:'',
    component:InformationComponent
  },
  {
    path:'**',
    redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
