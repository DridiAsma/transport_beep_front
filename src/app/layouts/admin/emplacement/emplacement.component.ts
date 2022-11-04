import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.scss']
})
export class EmplacementComponent implements OnInit {

 
  showMapPill!: boolean;
  mapLoaded!: boolean;
  map!: google.maps.Map;
  center!: google.maps.LatLngLiteral;

   time: string = '';
   distance: string = '';



  source!: google.maps.LatLngLiteral;
  destination!: google.maps.LatLngLiteral;
  ds!: google.maps.DirectionsService;
  dr!: google.maps.DirectionsRenderer;

  placesText!: string;
  togglePlacesSearch: boolean = false;
   destinationPin!: google.maps.Marker;
   sourcePin!: google.maps.Marker;


   constructor(private ngZone: NgZone){}












  //  showMapPill!: boolean;
  //   mapLoaded!: boolean;
  //   map!: google.maps.Map;
  //   center!: google.maps.LatLngLiteral;

  //   time: string = '';
  //   distance: string = '';

  //   source!: google.maps.LatLngLiteral;
  //   destination!: google.maps.LatLngLiteral;

  // sourcePin!: google.maps.Marker;
  // destinationPin!: google.maps.Marker;
  // sourcePoint!: google.maps.Marker;

  // locationWatchId!: number;
  // locSimulationInterval: any;
  // destinationSet!: boolean;
  // latLngs!: any[];
  // locationUpdateObj: any;

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 12
  }




  ngOnInit(): void {

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
          url:'assets/photo/imgs/truck_pin.svg',
          anchor: new google.maps.Point(35, 10),
          scaledSize: new google.maps.Size(50, 50)
        },
        map: this.map
      });



      // var markerStart = new google.maps.Marker({
      //   position: this.source,
      //   icon: {
      //     url: 'assets/taxi-icon.png',
      //     anchor: new google.maps.Point(10, 10),
      //     scaledSize: new google.maps.Size(50,50)
      //   },
      //   map: this.map
      // });

      // markerStart.addListener("click", (event: any) => {

      //      this.showMapPill = true;
      //      this.onCenterMap();
      // });

      this.map.addListener("click", (event: any) => {
        this.showMapPill = false;
      });

      // var destinationStart = new google.maps.Marker({
      //   position: this.destination,
      //   icon: {
      //     url: 'assets/blue-marker.png',
      //     anchor: new google.maps.Point(10, 10),
      //     scaledSize: new google.maps.Size(50,50)
      //   },
      //   map: this.map
      // });

      //this.setRoutePolyline();
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

  this.ngZone.run(() => {
       let distanceInfo = response!.routes[0].legs[0];
        this.distance = distanceInfo.distance!.text;
        this.time = distanceInfo.duration!.text;

  });


      }
    })
  }

  handleAddressChange(event: any){
    const lat = event.geometry.location.lat();
    const lng = event.geometry.location.lng();

    this.source = {
      lat: lat,
      lng: lng
    };

    if(!this.sourcePin){
      this.sourcePin = new google.maps.Marker({
        position: this.source,
        icon: {
          url: 'assets/blue-marker.png',
             anchor: new google.maps.Point(10, 10),
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



  //   ngOnInit() {

  //     this.ds = new google.maps.DirectionsService();
  //     this.dr = new google.maps.DirectionsRenderer({
  //       map: null!,
  //       suppressMarkers: true
  //     });

  //     // get initial current position
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.source = {
  //         lat: 37.4220656,
  //         lng: -122.0840897
  //       };

  //       this.destination = {
  //         lat: 37.342226,
  //         lng: -122.0256165
  //       };

  //       // initialize the map container
  //       this.map = new google.maps.Map(document.getElementById('map-canvas')!, {
  //         ...this.options,
  //         center: this.source
  //       });

  //       this.map.addListener('tilesloaded', () => {
  //         this.mapLoaded = true;
  //       });

  //       // adding a marker de voiture
  //       var markerStart = new google.maps.Marker({
  //         position: this.source,
  //         icon: {
  //           url: 'assets/photo/imgs/truck_pin.svg',
  //           anchor: new google.maps.Point(35,10),
  //           scaledSize: new google.maps.Size(100, 100)
  //         },
  //         map: this.map
  //       });

  // markerStart.addListener("click", (event: any) => {
  //   this.showMapPill = true;
  //   this.onCenterMap();
  // })




  //       // // exemple de affiche
  //       // markerStart.addListener("click", (event: any) => {
  //       //   let infoWindow = new google.maps.InfoWindow({
  //       //     content: "Bonjour je suis <b>asma</b>"
  //       //   });
  //       //  infoWindow.open(this.map, markerStart);
  //       // });



  //       var destinationMarker = new google.maps.Marker({
  //         position: this.destination,
  //         icon: {
  //           url: 'assets/photo/imgs/destination_custom_pin.svg',
  //           anchor: new google.maps.Point(35,10),
  //           scaledSize: new google.maps.Size(100, 100)
  //         },
  //         map: this.map
  //       });

  //       this.setRoutePolyline();
  //     });
  //   }

  //   onCenterMap(){
  //     this.map.panTo(this.source);
  //   }
  //   setRoutePolyline() {
  //     let request = {
  //       origin: this.source,
  //       destination: this.destination,
  //       travelMode: google.maps.TravelMode.DRIVING
  //     };

  //     this.ds.route(request, (response, status) => {
  //       this.dr.setOptions({
  //         suppressPolylines: false,
  //         map: this.map
  //       });

  //       if (status == google.maps.DirectionsStatus.OK) {
  //         this.dr.setDirections(response);

  //         let distanceInfo = response.routes[0].legs[0];
  //         this.distance = distanceInfo.distance.text;
  //         this.time = distanceInfo.duration.text;
  //       }
  //     })
  //   }

}

      // this.center = {
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude
      // };

      // this.destination = this.center;

    //   this.source = {
    //     lat: 37.4220656,
    //     lng: -122.0840897
    //   };

    //   this.destination = {
    //     lat: 37.342226,
    //     lng: -122.0256165
    //   };

    //   // initialize the map container
    //   this.map = new google.maps.Map(document.getElementById('map-canvas')!, {
    //     ...this.options,
    //     // center: this.destination
    //     center: this.source
    //   });

    //   this.map.addListener('tilesloaded', () => {
    //     this.ngZone.run(() => {
    //       this.mapLoaded = true;
    //     });
    //   });

    //   this.destinationPin = new google.maps.Marker({
    //     position: this.destination,
    //     icon: {
    //       url: 'assets/photo/imgs/destination_custom_pin.svg',
    //       anchor: new google.maps.Point(37,45),
    //       origin: new google.maps.Point(0,0),
    //       scaledSize: new google.maps.Size(70, 70)
    //     },
    //     map: this.map
    //   });

    //   this.map.addListener("click", (event: any) => {
    //     this.showMapPill = false;
    //   });
    // });



  //}


  // setupSourcePin() {
  //   if (!this.sourcePin) {
  //     // adding a marker
  //     this.sourcePin = new google.maps.Marker({
  //       position: this.source,
  //       icon: {
  //         url: 'assets/photo/imgs/truck_pin.svg',
  //         anchor: new google.maps.Point(37,45),
  //         origin: new google.maps.Point(0,0),
  //         scaledSize: new google.maps.Size(70, 70)
  //       },
  //       animation: google.maps.Animation.DROP,
  //       map: this.map
  //     });

  //     this.sourcePin.addListener("click", (event: any) => {
  //       this.showMapPill = true;
  //       //this.onCenterMap();
  //     });
  //   }
  //   else {
  //     this.sourcePin.setPosition(this.source);
  //   }
  // }

  // setRoutePolyline() {
  //   let request = {
  //     origin: this.source,
  //     destination: this.destination,
  //     travelMode: google.maps.TravelMode.DRIVING
  //   };

  //   this.ds.route(request, (response: any, status: any) => {
  //     this.dr.setOptions({
  //       suppressPolylines: false,
  //       map: this.map
  //     });

  //     if (status == google.maps.DirectionsStatus.OK) {
  //       this.dr.setDirections(response);


  //       this.ngZone.run(() => {
  //         let distanceInfo = response.routes[0].legs[0];
  //         this.distance = distanceInfo.distance.text;
  //         this.time = distanceInfo.duration.text;
  //       });
  //     }
  //   })
  // }

  // handleAddressChange(event: any) {
  //   const lat = event.geometry.location.lat();
  //   const lng = event.geometry.location.lng();

  //   this.source = {
  //     lat: lat,
  //     lng: lng
  //   };

  //   this.sourcePoint = new google.maps.Marker({
  //     position: this.source,
  //     icon: {
  //       url: './assets/imgs/youps_source.svg',
  //       anchor: new google.maps.Point(37,45),
  //       origin: new google.maps.Point(0,0),
  //       scaledSize: new google.maps.Size(70, 70)
  //     },
  //     map: this.map
  //   });

  //   this.setupSourcePin();
  //   this.setRoutePolyline();
  // }

  // onCenterMap() {
  //   this.map.panTo(this.source);
  // }



  // clearPlacesField() {
  //   this.placesText = "";
  // }

  // toggleSearch() {
  //   this.togglePlacesSearch = !this.togglePlacesSearch;
  // }

  // ngOnDestroy() {
  //   navigator.geolocation.clearWatch(this.locationWatchId);
  //   clearInterval(this.locSimulationInterval);
  // }
  //}
  //

