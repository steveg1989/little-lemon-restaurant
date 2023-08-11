import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greekSalad.jpg';
import Bruschetta from '../../../assets/food/bruschetta (1).jpg';
import LemonDessert from '../../../assets/food/lemon-dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menuu.png')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Our famous greek salad, made with tomato, lettuce, olives and our Chicago style feta cheese garanished with our fresh croutons 
                 ."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Our Bruschetta is a Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated with powdered citrus
                 and lemon zest."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}