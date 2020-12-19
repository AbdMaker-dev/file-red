import { NumberInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificateurService } from '../../services/authentificateur.service';


@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.scss']
})
export class NaveComponent implements OnInit {
  avatare: any;
  constructor(private authSrv: AuthentificateurService, private router: Router) {
    this.avatare = localStorage.getItem('avatare');
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.logOut();
    this.router.navigateByUrl('');
  }
}
