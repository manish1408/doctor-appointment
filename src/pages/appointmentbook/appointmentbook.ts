import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';

import { ChatwithdoctorPage } from '../chatwithdoctor/chatwithdoctor';

@Component({
    selector: 'page-appointmentbook',
    templateUrl: 'appointmentbook.html'
})
export class AppointmentbookPage {

    ports: any;
    port: any;
    constructor(public navCtrl: NavController) {
        this.ports = [
            { id: 0, name: 'Add new' },
            { id: 1, name: 'Nausea and Vomiting' },
            { id: 2, name: 'Fever' },
            { id: 3, name: 'Abdominal or stomach pain' },
            { id: 4, name: 'Dizziness' },
            { id: 5, name: 'Cough' },
            { id: 6, name: 'Headache' },
            { id: 7, name: 'Sore throat' },
            { id: 8, name: 'Back pain' }
        ];
    }

    chatwithdoctor() {
        this.navCtrl.push(ChatwithdoctorPage);
    }

    portChange(event: {
        component: IonicSelectableComponent,
        value: any
    }) {
        console.log('port:', event.value);
    }
}
