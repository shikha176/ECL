import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showTopBtn = false;
  categories: Array<any> = [
    // tslint:disable-next-line:max-line-length
    {name: 'Capacitors', desc: 'Aluminium electrolytic, Film, Ceramic disc, Styrolex, MPP capacitors etc.'
    , img: '../assets/images/capacitor.png'},
    {name: 'Resistors', desc: 'Film, Wire wound and Variable resistors', img: '../assets/images/resistors.png'},
    {name: 'Relays', desc: 'Telecom, Sugar cube and Power relays', img: '../assets/images/relays.png'},
    {name: 'Transistors', desc: 'MOSFETS, Small and Big transistors', img: '../assets/images/transistor.jpg'},
    {name: 'ICs', desc: 'Linear, Digital and Industrial range of ICs', img: '../assets/images/ICs.jpg'},
    {name: 'Diodes', desc: 'Zeners, Rectifying and Switching diodes', img: '../assets/images/diodes.jpg'},
    {name: 'Connectors', desc: 'IC-bases, Relimate and CPU connectors', img: '../assets/images/connector.jpg'},
    {name: 'MOVs', desc: 'Metal Oxide Varistors', img: '../assets/images/mov.png'}
  ];
}
