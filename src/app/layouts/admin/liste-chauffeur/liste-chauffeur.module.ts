import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeChauffeurRoutingModule } from './liste-chauffeur-routing.module';
import { ListeChauffeurComponent } from './liste-chauffeur.component';
import { TableChauffeurComponent } from './table-chauffeur/table-chauffeur.component';
import { TableDemandesComponent } from './table-demandes/table-demandes.component';
import { DetailesChauffeurComponent } from './detailes-chauffeur/detailes-chauffeur.component';


@NgModule({
  declarations: [
    ListeChauffeurComponent,
    TableChauffeurComponent,
    TableDemandesComponent,
    DetailesChauffeurComponent,
  ],
  imports: [
    CommonModule,
    ListeChauffeurRoutingModule
  ]
})
export class ListeChauffeurModule { }
