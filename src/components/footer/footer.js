import "../footer/footer.css"
import { Button } from "../button/button"

export const Footer = () =>  {
  const footer = document.querySelector("footer");
  footer.innerHTML =  `
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
`;
 } 