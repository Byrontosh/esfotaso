import Characters from "../components/characters/Characters"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Girl from "../components/headergirl/Girl"

const Services = () => {
    return (
        <>
            <Header />
            <Girl />
            <section className="login__container">
                <h3 className="login__title" >Servicios</h3>
            </section>
            <section className="login__container">
                <Characters />
            </section>
            <Footer />
        </>

    )
}

export default Services