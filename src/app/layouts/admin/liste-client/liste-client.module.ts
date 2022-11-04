import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeClientRoutingModule } from './liste-client-routing.module';
import { TableClientComponent } from './table-client/table-client.component';
import { ListeClientComponent } from './liste-client.component';
import { TableCommandeComponent } from './table-commande/table-commande.component';
import { DetailesClientComponent } from './detailes-client/detailes-client.component';


@NgModule({
  declarations: [
    ListeClientComponent,
    TableClientComponent,
    TableCommandeComponent,
    DetailesClientComponent
  ],
  imports: [
    CommonModule,
    ListeClientRoutingModule
  ]
})
export class ListeClientModule { }
