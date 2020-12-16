import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  tabProfiles: any;
  addUserForm: any;
  avatare: any ;
  isFormt = false;
  dataSource = new MatTableDataSource<any>();

  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {
    this.gitProfile();
    this.getUser();
    this.addUserForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      profile: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      cni: new FormControl('', [])
    });
  }



  gitProfile(): void {
    this.adminSrv.getProfiles().subscribe(data => {
      this.tabProfiles = data['hydra:member'];
      console.log(this.tabProfiles);
    }, err => {});
  }

  onSubmit(): void{
    if (this.addUserForm.invalid) {
      console.log('invalide');
      return ;
    }
    this.adminSrv.addUser(this.addUserForm.value, this.avatare);
    // window.location.reload();
  }

  uploadFiles( file: any ): void{
    this.avatare = file.files[0];
    console.log( 'file', this.avatare );
  }

  profilChang(): void{
    console.log('oki');
    if ( this.addUserForm.value.profile === 'FORMATEUR') {
      console.log('oki');
    }
  }

  deleteUser(): void{
    // console.log(this.adminSrv.idUser + 'utili');
    this.adminSrv.deleteUser(this.adminSrv.idUser).subscribe( data => { this.getUser(); }, err => {});
    
  }

  getUser(): void{
    this.adminSrv.getUser().subscribe(
      data => {
        // console.log(data);
        const dt = data['hydra:member'] ;
        console.log(dt);

        // console.log(data['hydra:member']);
        this.dataSource.data = data['hydra:member'];
      },
      err => {});
  }
}
