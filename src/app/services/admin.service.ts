import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { idUser } from '../globals/VariablesGlobales';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiRoute = 'http://127.0.0.1:8000/api';
  private avatareType = '';
  private avatare: any;
  public idUser = 0;

  constructor(private http: HttpClient, private router: Router) { }

  // Get-Profiles

  getProfiles(): Observable<any> {
    return this.http.get(`${this.apiRoute}/admin/profiles`).pipe(tap(data => {
      return data;
    }));
  }

  editeProfiles(id: number, libelle: string): Observable<any> {
    console.log(libelle + ' ' + `${this.apiRoute}/admin/profiles/${id}`);
    return this.http.put(`${this.apiRoute}/admin/profiles/${id}`, { libelle }).pipe(tap(
      data => {
      return data;
    },
      err => { console.log(err); }
    ));
  }

  suppProfiles(id: number): Observable<any>{
    console.log(' ' + `${this.apiRoute}/profiles/${id}`);
    return this.http.delete(`${this.apiRoute}/admin/profiles/${id}`).pipe(tap(data => {
      return data;
    }));
  }

  addProfiles(libelle: string): Observable<any> {
    console.log(libelle + ' ' + `${this.apiRoute}/profiles`);
    return this.http.post(`${this.apiRoute}/admin/profiles`, { libelle }).pipe(tap(data => {
      return data;
    }));
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiRoute}/admin/users`).pipe(tap(data => {
      return data;
    }));
  }

  getData(route: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/${route}`).pipe(tap(
      data => {
      return data;
    },
      err => { console.log(err); }
    ));
  }

  addData(route: string, data: any): any{
    console.log(data);
    return this.http.post(`${this.apiRoute}/${route}`, data).subscribe(
      dat => { console.log(dat); },
      err => { console.log(err); });
  }

  addUser(data: any, avatare: File): any{
    if (avatare) {
      this.getBase64(avatare, data);
    }else{
      this.sendPost(data);
    }
    this.router.navigateByUrl('admin/utilisateurs');
  }

  getBase64(file: File, data: any): any {
    const me = this;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      data.avatare = reader.result;
      return me.sendPost(data);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 sendPost(data: any): any{
  return this.http.post(`${this.apiRoute}/admin/users/registre`, data).subscribe(
    data => { console.log(data); },
    err => { console.log(err); });
 }

 deleteUser(id: number): Observable<any>{
   return this.http.delete(`${this.apiRoute}/admin/users/${id}`).pipe(tap(data => {
    return data;
  }));
}

}
