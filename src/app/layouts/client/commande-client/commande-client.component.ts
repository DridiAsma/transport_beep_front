import { Component, NgZone, OnInit } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import {} from 'googlemaps';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Commande } from './commande';
import { PaiementService } from 'src/app/views/services/paiement.service';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.scss']
})
export class CommandeClientComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  public form!: FormGroup;
  commandes: any;
  public commande!: Commande;



  Latitude: string = ''
 Longitude: string = ''
 showMapPill!: boolean;
 mapLoaded!: boolean;
 map!: google.maps.Map;
 center!: google.maps.LatLngLiteral;

  time: string = '';
  distance: string = '';



 source!: google.maps.LatLngLiteral;
 destination!: google.maps.LatLngLiteral;

 options: google.maps.MapOptions = {
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: true,
  disableDefaultUI: true,
  disableDoubleClickZoom: true,
  zoom: 12
 }

 ds!: google.maps.DirectionsService;
 dr!: google.maps.DirectionsRenderer;

  placesText!: string;
  togglePlacesSearch: boolean = false;
  destinationPin!: google.maps.Marker;
  sourcePin!: google.maps.Marker;


 constructor(private ngZone: NgZone,
  private formBuilder: FormBuilder,
  private addService: PaiementService,
  private  toastr: ToastrService,
 ){}

  ngOnInit(): void {

    this.form = this.buildForm(); // for methode ajouter commande
    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer({
      map: null!,
      suppressMarkers: true
  });





    navigator.geolocation.getCurrentPosition(position => {

      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      this.destination = this.center;
      this.map = new google.maps.Map(document.getElementById('map-canvas')!,
      {
        ...this.options,
        center: this.destination
      });

      this.map.addListener('tilesloaded', () => {
        this.ngZone.run(()=> {
          this.mapLoaded = true;
        });

      });

      this.destinationPin = new google.maps.Marker({
        position: this.destination,
        icon: {
          url:'assets/photo/imgs/destination_custom_pin.svg',
          anchor: new google.maps.Point(20, 10),
          scaledSize: new google.maps.Size(50, 50)
        },
        map: this.map
      });


      this.map.addListener("click", (event: any) => {
        this.showMapPill = false;
      });


    });
  }

  setRoutePolyline(){
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.ds.route(request, (response, status) =>
    {
      this.dr.setOptions({
        suppressPolylines: false,
        map: this.map
      });

      if (status == google.maps.DirectionsStatus.OK){
        this.dr.setDirections(response);
 //cette fonction pour le time

     this.ngZone.run(() =>{
       let distanceInfo = response!.routes[0].legs[0];
        this.distance = distanceInfo.distance!.text;
        this.time = distanceInfo.duration!.text;

      }
      ); }
    })
  }

  handleAddressChange(event: any){
    const lat = event.geometry.location.lat();
    const lng = event.geometry.location.lng();

    this.Latitude = event.geometry.location.lat(),
    this.Longitude = event.geometry.location.lng(),

    this.source = {
      lat: lat,
      lng: lng
    };

    if(!this.sourcePin){
      this.sourcePin = new google.maps.Marker({
        position: this.source,
        icon: {
          url: 'assets/photo/imgs/truck_pin.svg',
             anchor: new google.maps.Point(20, 10),
             scaledSize: new google.maps.Size(50,50)
        },
        animation: google.maps.Animation.DROP,
        map: this.map
      });
  this.sourcePin.addListener("click", (event: any) => {
  this.showMapPill = true;
  this.onCenterMap();
   });

  }else {
    this.sourcePin.setPosition(this.source);
  }


 this.setRoutePolyline();

    }

  onCenterMap() {
    this.map.panTo(this.source);
  }


 clearPlacesField(){
  this.placesText = "";
 }


 toggleSearch(){
  this.togglePlacesSearch = !this.togglePlacesSearch;
  }

 //getliste de commande for admin
  // getCommande(){
  //     this.addService.indexCommande().subscribe(response=>{
  //       console.log(response)
  //       this.commandes=response;
  //     });
  //   }


// function ajouter commande
 private buildForm(): FormGroup{
  return new FormGroup({
   chauffeur_id: new FormControl('',[Validators.required]),
   type_vehicules: new FormControl('taxi'),
   types_paiment: new FormControl('',[Validators.required]),
   nbr_persone: new FormControl('',[Validators.required]),
   texts: new FormControl(''),
   prixclient: new FormControl('',[Validators.required]),
   codepromo: new FormControl(''),
   statut: new FormControl('',[Validators.required]),
   duree: new FormControl('',[Validators.required]),
  })
 }

 onSubmit(){ this.saveCommande(); }

 saveCommande(){
  if (this.form.valid) {
    // this.spinner.show();
    const data = this.getModel();
      this.addService.ajouterCommande(data).subscribe(
       () => this.onSaveClient(),
       (errorRes : HttpErrorResponse) =>{
        this.toastr.error("Something went wrong", "Error");
       },()=> {
       this.toastr.info("Informations complétées", "En complément");
      //  this.spinner.hide();
       },

   );
  }
 }
 onSaveClient(){
  this.toastr.success("Enregistré avec succès", "Success");
  this.form.reset();
 }

 getModel(): Commande {
  const formValue = this.form.getRawValue();
  return <Commande>{
   chauffeur_id: formValue.chauffeur_id,
   type_vehicules: formValue.type_vehicules,
   types_paiment: formValue.types_paiment,
   nbr_persone: formValue.nbr_persone,
   texts: formValue.texts,
   prixclient: formValue.prixclient,
   codepromo: formValue.codepromo,
   statut: formValue.statut,
   duree: formValue.duree,
  };
 }




}
