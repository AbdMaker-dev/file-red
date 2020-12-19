import { Component } from '@angular/core';
import { AuthentificateurService } from './services/authentificateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'file-red';
  constructor(private authSrv: AuthentificateurService) {

  }

}
