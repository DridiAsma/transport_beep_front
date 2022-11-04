import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


// import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// import { AngularFireDatabaseModule } from"@angular/fire/compat/database";
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
// import { SnotifyModule, SnotifyService} from 'ng-snotify';
// import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';

import { AsyncPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutsModule,
    OverlayModule,
    CdkMenuModule,
    GoogleMapsModule,
   GooglePlaceModule,
   ToastrModule.forRoot({timeOut: 5000, positionClass: 'toast-top-right', preventDuplicates: true,}),
  //  AngularFireModule.initializeApp(environment.firebase),
  //  SnotifyModule,
   ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule
  ],
  providers: [AsyncPipe, 
    // MessagingService,
    // { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    // SnotifyService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
