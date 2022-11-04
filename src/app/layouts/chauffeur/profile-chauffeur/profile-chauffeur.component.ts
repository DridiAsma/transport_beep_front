import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-chauffeur',
  templateUrl: './profile-chauffeur.component.html',
  styleUrls: ['./profile-chauffeur.component.scss']
})
export class ProfileChauffeurComponent implements OnInit {
 
 

  // step = 1;
  // constructor() { }

  // ngOnInit(): void {
  // }
// step: any = 1;
// submitted: any = false;
// multistep = new FormGroup({
//      userDetails: new FormGroup({
//          fname: new FormControl('',Validators.required),
//          lname: new FormControl('')
//      }),
//      contactDetails: new FormGroup({
//       email: new FormControl('',Validators.required),
//       address: new FormControl(''),
//       contactNumber: new FormControl(''),
//   }),
//   personalDetails: new FormGroup({
//     gender: new FormControl('null'),
//     education: new FormControl('')
// })
// })
// constructor() { }

// ngOnInit(): void {
// }

// get userDetails() {
//       return this.multistep.controls['userDetails']['controls'];
// }

// get contactDetails() {
//   return this.multistep.controls['contactDetails']['controls'];
// }

// submit() {  
//     this.submitted = true;
//     if(this.multistep.controls.userDetails.invalid && this.step == 1) {
//       return;
//     }
//     if(this.multistep.controls.contactDetails.invalid && this.step == 2) {
//       return;
//     }
//     this.step = this.step + 1;
//     if(this.step == 4) {
//         // this.route.navigate(['/thankyou'])
//     }
// }

// previous() {
//   this.step = this.step - 1;
// }




personalDetails!: FormGroup;
addressDetails!: FormGroup;
educationalDetails!: FormGroup;
personal_step = false;
address_step = false;
education_step = false;
step = 1;

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {

      this.personalDetails = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          phone: ['',Validators.required]
      });

      this.addressDetails = this.formBuilder.group({
          city: ['', Validators.required],
          address: ['', Validators.required],
          pincode: ['',Validators.required]
      });

      this.educationalDetails = this.formBuilder.group({
          highest_qualification: ['', Validators.required],
          university: ['', Validators.required],
          total_marks: ['',Validators.required]
      });
}

get personal() { return this.personalDetails.controls; }

get address() { return this.addressDetails.controls; }

get education() { return this.educationalDetails.controls; }
next(){

  if(this.step==1){
        this.personal_step = true;
        if (this.personalDetails.invalid) { return  }
        this.step++
  }

  else if(this.step==2){
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
          this.step++;
  }
  

}

previous(){
  this.step--
 
  if(this.step==1){
    this.address_step = false;
  }
  if(this.step==2){
    this.education_step = false;
  }
 
}

submit(){
  
  if(this.step==3){
    this.education_step = true;
    if (this.educationalDetails.invalid) { return }
    alert("Well done!!")
  }
}





}
