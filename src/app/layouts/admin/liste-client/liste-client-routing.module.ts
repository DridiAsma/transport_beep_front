import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableClientComponent } from './table-client/table-client.component';
import { TableCommandeComponent } from './table-commande/table-commande.component';

const routes: Routes = [
  {path:'listeclient',
  component: TableClientComponent },
  {path:'listecommande',
  component: TableCommandeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeClientRoutingModule { }
