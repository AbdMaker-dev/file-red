import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthentificateurService } from 'src/app/services/authentificateur.service';
import { AdminService } from '../../services/admin.service';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  public isSubmited = true;

  constructor(private authSrv: AuthentificateurService, private adminSrv: AdminService, private alert: AlertService) { }

  ngOnInit(): void {

  }

  get loginFormItem(): any {
    return this.loginForm.controls;
  }

  onSubmit(): void{
    if (this.loginForm.invalid) {
      this.alert.ErrorAlert('veuillez renseigner les champs correctement');
      // this.isSubmited = false;
      return;
    }

    this.isSubmited = true;
    this.authSrv.login(this.loginForm.value.username, this.loginForm.value.password);
  }

}
