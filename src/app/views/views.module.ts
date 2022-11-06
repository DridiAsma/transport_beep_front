import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ControllerAdminComponent } from './controller-admin/controller-admin.component';
import { ControllerChauffeurComponent } from './controller-chauffeur/controller-chauffeur.component';
import { ConsulterClientComponent } from './controller-admin/consulter-client/consulter-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForntPageComponent } from './fornt-page/fornt-page.component';



@NgModule({
  declarations: [
    ControllerAdminComponent,
    ControllerChauffeurComponent,
    ConsulterClientComponent,
    ForntPageComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
