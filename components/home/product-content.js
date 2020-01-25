import content             from '../../helpers/content';
// import HomeContent         from './content';
import Carousel            from './carousel';
import { section, 
  backgroundMid }          from '../../helpers/common-styles';
import { fireGtmHover }    from '../../helpers/tag-manager';
import { partnerObj } from '../../helpers/partners-input';

export default function ProductContent(props) {
    
  return <div className='products-container'>
    {
      Object.keys(partnerObj).map((code, i) => {
        const p = partnerObj[code];
        const reverseClass = i % 2 === 0 ? '' : 'reverse';

        return <section key={i} 
          className={`section ${reverseClass}`}
          id={`team-${p.code}`}
          onMouseEnter={()=>fireGtmHover(p.code)}>
          <Carousel 
            partner    = {p}
            toggleModal = {props.toggleModal} />
        </section>
      })
    }
    <style jsx>{`
      .products-container {
        flex-direction: column;
        width: 100vw;
        margin-top: 25px;
      }
      .section {
        ${section}
        flex-direction: column;
        padding-top: 20px;
        padding-left: 0;
        padding-right: 0;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 400px;
      }
      @media (min-width: 600px){
        .section {
          min-height: 600px;  
        }
      }
      .reverse {
        ${backgroundMid}
      }
    `}</style>
  </div>
}
