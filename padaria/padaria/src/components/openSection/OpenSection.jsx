import "./OpenSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/open-1.webp";
import Img2 from "../../assets/open-2.webp";

function OpenSection() {
  return (
    <section className="open" id="sobre">
      <Wrapper className="open__container">
        <div className="open__first">
          <div>
            <img src={Img1} alt="" />
          </div>
          <div className="open__text">
            <h2>Nossa história</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae maiores error reiciendis vel ex dignissimos numquam id
              cum ut, architecto perferendis accusantium quis molestiae mollitia
              animi minima, nulla consectetur necessitatibus!
            </p>
          </div>
        </div>

        <div className="open__second">
          <div className="open__text">
            <h2>Aberto todos os dias!</h2>
            <p>
              Das 07:00 às 19:00 <br /> Com produtos sempre fresquinhos e de
              qualidade, venha conferir!
            </p>
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default OpenSection;
