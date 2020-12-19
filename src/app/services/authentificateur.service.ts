import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';
import { AlertService } from './alert.service';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthentificateurService {

  private decodedToken = null;
  isconnect = false;
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private apiRoute = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient, private router: Router, private adminSrv: AdminService, private alert: AlertService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('current') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): any{
    return this.currentUserSubject.value;
   }


  login(username: string, password: string): any {
    return this.httpClient.post(`${this.apiRoute}/login`, { username, password }).subscribe(result => {
      localStorage.clear();
      this.saveToken(result);
      this.routage();
      this.getCurrentUser();
      this.alert.succesOparion('succès !!!');
      this.currentUserSubject.next(true);
      this.isconnect = true;
      return true;
    },
    err => {
      this.alert.ErrorAlert('vérifier la validité de vos informations');
      console.log(err.error);
     }
    );
  }

  getCurrentUser(): void{
    this.adminSrv.getData('admin/user').subscribe(
      data => {
        // console.log(data.result.avatare);
        localStorage.setItem('avatare', data.result.avatare);
      },
      err => {});
  }

  private saveToken(tokens: any): any {
    tokens = tokens.token;
    this.decodedToken = jwt.decodeToken(tokens);
    localStorage.setItem('auth_tkn', tokens);
    localStorage.setItem('user', JSON.stringify(this.decodedToken));
    return tokens;
  }

  asCurrentConnect(): boolean{
    return localStorage.getItem('auth_tkn') != null ? true : false;
  }

  private routage(): void {
    const  user = localStorage.getItem('user') ? localStorage.getItem('user') : '';
    let { roles } = JSON.parse('' + localStorage.getItem('user'));
    if (roles.includes('ROLE_APPRENANT')) {
      this.getUser().subscribe(
        datas => {
          var { attente } = JSON.parse(JSON.stringify(datas));
          if (attente) {
            // redirection vers la formulaire d'inscriptio
            this.router.navigateByUrl('/registre');
          } else {
            // redirection vers la page accueil apprenant
            this.router.navigateByUrl('/apprenant');
          }
        },
        err => {
          console.log(err);
        }
      );
      // Le routage des autre profile
    }else if (roles.includes('ROLE_CM')) {
      // redirection vers la page accueil cm
      this.router.navigateByUrl('/cm');
    } else if (roles.includes('ROLE_FORMATEUR')) {
      // redirection vers la page accueil FORMATEUR
      this.router.navigateByUrl('/formateur');
    } else if (roles.includes('ROLE_ADMIN')) {
      // redirection vers la page accueil ADMIN
      this.router.navigateByUrl('/admin');
    } else {
      // redirection vers la page 404
      this.router.navigateByUrl('');
    }
  }

  // register(email:string, password:string) {
  //   return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {email, password}).pipe(tap(res => {
  //   this.login(email, password)
  // }))
  // }

  logout(): void {
    localStorage.clear();
  }

  public getToken(): any {
    return localStorage.getItem('auth_tkn');
  }

  public loggedIn(): boolean {
    return localStorage.getItem('auth_tkn') !== null;
  }

  public getUser(): Observable<any> {
    return this.httpClient.get(`${this.apiRoute}/user`).pipe(tap(data => {
      return data;
    }));
  }

  public updateApprenant(user: any): Observable<any> {
    return this.httpClient.post(`${this.apiRoute}/user`, user).pipe(tap(data => {
      return data;
    }));
  }


  // -------------------------------------------------------Les Fakers
  fakeRegister(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/register', user).pipe(tap(token => {
      console.log(token);
      return token;
    }));
  }

  fakeLogin(email: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', { email, password }).pipe(tap(token => {
      localStorage.clear();
      return this.saveToken(token);
    }));
  }

}
