import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <h1>
            Fresco <span>&</span> Saboroso
          </h1>
          <p className="p-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            similique excepturi eligendi aliquam deserunt, quia error est
            quaerat, quos impedit repellendus provident libero. Libero inventore
            illo vel! Neque, dicta voluptatibus!
          </p>

          <button className="button-primary">Fazer reserva!</button>
        </div>

        <div className="hero__right">
          <img src={Img} alt="hero img" />
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
