
import { Main } from '../components/main/Main';
import Header from '../components/header/Header';
import Careers from '../components/careers/Careers';
import Events from '../components/events/Events';
import Footer from '../components/footer/Footer';




const Landing = () => {



    return (
        <>
            <div data-aos="fade-down">
                <Header />
            </div>

            <div data-aos="zoom-in" data-aos-duration="1500">
                <Main />
            </div>


            <Careers/>

            <Events/>

            <Footer/>

        </>
    )
}

export default Landing