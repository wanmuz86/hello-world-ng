import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {DetailComponent} from './detail/detail.component'

const routes: Routes = [
{
	path:'main',
	component:MainComponent
},
{
	path:'detail',
	component:DetailComponent
},
{
	path:'**',
	component:MainComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
