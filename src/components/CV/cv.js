import "../CV/cv.css"
import { CVInfo, projects } from "../data/data";
import { ProjectCard } from "../cards/cards";

export const CV = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
        <div class="aboutme" id="aboutme">
            <img class="imagen" src="./public/assets/miFotoCV.png" alt="miFotoCV">
            <div class="skills">
            <h2>Skills</h2>
            <ul>
                ${CVInfo.skills.map(skills => `<li>${skills}</li>`).join('')}
            </ul>
            </div>
            <div class="objetivo">
            <h2>Objetivo Profesional</h2>
            <p>${CVInfo.objetivoProfesional}</p>
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
                    ${CVInfo.experienciaProfesional.map(experiencia => `<li>${experiencia.puesto} en ${experiencia.empresa} (${experiencia.periodo})${experiencia.detalles ? ' - ' + experiencia.detalles : ''}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="educacion hidden" id="educacion">
            <h2 class="pincha" id="toggle-experiencia">Ir a Experiencia</h2>
            <div class="educacion-content">
                <h2>Formación Académica</h2>
                <ul>
                    ${CVInfo.formacionAcademica.map(formacion => `<li>${formacion.grado} en ${formacion.institucion} (${formacion.periodo})</li>`).join('')}
                </ul>
                <div class="cursos">
                    <h2>Cursos</h2>
                    <ul>
                        ${CVInfo.cursos.map(curso => `<li>${curso}</li>`).join('')}
                    </ul>
                </div>
                <div class="idiomas">
                    <h2>Idiomas</h2>
                    <ul>
                        ${CVInfo.idiomas.map(idioma => `<li>${idioma.idioma} - ${idioma.nivel}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="informacion">
            <h2>Información Adicional</h2>
            <ul>
                ${CVInfo.informacionAdicional.map(info => `<li>${info}</li>`).join('')}
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
                ${projects.map(project => ProjectCard(project)).join('')}
            </div>
        </div>
    `;
    document.getElementById('toggle-educacion').addEventListener('click', () => {
        document.getElementById('experiencia').classList.add('hidden');
        document.getElementById('educacion').classList.remove('hidden');
    });

    document.getElementById('toggle-experiencia').addEventListener('click', () => {
        document.getElementById('educacion').classList.add('hidden');
        document.getElementById('experiencia').classList.remove('hidden');
    });

};

CV();

