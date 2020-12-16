import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tabProfiles: any;
  closeResult = '';
  public isSubmited = true;
  private lib = '';
  edirProfileForm: any;



  constructor(private adminSrv: AdminService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.gitProfile();
  }

  open( content: any, id = 0, lib = ''): void {
    this.iniFomr(lib);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'edite') {
          if (this.edirProfileForm?.invalid) {
            this.isSubmited = false;
            return;
          }
          result = this.adminSrv.editeProfiles(id, this.edirProfileForm?.value.libelle).subscribe(res => { this.gitProfile(); }, err => {});
      }else if ( result === 'supprimer'){
        result = this.adminSrv.suppProfiles(id).subscribe(res => { this.gitProfile(); }, err => {});
      }else{
          if (this.edirProfileForm?.invalid) {
            this.isSubmited = false;
            return;
          }
          result = this.adminSrv.addProfiles(this.edirProfileForm?.value.libelle).subscribe(res => { this.gitProfile(); }, err => {});
        }
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  iniFomr(lib: string): void {
    this.edirProfileForm = new FormGroup({
      libelle: new FormControl(lib, [Validators.required])
    });
  }

  gitProfile(): void {
    this.adminSrv.getProfiles().subscribe(data => {
      this.tabProfiles = data['hydra:member'];
      console.log(this.tabProfiles);
    }, err => {});
  }
}
