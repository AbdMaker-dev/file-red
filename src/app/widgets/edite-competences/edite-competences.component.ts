import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-edite-competences',
  templateUrl: './edite-competences.component.html',
  styleUrls: ['./edite-competences.component.scss']
})
export class EditeCompetencesComponent implements OnInit {

  addCompetenceForm: any;
  niveaux = new Array<any>();

  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {
    this.addCompetenceForm = new FormGroup({
      libelle : new FormControl('', [Validators.required]),
      criEvaluation1 : new FormControl('', [Validators.required]),
      grAction1 : new FormControl('', [Validators.required]),
      criEvaluation2 : new FormControl('', [Validators.required]),
      grAction2 : new FormControl('', [Validators.required]),
      criEvaluation3 : new FormControl('', [Validators.required]),
      grAction3 : new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void{

    if (this.addCompetenceForm.invalid) {
      console.log('valide');
      return ;
    }

    this.niveaux.push(
    { libelle: 'niveau 1', criEvaluation : this.addCompetenceForm.value.criEvaluation1, grAction : this.addCompetenceForm.value.grAction1 }
      );
    this.niveaux.push(
    { libelle: 'niveau 2', criEvaluation : this.addCompetenceForm.value.criEvaluation2, grAction : this.addCompetenceForm.value.grAction2 }
    );
    this.niveaux.push(
    { libelle: 'niveau 3', criEvaluation : this.addCompetenceForm.value.criEvaluation3, grAction : this.addCompetenceForm.value.grAction3 }
    );

    const cmpt = {libelle: this.addCompetenceForm.value.libelle, niveaux: this.niveaux};
    console.log(cmpt);

    this.adminSrv.addData('admin/competences', cmpt);


  }

}
