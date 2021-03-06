import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gr-competence',
  templateUrl: './gr-competence.component.html',
  styleUrls: ['./gr-competence.component.scss']
})
export class GrCompetenceComponent implements OnInit {

  panelOpenState = false;
  groupComtences: any;
  competences: any;
  chxk = Array<string>();
  allCompetence: any;

  grCompForm = new FormGroup({
    libelle: new FormControl('', [Validators.required])
  });

  constructor(private adminSrv: AdminService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getGroupCompetence();
  }

  getGroupCompetence(): void{
    this.adminSrv.getData('admin/groupe_competences').subscribe(
      data => {
        console.log(data['hydra:member']);
        this.groupComtences = data['hydra:member'];
       },
      err => {});
  }

  matSelected(event: any): void{

    if (event.index === 3) {
      this.getAllCompetences();
    }else if (event.index === 1) {
      this.getCompetences();
    }
  }

  getAllCompetences(): void{
    this.adminSrv.getData('admin/competences').subscribe(
      data => { this.allCompetence = (data['hydra:member']); },
      err => {});
  }

  getCompetences(): void{
    this.adminSrv.getData('admin/competences').subscribe(
      data => {
        console.log(data['hydra:member']);
        this.competences = data['hydra:member'];
       },
      err => {});
  }

  onSubmit(): void{
    this.grCompForm.value.competences = this.chxk;
    this.adminSrv.addData('admin/groupe_competences', this.grCompForm.value);
  }

  toggle(event: any): void{
    if (this.chxk.includes('/api/admin/competences/' + event)) {
      this.chxk = this.chxk.filter(
        // tslint:disable-next-line:typedef
        function( ele ) {
        return ele !== event;
    });
    }else{
      this.chxk.push('/api/admin/competences/' + event);
    }
  }




}
