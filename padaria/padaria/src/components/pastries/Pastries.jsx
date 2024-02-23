import './Pastries.scss'
import Wrapper from '../wrapper/Wrapper'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Img1 from '../../assets/pasty-1.png'
import Img2 from '../../assets/pasty-2.png'
import Img3 from '../../assets/pasty-3.png'
import Img4 from '../../assets/pasty-4.png'
import Img5 from '../../assets/pasty-5.png'
import Img6 from '../../assets/pasty-6.png'
import Img7 from '../../assets/pasty-7.png'
import Img8 from '../../assets/pasty-8.png'
import Img9 from '../../assets/pasty-9.png'
import Img10 from '../../assets/pasty-10.png'

function Pastries(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const data = [
        {
            name: 'Donut',
            price: 'R$ 6,00',
            img: Img1,
        },
        {
            name: 'Croissant tradicional',
            price: 'R$ 10,00',
            img: Img2,
        },
        {
            name: 'Cookies de chocolate',
            price: 'R$ 2,00',
            img: Img3,
        },
        {
            name: 'Bolo',
            price: 'R$ 8,00',
            img: Img4,
        },
        {
            name: 'Croissant de Kiwi',
            price: 'R$ 8,00',
            img: Img5,
        },
        {
            name: 'Croissant',
            price: 'R$ 16,00',
            img: Img6,
        },
        {
            name: '3 Donuts',
            price: 'R$ 11,00',
            img: Img7,
        },
        {
            name: 'Croissant de maça verde ',
            price: 'R$ 6,00',
            img: Img8,
        },
        {
            name: 'Croissant de chocolate',
            price: 'R$ 8,00',
            img: Img9,
        },
        {
            name: 'Pão artesanal',
            price: 'R$ 18,00',
            img: Img10,
        },
      ]
    return (
        
        <section className="flower">
            <Wrapper>
                <div className="flower__text">
                    <h2>Produtos</h2>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit soluta quod, natus odit culpa accusamus itaque sunt enim perspiciatis porro accusantium cumque eos quos tenetur!
                    </p>
                </div>

                <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={['tablet']} autoPlay={true}>
                    {data.map(({name, price, img}) => (
                        <div className="flower__card">
                            <img src={img} alt="" />
                            <h3>{name}</h3>
                            <p>{price}</p>
                        </div>
                    ))}
                </Carousel>

                <div className="flower__btn">
                    <button className="button-primary">Ir para cardápio</button>
                </div>
            </Wrapper>
        </section>
    )
}

export default Pastries