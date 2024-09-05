import "../header/header.css"

document.body.className = localStorage.getItem("theme") || "";

export const cambioTema = () => {
  const cambioColor = document.querySelector("#cambioColor");
  cambioColor.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.className === "light"){
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "")
    }
    cambioTexto();
  });
};

export const cambioTexto = () => {
  const cambioColor = document.querySelector("#cambioColor");
  if (cambioColor.innerText === "☾") {
    cambioColor.innerText = "☀";
  } else {
    cambioColor.innerText = "☾";
  } 
};

export const Navbar = () => `
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
`;

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
