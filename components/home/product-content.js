import content             from '../../helpers/content';
// import HomeContent         from './content';
import Carousel            from './carousel';
import { section, 
  backgroundMid }          from '../../helpers/common-styles';
import { fireGtmHover }    from '../../helpers/tag-manager';

export default function ProductContent(props) {

  const solutions = Array.isArray(content.solutions) ? content.solutions : [];
  
  return <div className='products-container'>
    {
      solutions.map((solution, i) => {
        const reverseClass = i % 2 === 0 ? '' : 'reverse';

        return <section key={i} 
          className={`section ${reverseClass}`}
          id={`team-${solution.productHtmlId}`}
          onMouseEnter={()=>fireGtmHover(solution.productHtmlId)}>
          <Carousel 
            solution    = {solution}
            toggleModal = {props.toggleModal} />
        </section>
      })
    }
    <style jsx>{`
      .products-container {
        flex-direction: column;
        width: 100vw;
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
