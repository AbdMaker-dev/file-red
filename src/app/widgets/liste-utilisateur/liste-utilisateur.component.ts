import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import * as myGlobals from '../../globals/VariablesGlobales';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {

  displayedColumns: string[] = ['image', 'prenom', 'nom', 'email', 'profile', 'delete'];
  @Input() dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {
    // this.getUser();
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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

  deleteUser(idUser: number): void{
    this.adminSrv.idUser = idUser;
  }
}

export interface User {
  prenom: string;
  nom: number;
}
