

const Footer = () => {
    return (
        <footer data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="footer__flex">

                <div className="footer__redes" data-aos="fade-right" data-aos-delay="200">
                    <p className="footer__title">Síguenos en redes</p>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>

                <div className="footer__enlaces" data-aos="fade-up" data-aos-delay="300">
                    <p className="footer__title">Enlaces de interés</p>
                    <ul className="footer__links">
                        <li>Saew</li>
                        <li>EPN</li>
                        <li>ESFOT</li>
                        <li>Quipux</li>
                        <li>SII</li>
                    </ul>

                </div>
                <div className="footer__contactos" data-aos="fade-left" data-aos-delay="400">
                    <p className="footer__title">Llámanos</p>
                    <i className="fa-brands fa-whatsapp"></i>
                    <p className="footer__number">
                        <a href="https://api.whatsapp.com/send?phone=+0995644186&text=Deseo%20m%C3%A1s%20informaci%C3%B3n%20" target="__blank" className="link">
                            +593-995644186
                        </a>
                    </p>
                    <p className="footer__title">Escríbenos</p>
                    <i className="fa-regular fa-envelope"></i>
                    <p className="footer__mail">asoesfot@epn.edu.ec</p>

                </div>
            </div>
            <p className="footer__copyright">Derechos reservados</p>
        </footer>

    )
}

export default Footer