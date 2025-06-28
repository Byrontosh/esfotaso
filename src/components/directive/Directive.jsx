import user1 from '../../assets/user-1.jpg';
import user2 from '../../assets/user-2.jpg';
import user3 from '../../assets/user-3.jpg';
import user4 from '../../assets/user-4.jpg';
import user5 from '../../assets/user-5.jpg';
import user6 from '../../assets/user-6.jpg';

const Directive = () => {
    return (
        <section className="directiva__container">
            <div className="directiva__slider">
                <div className="directiva__left">
                    <i className="fa-solid fa-circle-left"></i>
                </div>
                <div className="directiva__box">
                    <img src={user1} className="directiva" />
                    <img src={user2} className="directiva" />
                    <img src={user3} className="directiva" />
                    <img src={user4} className="directiva" />
                    <img src={user5} className="directiva" />
                    <img src={user6} className="directiva" />
                </div>
                <div className="directiva__right">
                    <i className="fa-solid fa-circle-right"></i>
                </div>
            </div>
        </section>
    )
}

export default Directive