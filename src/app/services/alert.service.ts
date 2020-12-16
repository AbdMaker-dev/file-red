import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  validAlert(msg: string): void{
    Swal.fire(
      'Cool !!!',
       msg,
      'success'
    );
  }

  succesOparion(msg: string): void{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  ErrorAlert(msg: string): void{
    Swal.fire({
      icon: 'error',
      title: msg,
      text: '',
      footer: ''
    });
  }
}
