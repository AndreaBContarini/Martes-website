// Import ALL client logos
import allcore from '../assets/clients/allcore.png';
import aquadra from '../assets/clients/Aquadra.png';
import bluvacanze from '../assets/clients/logo-bluvacanze.png';
import citybeach from '../assets/clients/citybeach.png';
import clinicaSantaLucia from '../assets/clients/clinica_santa_lucia.png';
import divinea from '../assets/clients/logo_divinea.png';
import dolomiti from '../assets/clients/dolomiti-strade-logo.png';
import ecommerceparts from '../assets/clients/ecommerceparts-logo.png';
import fantozzi from '../assets/clients/fantozzi.png';
import gsp from '../assets/clients/gsp_logo.png';
import kerberos from '../assets/clients/kerberos-Photoroom.png';
import buildUp from '../assets/clients/Logo-Build-Up.png';
import monniSRL from '../assets/clients/monni_srl.png';
import neutralia from '../assets/clients/neutralia-logo.png';
import restworld from '../assets/clients/restworld.png';
import shapeup from '../assets/clients/shapeup-Photoroom.png';
import swissNaturalMed from '../assets/clients/swiss natural med (1).png';
import toscanini from '../assets/clients/logo_toscanini.png';
import turnover from '../assets/clients/turnover-Photoroom.png';
import winesuite from '../assets/clients/winesuite_logo-Photoroom.png';

export interface Client {
  name: string;
  logo: string;
}

export const allClients: Client[] = [
  { name: 'Build Up', logo: buildUp },
  { name: 'Toscanini', logo: toscanini },
  { name: 'Fantozzi & Associati', logo: fantozzi },
  { name: 'Dolomiti', logo: dolomiti },
  { name: 'Allcore', logo: allcore },
  { name: 'Bluvacanze', logo: bluvacanze },
  { name: 'Restworld', logo: restworld },
  { name: 'Kerberos', logo: kerberos },
  { name: 'Aquadra', logo: aquadra },
  { name: 'Swiss Natural Med', logo: swissNaturalMed },
  { name: 'Winesuite', logo: winesuite },
  { name: 'Turnover', logo: turnover },
  { name: 'GMT', logo: gsp },
  { name: 'Shape Up', logo: shapeup },
  { name: 'City Beach', logo: citybeach },
  { name: 'Clinica Santa Lucia', logo: clinicaSantaLucia },
  { name: 'Divinea', logo: divinea },
  { name: 'Ecommerce Parts', logo: ecommerceparts },
  { name: 'Monni SRL', logo: monniSRL },
  { name: 'Neutralia', logo: neutralia },
];

export const prismaClients: Client[] = [
    { name: 'Build Up', logo: buildUp },
    { name: 'Aquadra', logo: aquadra },
    { name: 'Dolomiti', logo: dolomiti },
    { name: 'Monni SRL', logo: monniSRL },
    { name: 'Neutralia', logo: neutralia },
];
