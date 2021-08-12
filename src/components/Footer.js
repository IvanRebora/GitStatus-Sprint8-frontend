import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <footer clas="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="#">Categorías</a></li>
                                <li><a href="/login">Ingresá</a></li>
                                <li><a href="/register">Registrate</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <h4>Información</h4>
                            <ul>
                                <li><a href="#">Sobre Nosotros</a></li>
                                <li><a href="#">Envíos</a></li>
                                <li><a href="#">Devoluciones</a></li>
                                <li><a href="#">Promociones</a></li>
                                <li><a href="#">Opciones de Pago</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">

                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Políticas de Cookies</a></li>
                                <li><a href="#">Políticas de privacidad</a></li>
                                <li><a href="#">Términos y Condiciones</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#"><i class="fas fa-envelope"></i>calabozo@gmail.com </a></li>
                        <li><a href="#"><i class="fas fa-phone"></i>11-1234-5678</a></li>
                        <li><a href="#"><i class="fas fa-map-marked-alt"></i>Calle falsa 123,Buenos Aires, Argentina.</a></li>
    
                    </ul>
                     <br/>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-google-plus-square"></i></a>
    
                    </div>
    
                </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;