import event1 from '../../assets/e1.jpg';
import event2 from '../../assets/e2.jpg';
import event3 from '../../assets/e3.jpg';
import event4 from '../../assets/e4.jpg';
import event6 from '../../assets/e6.jpg';


const Events = () => {
    return (
            <section className="eventos__container">
                <h3 className="carreras__title">Eventos</h3>
                <div className="eventos__grid" data-aos="zoom-in-right" data-aos-duration="3000">
                    <div className="div1" data-aos="flip-left" data-aos-duration="3000">
                        <img src={event1} alt="event1" />
                    </div>
                    <div className="div2" data-aos="flip-up" data-aos-duration="3000">
                        <img src={event2} alt="event1" />
                    </div>
                    <div className="div3" data-aos="flip-left" data-aos-duration="3000">
                        <img src={event3} alt="event3" />
                    </div>
                    <div className="div4" data-aos="flip-left" data-aos-duration="3000">
                        <img src={event4} alt="event1" />
                    </div>
                    <div className="div5" data-aos="flip-down" data-aos-duration="3000">
                        <img src={event6} alt="event6" />
                    </div>
                </div>

            </section>

    )
}

export default Events