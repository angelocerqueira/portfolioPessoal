import initMenu from './menu-mobile.js'
import { SlideNav } from './slide.js';


initMenu();

const slide = new SlideNav('.slide', '.slideWrapper');
const slide2 = new SlideNav('.slide2', '.slideWrapper2');
const aboutSlid = new SlideNav('.slide3', '.slideWrapper3');
const aboutSlid2 = new SlideNav('.slide4', '.slideWrapper4');

slide.init();
slide2.init();
aboutSlid.init();
aboutSlid2.init();
  

