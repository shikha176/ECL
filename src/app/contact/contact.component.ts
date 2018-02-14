import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from './user';
// const email 	= require('emailjs/email');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  user: User = new User();
  @ViewChild('mapElement') mapElement: ElementRef;
  acknowledgeQuery = false;
  /* server 	= email.server.connect({
    user:    'admin@eclelectroniccomponents.com',
    password: 'Electro@57$',
    host:    'cp-in-13.webhostbox.net',
    ssl:     true,
    port: 465
  }); */
  lat: any = 28.6573888;
  lng: any = 77.2348727;

  constructor() {
  }

  submitQuery() {
    this.acknowledgeQuery = true;
    /* this.server.send({
      text:    'i hope this works',
      from:    'admin@eclelectroniccomponents.com',
      to:      'shikha.gupta176@gmail.com',
      subject: 'testing emailjs<' + this.user.email + '>'
   }, function(err, message) { console.log(err || message); }); */
    setTimeout(() => this.acknowledgeQuery = false, 4000);
  }
}
