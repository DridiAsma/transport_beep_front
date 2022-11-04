import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthchauffeurService } from 'src/app/views/services/authchauffeur.service';

@Component({
  selector: 'app-inscription-chauffeur',
  templateUrl: './inscription-chauffeur.component.html',
  styleUrls: ['./inscription-chauffeur.component.scss']
})
export class InscriptionChauffeurComponent implements OnInit {

  files: any;
  inscritchaufForm!: FormGroup;
  data: any;




  constructor(private chaufservice: AuthchauffeurService,
    private router: Router,
    private formBuilder: FormBuilder,
    public toastr: ToastrService) { }

  ngOnInit(): void {

    this.inscrit();

  }


  inscrit() {
    this.inscritchaufForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tele: ['', Validators.required],
      gendre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      emplacement: ['', Validators.required],
      type_vehicules: ['', Validators.required],
      types_paiment: ['', Validators.required],
      marque: ['', Validators.required],
      model: ['', Validators.required],
      annee: ['', Validators.required],
      num_serie: ['', Validators.required],
      nbr_place: ['', Validators.required],
      cout_km: ['', Validators.required],
      statut: ['', Validators.required],
      colour: ['', Validators.required],
      cinNum: ["", Validators.required],
      dateCin: ["", Validators.required],
      imageCin: ["", Validators.required],
      permidate: ["", Validators.required],
      numPermis: ["", Validators.required],
      imagePermis: ["", Validators.required],
      imageAss: ["", Validators.required],
      numAss: ["", Validators.required],
      dateAss: ["", Validators.required],
      imageBadg: ["", Validators.required],
      numBadg: ["", Validators.required],
      dateBadg: ["", Validators.required],
      imageCartCir: ["", Validators.required],
      numCartCir: ["", Validators.required],
      dateCartCir: ["", Validators.required],
    });
  }

  submit() {
    const formData = new FormData();
    formData.append("imageCin", this.files);
    formData.append("imageCartCir", this.files);
    formData.append("imageAss", this.files);
    formData.append("imagePermis", this.files);
    formData.append("imageBadg", this.files);
    formData.append("nom", this.inscritchaufForm.value.nom);
    formData.append("prenom", this.inscritchaufForm.value.prenom);
    formData.append("tele", this.inscritchaufForm.value.tele);
    formData.append("gendre", this.inscritchaufForm.value.gendre);
    formData.append("email", this.inscritchaufForm.value.email);
    formData.append("password", this.inscritchaufForm.value.password);
    formData.append("emplacement", this.inscritchaufForm.value.emplacement);
    formData.append("type_vehicules", this.inscritchaufForm.value.type_vehicules);
    formData.append("marque", this.inscritchaufForm.value.marque);
    formData.append("model", this.inscritchaufForm.value.model);
    formData.append("annee", this.inscritchaufForm.value.annee);
    formData.append("num_serie", this.inscritchaufForm.value.num_serie);
    formData.append("nbr_place", this.inscritchaufForm.value.nbr_place);
    formData.append("types_paiment", this.inscritchaufForm.value.types_paiment);
    formData.append("cout_km", this.inscritchaufForm.value.cout_km);
    formData.append("statut", this.inscritchaufForm.value.statut);
    formData.append("colour", this.inscritchaufForm.value.colour);
    formData.append("cinNum", this.inscritchaufForm.value.cinNum);
    formData.append("dateCin", this.inscritchaufForm.value.dateCin);
    formData.append("permidate", this.inscritchaufForm.value.permidate);
    formData.append("numAss", this.inscritchaufForm.value.numAss);
    formData.append("dateAss", this.inscritchaufForm.value.dateAss);
    formData.append("numBadg", this.inscritchaufForm.value.numBadg);
    formData.append("dateBadg", this.inscritchaufForm.value.dateBadg);
    formData.append("numCartCir", this.inscritchaufForm.value.numCartCir);
    formData.append("dateCartCir", this.inscritchaufForm.value.dateCartCir);
    formData.append("numPermis", this.inscritchaufForm.value.numPermis);
    this.chaufservice.register(formData).subscribe(res => {
      this.data = res;
      this.toastr.success("Saved successfully", "Success");
      console.log(this.data);
      this.router.navigate(['/chauffeur/login'])
    },
      (errorRes: HttpErrorResponse) => {
        this.toastr.error("Something went wrong", "Error");
      },

    )


  }




  UploadImageCin(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);
  }

  UploadImagePermis(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);

  }

  UploadImageBadg(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);

  }

  UploadImageCart(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);

  }

  UploadImageAss(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);

  }






}
