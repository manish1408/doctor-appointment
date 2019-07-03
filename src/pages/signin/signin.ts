import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
 login: string = "signin";
  constructor(public navCtrl: NavController) {

  }
   tabs(){
    this.navCtrl.push(TabsPage);
    }
    forgotpassword(){
    this.navCtrl.push(ForgotpasswordPage);
    }
    
    location(){
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(TabsPage);

    }

}
