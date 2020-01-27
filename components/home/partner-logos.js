import LazyLoad          from 'react-lazyload';
import { 
  disabledButtonColor,
  greenDarker, }         from '../../helpers/common-styles';
import { partnerList }   from '../../helpers/partners-input';

export default function PartnerLogos(){

  return <div className='logos-container'>
    {
      Array.isArray(partnerList) ? partnerList.map((p,i)=>{
        return <a key={i} href={p.productUrl} target='_blank'
          className='link'>
          <div key={i} className='card'>
            <LazyLoad height={'100%'} offset={100}>
              <img className='image' 
                src={p.logo}/>
            </LazyLoad>
            <p className='name'>
              {p.nameBroken || p.name}
            </p>
            <p className='product'>
              {p.productName}
            </p>
          </div>
          </a>
        }) : null 
    }
    <style jsx>{`
      .logos-container {
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      @media (min-width: 500px){
        .logos-container {
          align-items: flex-start;
          justify-content: center;
        }
      }
      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
        text-decoration: none;
      }
      @media (min-width: 500px){
        .link {
          width: 150px;
        }
      }
      .card {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        opacity: 0.8;
        padding: 10px 10px 10px 10px;
        margin: 10px;
        border-radius: 5px;
      }
      @media (min-width: 500px){
        .card {
          width: 140px;
        }
      }
      .image {
        width: 70%;
        max-height: 100%;
        object-fit: contain;
      }
      .name,
      .product {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        overflow: hidden;
      }
      .product {
        color: ${greenDarker};
        font-style: italic;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
      }
      @media (min-width: 500px){
        .product {
          font-size: 18px;
          margin-top: initial;
          margin-bottom: initial;
          font-weight: initial;
        }
        .name {
          font-size: 18px;
        }
      }
      .link {
        cursor: pointer;
        color: ${disabledButtonColor};
      }
      .link:hover {
        color: ${greenDarker};
      }
    `}</style>
  </div>
}