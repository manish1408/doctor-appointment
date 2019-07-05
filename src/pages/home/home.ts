import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { FinddoctorPage } from '../finddoctor/finddoctor';
import { DoctorprofilePage } from '../doctorprofile/doctorprofile';
import { DoctroslistPage } from '../doctroslist/doctroslist';
import { ChatDoctorListPage } from '../chatDoctorList/chatDoctorList';
import { MyfeedbacksPage } from '../myfeedbacks/myfeedbacks';
import { ChatscreenPage } from '../chatscreen/chatscreen';

// import { AppointmentbookPage } from '../appointmentbook/appointmentbook';
// import { LabPage } from '../lab/lab';
import { MedicalPage } from '../medical/medical';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { AccountPage } from '../account/account';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    location: string = "HomePage";

    constructor(public navCtrl: NavController) {
    }

    finddoctor() {
        this.navCtrl.push(ChatDoctorListPage);
    }
    lab() {
        this.navCtrl.push(MyfeedbacksPage);
    }
    medical() {
        this.navCtrl.push(MedicalPage);
    }
    bookAppointment() {
        this.navCtrl.push(DoctroslistPage);
        // this.navCtrl.push(AppointmentbookPage);
    }
    chatscreen() {
        this.navCtrl.push(ChatscreenPage);
    }
    public nav(event) {
        switch (this.location) {
            case "AccountPage":
                this.navCtrl.push(AccountPage);
                break;
            case "AccountPage":
                this.navCtrl.push(AccountPage);
                break;
            case "DoctorprofilePage":
                this.navCtrl.push(DoctorprofilePage);
                break;
            case "ProfilePage":
                this.navCtrl.push(ProfilePage);
                break;

            case "SettingsPag":
                this.navCtrl.push(SettingsPage);
                break;

            default:
                break;
        }
    }
}
