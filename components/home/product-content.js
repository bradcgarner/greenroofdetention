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
        const p = partnerObj[code] || {};
        if(!p.useFrames){ return null; }
        const generalDescription = Array.isArray(p.generalDescription) ?
          p.generalDescription : [];

        const reverseClass = i % 2 === 0 ? '' : 'reverse';

        return <section key={i} 
          className={`section ${reverseClass}`}
          id={`team-${p.code}`}
          onMouseEnter={()=>fireGtmHover(p.code)}>
          
          <div className='product-header-div'>
            <h2 className='product-header'>
              {p.productName} by {p.name}
            </h2>
            {
              generalDescription.map((d,i)=>{
                return <p key={i} className='general-description'>
                {d}
              </p>
              })
            }
          </div>
          
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
      .product-header-div {
        max-width: 90%;
        flex-direction: column;
      }
      @media (min-width: 900px){
        .product-header-div {
          max-width: 900px;
          flex-direction: column;
        }
      }
      .product-header {
        font-size: 24px;
        margin-bottom: 15px;
      }
      .general-description {
        line-height: 18px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
}
