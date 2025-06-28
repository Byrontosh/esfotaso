import Directive from "../components/directive/Directive"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Girl from "../components/headergirl/Girl"


const About = () => {
    return (
        <>
            <Header />
            <Girl />
            <section className="login__container">
                <h3 className="login__title" >Directiva</h3>
                <Directive/>
            </section>
            <Footer />
        </>
    )
}

export default About