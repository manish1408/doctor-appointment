import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { ChatsPage } from '../chats/chats';
import { HomePage } from '../home/home';
import { AppointmentPage } from '../appointment/appointment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AppointmentPage;
  tab3Root = ChatsPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
