import './Stats.scss';
import Wrapper from '../wrapper/Wrapper'
function Stats(){
    return(
        <section className='stats'>
            <Wrapper className='stats__container'>
                <div className="stats point">
                    <h1>10</h1>
                    <p>Shoes</p>
                </div>
                <div className="stats point">
                    <h1>06</h1>
                    <p>Years of Experience</p>
                </div>
                <div className="stats point">
                    <h1>120+</h1>
                    <p>Coffees</p>
                </div>
                <div className="stats point">
                    <h1>1202+</h1>
                    <p>Reviews</p>
                </div>
            </Wrapper>
        </section>
    )
}

export default Stats