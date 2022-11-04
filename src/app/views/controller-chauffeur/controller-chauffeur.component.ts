import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-controller-chauffeur',
  templateUrl: './controller-chauffeur.component.html',
  styleUrls: ['./controller-chauffeur.component.scss']
})
export class ControllerChauffeurComponent implements OnInit {
//  step: any = 1;
//   constructor() { }

//   ngOnInit(): void {
//   }
  step: any = 1;
  submitted: any = false;
  multistep = new FormGroup({
       userDetails: new FormGroup({
           fname: new FormControl('',Validators.required),
           lname: new FormControl('')
       }),
       contactDetails: new FormGroup({
        email: new FormControl('',Validators.required),
        address: new FormControl(''),
        contactNumber: new FormControl(''),
    }),
    personalDetails: new FormGroup({
      gender: new FormControl('null'),
      education: new FormControl('')
  })
  })
  constructor() { }

  ngOnInit(): void {
  }

  get userDetails() {
        return this.multistep.controls['userDetails']['controls'];
  }

  get contactDetails() {
    return this.multistep.controls['contactDetails']['controls'];
}

  submit() {  
      this.submitted = true;
      if(this.multistep.controls.userDetails.invalid && this.step == 1) {
        return;
      }
      if(this.multistep.controls.contactDetails.invalid && this.step == 2) {
        return;
      }
      this.step = this.step + 1;
      if(this.step == 4) {
          // this.route.navigate(['/thankyou'])
      }
  }

  previous() {
    this.step = this.step - 1;
  }

}
