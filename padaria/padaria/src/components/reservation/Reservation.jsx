import "./Reservation.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/reservation.webp";

function Reservation() {
  return (
    <section className="reservation" id="reserva">
      <Wrapper className="reservation__container">
        <div className="reservation__left">
          <img src={Img} alt="" />
        </div>

        <div className="reservation__right">
          <h2>
            Faça sua <br /> Reserva!
          </h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Seu E-mail" />
            <input type="tel" placeholder="Número de telefone" />
            <button className="button-primary">Fazer reserva</button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}

export default Reservation;
