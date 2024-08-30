import './style.css'
import { Navbar } from './src/components/header/header';
import { cambioTema } from './src/components/header/header';
import { CV } from './src/components/CV/cv';
import { cambioTexto } from './src/components/header/header';
import { Footer } from './src/components/footer/footer';


const header = document.querySelector("header");
header.innerHTML = Navbar();
cambioTema();
cambioTexto();
Footer.innerHTML = Footer();
 
Main.innerHTML = CV();

