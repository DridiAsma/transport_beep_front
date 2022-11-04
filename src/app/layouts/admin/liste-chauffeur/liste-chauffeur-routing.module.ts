import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeChauffeurComponent } from './liste-chauffeur.component';
import { TableChauffeurComponent } from './table-chauffeur/table-chauffeur.component';

const routes: Routes = [
  {path:'liste',
   component: TableChauffeurComponent},
   {path:'afficher',
   component: ListeChauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeChauffeurRoutingModule { }
