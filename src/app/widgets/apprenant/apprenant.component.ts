import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.scss']
})
export class ApprenantComponent implements OnInit {

  @ViewChild('d1') d1: ElementRef | undefined;
  email: any;
  input: any;
  dataSource = new MatTableDataSource<any>();

  constructor(private adminSrv: AdminService) { }

  ngOnInit(): void {
    this.getAppre();
  }

  onSubmit(): void{

  }

  addInput(): void{
    let div = document.getElementById('container-add');
    this.input = document.getElementById('input');
    let new_input = this.input.cloneNode(true);

    div?.appendChild(new_input);
  }

  deleteUser(): void{

  }

  getAppre(): void{
    this.adminSrv.getData('apprenants').subscribe(
      data => {
        // console.log(data);
        const dt = data ;
        console.log(dt);

        // console.log(data['hydra:member']);
        this.dataSource.data = data['hydra:member'];
      },
      err => { console.log(err); });
  }

}
