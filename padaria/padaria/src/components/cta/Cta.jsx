import "./Cta.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/cta-1.svg";

function Cta() {
  return (
    <section className="cta">
      <Wrapper className="cta__container">
        <div className="cta__flex">
          <img src={Img} alt="cta img" className="cta__img" />

          <div className="cta__text">
            <h2>Experimente as nossas sobremesas especiais</h2>
            <button className="button-primary">Ir para cardápio</button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Cta;
