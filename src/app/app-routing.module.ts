import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { BlogsComponent } from './layouts/admin/blogs/blogs.component';
import { BodyComponent } from './layouts/admin/body/body.component';
import { ContactComponent } from './layouts/admin/contact/contact.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { ListeChauffeurComponent } from './layouts/admin/liste-chauffeur/liste-chauffeur.component';
import { LoginAdminComponent } from './layouts/admin/login-admin/login-admin.component';
import { ProfilAdminComponent } from './layouts/admin/profil-admin/profil-admin.component';
import { SidnavComponent } from './layouts/admin/sidnav/sidnav.component';
import { ChauffeurComponent } from './layouts/chauffeur/chauffeur.component';
import { CommandeChauffeurComponent } from './layouts/chauffeur/commande-chauffeur/commande-chauffeur.component';
import { InscriptionChauffeurComponent } from './layouts/chauffeur/inscription-chauffeur/inscription-chauffeur.component';
import { LoginChauffeurComponent } from './layouts/chauffeur/login-chauffeur/login-chauffeur.component';
import { ProfileChauffeurComponent } from './layouts/chauffeur/profile-chauffeur/profile-chauffeur.component';
import { ClientComponent } from './layouts/client/client.component';
import { CommandeClientComponent } from './layouts/client/commande-client/commande-client.component';
import { ForgetPasswordComponent } from './layouts/client/forget-password/forget-password.component';
import { InscriptionClientComponent } from './layouts/client/inscription-client/inscription-client.component';
import { LoginClientComponent } from './layouts/client/login-client/login-client.component';
import { RestPasswordComponent } from './layouts/client/rest-password/rest-password.component';
import { SplashScreenComponent } from './layouts/splash-screen/splash-screen.component';
import { ControllerChauffeurComponent } from './views/controller-chauffeur/controller-chauffeur.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';


const routes: Routes = [
  {

  path: 'admin', component: AdminComponent, canActivate: [GuardadminGuard],
  children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'blog', component: BlogsComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'profiladmin', component: ProfilAdminComponent},
    { path: 'chauffeur',
        loadChildren: () => import('./layouts/admin/liste-chauffeur/liste-chauffeur.module').then(m => m.ListeChauffeurModule)
    },

    { path: 'client',
    loadChildren: () => import('./layouts/admin/liste-client/liste-client.module').then(m => m.ListeClientModule),
    //loadChildren: () => import('./layouts/admin/liste-client/liste-client.module').then(m => m.ListeClientModule)
    },

  ]
},

 {path:'login', component: LoginAdminComponent},
 {path: '', component: SplashScreenComponent},

  
  {path:'registerclient', component: InscriptionClientComponent},
  {path:'loginclient', component: LoginClientComponent},
  { path: 'password-reset', component: RestPasswordComponent},
  { path: 'forget-MotPass', component: ForgetPasswordComponent},

  {path:'loginchauffeur', component: LoginChauffeurComponent},
  {path:'inscrtchauffeur', component: InscriptionChauffeurComponent},
  {
    path: 'chauffeur', component: ChauffeurComponent,
    children: [
      { path: 'commandes', component: CommandeChauffeurComponent},
      { path: 'profile', component: ProfileChauffeurComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'chauffeur',
          loadChildren: () => import('./layouts/admin/liste-chauffeur/liste-chauffeur.module').then(m => m.ListeChauffeurModule)
      },

      { path: 'client', loadChildren: () => import('./layouts/admin/liste-client/liste-client.module').then(m => m.ListeClientModule)
      },

    ]
  },

  {

    path: 'client', component: ClientComponent,
    children: [
      { path: 'commandes', component: CommandeClientComponent },
      { path: 'historique', component: ContactComponent},
      { path: 'message', component: ContactComponent},
      // { path: 'chauffeur',
      //     loadChildren: () => import('./layouts/admin/liste-chauffeur/liste-chauffeur.module').then(m => m.ListeChauffeurModule)
      // },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
