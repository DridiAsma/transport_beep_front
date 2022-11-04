import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './admin/body/body.component';
import { SidnavComponent } from './admin/sidnav/sidnav.component';
import { ContactComponent } from './admin/contact/contact.component';
import { ListeClientComponent } from './admin/liste-client/liste-client.component';
import { ListeChauffeurComponent } from './admin/liste-chauffeur/liste-chauffeur.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SublevelMenuComponent } from './admin/sidnav/sublevel-menu.component';
import { HeaderComponent } from './admin/header/header.component';

import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { ClientComponent } from './client/client.component';
import { SidenavChauffeurComponent } from './chauffeur/sidenav-chauffeur/sidenav-chauffeur.component';
import { CommandeChauffeurComponent } from './chauffeur/commande-chauffeur/commande-chauffeur.component';
import { SettingChauffeurComponent } from './chauffeur/setting-chauffeur/setting-chauffeur.component';
import { SettingClientComponent } from './client/setting-client/setting-client.component';
import { CommandeClientComponent } from './client/commande-client/commande-client.component';
import { SidenavClientComponent } from './client/sidenav-client/sidenav-client.component';
import { HeaderClientComponent } from './client/header-client/header-client.component';
import { BodyClientComponent } from './client/body-client/body-client.component';
import { BodyChauffeurComponent } from './chauffeur/body-chauffeur/body-chauffeur.component';
import { ProfileChauffeurComponent } from './chauffeur/profile-chauffeur/profile-chauffeur.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { BlogsComponent } from './admin/blogs/blogs.component';
import { CodePromoComponent } from './admin/code-promo/code-promo.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { LoginClientComponent } from './client/login-client/login-client.component';
import { LoginChauffeurComponent } from './chauffeur/login-chauffeur/login-chauffeur.component';
import { InscriptionChauffeurComponent } from './chauffeur/inscription-chauffeur/inscription-chauffeur.component';
import { AddcodePromoComponent } from './admin/code-promo/addcode-promo/addcode-promo.component';
import { ListeBlogComponent } from './admin/blogs/liste-blog/liste-blog.component';
import { ModifiercomptAdminComponent } from './admin/profil-admin/modifiercompt-admin/modifiercompt-admin.component';
import { UpdateBlogComponent } from './admin/blogs/update-blog/update-blog.component';
import { PaiementsComponent } from './admin/paiements/paiements.component';
import { VoitursComponent } from './admin/voiturs/voiturs.component';
import { MarquesComponent } from './admin/voiturs/marques/marques.component';
import { ModelsComponent } from './admin/voiturs/models/models.component';
import { TypesVoitureComponent } from './admin/voiturs/types-voiture/types-voiture.component';
import { RestPasswordComponent } from './client/rest-password/rest-password.component';
import { ModifierProfilChauffeurComponent } from './chauffeur/modifier-profil-chauffeur/modifier-profil-chauffeur.component';
import { ForgetPasswordComponent } from './client/forget-password/forget-password.component';


@NgModule({
  declarations: [
            AdminComponent,
            BodyComponent,
            SidnavComponent,
            ContactComponent,
            DashboardComponent,
            SublevelMenuComponent,
            HeaderComponent,
            SplashScreenComponent,
            ChauffeurComponent,
            ClientComponent,
            SidenavChauffeurComponent,
            CommandeChauffeurComponent,
            SettingChauffeurComponent,
            SettingClientComponent,
            CommandeClientComponent,
            SidenavClientComponent,
            HeaderClientComponent,
            BodyClientComponent,
            BodyChauffeurComponent,
            ProfileChauffeurComponent,
            ProfilAdminComponent,
            BlogsComponent,
            CodePromoComponent,
            ReviewsComponent,
            LoginAdminComponent,
            LoginClientComponent,
            LoginChauffeurComponent,
            InscriptionChauffeurComponent,
            AddcodePromoComponent,
            ListeBlogComponent,
            ModifiercomptAdminComponent,
            UpdateBlogComponent,
            PaiementsComponent,
            VoitursComponent,
            MarquesComponent,
            ModelsComponent,
            TypesVoitureComponent,
            RestPasswordComponent,
            ModifierProfilChauffeurComponent,
            ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    CdkMenuModule,
    GooglePlaceModule,
  
  ]
})
export class LayoutsModule { }
