(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function d(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=d(i);fetch(i.href,a)}})();const p=()=>{document.querySelector("#cambioColor").addEventListener("click",()=>{document.body.classList.toggle("light"),s()})},s=()=>{const o=document.querySelector("#cambioColor");o.innerText==="☾"?o.innerText="☀":o.innerText="☾"},u=()=>`
<header>
  <div class="titulo">
    <h1>Ignacio Pérez</h1>
    <ul>
      <li>
        <button id="cambioColor">☀</button>
      </li>
    </ul>
  </div>

  <nav>
    <ul class="enlacesNab">
      <li><a href="#aboutme">Acerca de mí</a></li>
      <li><a href="#experiencia">Experiencia</a></li>
      <li><a href="#educacion">Educación</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
    </ul>
  </nav>
</header>
`;window.addEventListener("scroll",()=>{const o=document.querySelector("header");window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled")});const m=[{title:"Web de Componentes JavaScript",description:"aqui vemos otra forma mas de como ordenar colocar y usar los distintos componentes",image:"../assets/proyectoComponentes.png",tech:["HTML5","CSS3","JavaScript","VITE"],github:"https://github.com/IgnacioP46/Proyecto-Web-Componente.git",link:"https://webasincrona.netlify.app/",tipo:"Proyecto"},{title:"Web Asincrona",description:"aqui vemos el uso de las llamadas a apis",image:"../assets/proyectoWebAsincrona.png",tech:["HTML5","CSS3","JavaScript","VITE","unsplash"],github:"https://github.com/IgnacioP46/Proyecto-Web-Asincrona.git",link:"https://webasincrona.netlify.app/",tipo:"Proyecto"},{title:"Porfolio",description:"montamos una SPA con nuestros trabajos y CV",image:"./assets/proyectoPorfolio.png",tech:["HTML5","CSS3","JavaScript","VITE"],github:"https://github.com/IgnacioP46/Porfolio.git",link:"https://ignacioperez.netlify.app",tipo:"Proyecto"},{title:"Color Flipper",description:"primera pagina usando VITE",image:"./assets/proyectoColorFlipper.png",tech:["HTML5","CSS3","JavaScript","VITE"],github:"https://github.com/IgnacioP46/VITE-ColorFlipper.git",link:"http://127.0.0.1:5500/VITE/COLOR%20FLIPPER/color-flipper/index.html/",tipo:"proyecto"},{title:"proyecto DOM",description:"Aqui vemos la misma pagina que antes, pero aqui esta montada con java unido al HTML y CSS",image:"./assets/proyetoDOM.png",tech:["HTML5","CSS3","JavaScript"],github:"https://github.com/IgnacioP46/Pr-ctica-DOM.git",link:"https://discosrizos.netlify.app/",tipo:"proyecto"}],t={nombre:"Ignacio Pérez",contacto:{telefono:"662 168 668",email:"ignacioperez9946@gmail.com",direccion:"Madrid"},objetivoProfesional:"Profesional con más de 10 años de experiencia en el ámbito culinario, incluyendo 6 años como jefe de cocina y 1 año como chef ejecutivo. Actualmente, estoy en proceso de transición hacia el desarrollo web, área en la que estoy adquiriendo nuevas habilidades técnicas. Mi objetivo es combinar mi experiencia en liderazgo, gestión de equipos, ambición y resolución de problemas con mis conocimientos en tecnología para aportar soluciones creativas y eficientes en el desarrollo de proyectos web.",idiomas:[{idioma:"Castellano",nivel:"Nativo"},{idioma:"Inglés",nivel:"Nivel bajo"}],formacionAcademica:[{grado:"Master en Desarrollo Web",institucion:"The Power",periodo:"Mayo 2024 - actual"},{grado:"Grado superior en DAW",institucion:"The Power",periodo:"septiembre 2024 - actual"},{grado:"Grado superior en dirección de cocina",institucion:"I.E.S. María de Zayas y Sotomayor",periodo:"Septiembre 2012 - Junio 2015"},{grado:"Grado medio en cocina",institucion:"I.E.S. Santa María Del Castillo",periodo:"Septiembre 2009 - Junio 2011"}],experienciaProfesional:[{puesto:"Jefe de cocina",empresa:"Compass Group Eurest - Colegio Highlands School El Encinar",periodo:"Septiembre 2023 - Actual"},{puesto:"Jefe de cocina - Chef Ejecutivo",empresa:"Compass Group Eurest",periodo:"Marzo 2022 - Julio 2023",detalles:"Equipo de aperturas"},{puesto:"Segundo de cocina",empresa:"Salas VIP de AENA - Viandas Selección",periodo:"Septiembre 2021 - Marzo 2022",detalles:"Con el cocinero Rodrigo de la Calle, cocinero con estrella Michelin"},{puesto:"Cocinero",empresa:"SerUnion",periodo:"Abril 2021 - Agosto 2021"},{puesto:"Jefe de cocina",empresa:"Cyrclo",periodo:"Octubre 2020 - Abril 2021"},{puesto:"Segundo de cocina",empresa:"Salas VIP de AENA - Building Big Bussines",periodo:"Septiembre 2018 - Marzo 2020",detalles:"Con el cocinero Andreu Genestra, cocinero con estrella Michelin"},{puesto:"Ayudante de cocina",empresa:"Salas VIP de AENA - Viandas Selección",periodo:"Octubre 2017 - Septiembre 2018",detalles:"Con el cocinero Andreu Genestra, cocinero con estrella Michelin"},{puesto:"Segundo de cocina",empresa:"Dr. Crocket gourmet",periodo:"Julio 2016 - Septiembre 2017"},{puesto:"Cocinero",empresa:"Restaurante voltereta",periodo:"Diciembre 2015 - Junio 2016"},{puesto:"Ayudante de cocina",empresa:"Hotel Wellington",periodo:"Junio 2015 - Noviembre 2015"},{puesto:"Alumno en prácticas",empresa:"Hotel Wellington",periodo:"Marzo 2015 - Junio 2015"},{puesto:"Alumno en prácticas",empresa:"Hotel AC Cuzco",periodo:"Marzo 2011 - Junio 2011"}],cursos:["Figma","Título de manipulador de alimentos","Curso de cata de aceites"],skills:["HTML5","CSS","JavaScript","VITE"],informacionAdicional:["Carné de conducir B1 y A","Vehículo propio","tSpoonLab: nivel avanzado","Microsoft Office nivel avanzado","Disponibilidad total"],sitioWeb:[{linkedin:"https://www.linkedin.com/in/ignacio-perez-alvarez/"},{Portfolio:"https://ignacioperez.netlify.app"}],foto:"/assets/miFotoCV-DHSWgIuS.png"},g=o=>`
<div class="project-card">
 <a href="${o.link}" target="_blank">
    <img src=${o.image} alt=${o.title} />
  </a>
  <div class="header">
    <h2>${o.title}</h2>
    <div>
      <a href=${o.github} target="_blank">
        <img src="./assets/logo GitHub.png" alt="GitHub Icon" />
      </a>
      <a href=${o.link} target="_blank">
        <img src="./assets/logo Link.png" alt="Link icon" />
      </a>
    </div>
  </div>
  <div class="detail">
    <p>${o.description}</p>
    <p class="tech">${o.tech.join(" - ")}</p>
  </div>
</div>
`,l=()=>{const o=document.querySelector("main");o.innerHTML=`
        <div class="aboutme" id="aboutme">
            <img class="imagen" src="/assets/miFotoCV.png" alt="miFotoCV">
            <div class="skills">
            <h2>Skills</h2>
            <ul>
                ${t.skills.map(e=>`<li>${e}</li>`).join("")}
            </ul>
            </div>
            <div class="objetivo">
            <h2>Objetivo Profesional</h2>
            <p>${t.objetivoProfesional}</p>
            </div>
            <div class="contactame">
             <h3><a href="mailto:ignacioperez9946@gmail.com">Contactame</a></h3>
            </div>
        </div>
        <div class="experiencia" id="experiencia">
            <h2 class="pincha" id="toggle-educacion">Ir a Educación</h2>
            <div class="experiencia-content">
                <h2>Experiencia Profesional</h2>
                <ul>
                    ${t.experienciaProfesional.map(e=>`<li>${e.puesto} en ${e.empresa} (${e.periodo})${e.detalles?" - "+e.detalles:""}</li>`).join("")}
                </ul>
            </div>
        </div>

        <div class="educacion hidden" id="educacion">
            <h2 class="pincha" id="toggle-experiencia">Ir a Experiencia</h2>
            <div class="educacion-content">
                <h2>Formación Académica</h2>
                <ul>
                    ${t.formacionAcademica.map(e=>`<li>${e.grado} en ${e.institucion} (${e.periodo})</li>`).join("")}
                </ul>
                <div class="cursos">
                    <h2>Cursos</h2>
                    <ul>
                        ${t.cursos.map(e=>`<li>${e}</li>`).join("")}
                    </ul>
                </div>
                <div class="idiomas">
                    <h2>Idiomas</h2>
                    <ul>
                        ${t.idiomas.map(e=>`<li>${e.idioma} - ${e.nivel}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>

        <div class="informacion">
            <h2>Información Adicional</h2>
            <ul>
                ${t.informacionAdicional.map(e=>`<li>${e}</li>`).join("")}
            </ul>
        </div>
        <div class="sitio">
            <h2>Sitio Web</h2>
            <ul>
            <li><a href="https://ignacioperez.netlify.app">Portfolio:</a></li>
            <li><a href="https://www.linkedin.com/in/ignacio-perez-alvarez/">linkedin:</a></li> 
            </ul>
        </div>
        <div class="proyectos" id="proyectos">
            <h2>Proyectos</h2>
            <div class="project-list">
                ${m.map(e=>g(e)).join("")}
            </div>
        </div>
    `,document.getElementById("toggle-educacion").addEventListener("click",()=>{document.getElementById("experiencia").classList.add("hidden"),document.getElementById("educacion").classList.remove("hidden")}),document.getElementById("toggle-experiencia").addEventListener("click",()=>{document.getElementById("educacion").classList.add("hidden"),document.getElementById("experiencia").classList.remove("hidden")})};l();const r=()=>{const o=document.querySelector("footer");o.innerHTML=`
<footer>
<div class = "cont">
   <h2 class = "h2foo">Contacto:</h2>
  <ul>
  <li>tel:662168668</li>
  <li>correo:ignacioperez9946@gmail.com</li>
</ul>
</div>
<p>&copy; Desarrollado por Ignacio Perez</p>
</footer>
`},h=document.querySelector("header");h.innerHTML=u();p();s();r.innerHTML=r();Main.innerHTML=l();
