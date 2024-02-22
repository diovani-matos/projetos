import "./OpenSection.scss";
import Wrapper from '../wrapper/Wrapper'
import Img1 from '../../assets/open-1.webp'
import Img2 from '../../assets/open-2.webp'

function OpenSection(){
    return(
        <section className="open">
            <Wrapper className='open__container'>
                <div className="open__first">
                    <div>
                        <img src={Img1} alt="" />
                    </div>
                    <div className="open__text">
                        <h2>The best day starts here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veritatis, saepe inventore officiis neque dolores consequatur.</p>
                    </div>
                </div>

                <div className="open__second">
                    <div className="open__text">
                        <h2>Open everyday</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veritatis, saepe inventore officiis neque dolores consequatur.</p>
                    </div>
                    <div>
                        <img src={Img2} alt="" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default OpenSection