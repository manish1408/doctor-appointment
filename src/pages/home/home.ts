import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FinddoctorPage } from '../finddoctor/finddoctor';
import { LabPage } from '../lab/lab';
import { MedicalPage } from '../medical/medical';
import { AppointmentPage } from '../appointment/appointment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
location: string = "n1";

  constructor(public navCtrl: NavController) {

  }

   finddoctor(){
    this.navCtrl.push(FinddoctorPage);
    }
    lab(){
    this.navCtrl.push(LabPage);
    }
    medical(){
    this.navCtrl.push(MedicalPage);
    }
    bookAppointment(){
    this.navCtrl.push(AppointmentPage);
    }
}
