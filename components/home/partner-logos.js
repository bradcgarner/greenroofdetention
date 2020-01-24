import LazyLoad          from 'react-lazyload';
import { 
  disabledButtonColor,
  purple, }              from '../../helpers/common-styles';
import { partnerList }   from '../../helpers/partners-input';

export default function PartnerLogos(){

  const logos = Array.isArray(partnerList) ? partnerList.map((p,i)=>{

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
      <style jsx>{`
        .card {
          flex-direction: column;
          align-items: center;
          width: 80%;
          opacity: 0.8;
          padding: 10px 10px 10px 10px;
          margin: 10px;
          border-radius: 5px;
        }
        @media (min-width: 400px){
          .card {
            width: 190px;
          }
        }
        @media (min-width: 800px){
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
          font-size: 14px;
          overflow: hidden;
        }
        .product {
          color: ${purple};
          font-style: italic;
          font-size: 24px;
          margin-top: 10px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        @media (min-width: 500px){
          .product {
            font-size: 14px;
            height: 40px;
            margin-top: initial;
            margin-bottom: initial;
            font-weight: initial;
          }
          .name {
            height: 40px;
          }
        }
        .link {
          cursor: pointer;
          color: ${disabledButtonColor};
        }
        .link:hover {
          color: ${purple};
        }
      `}</style>
    </a>
  }) : null ;
  
  return <div className='logos-container'>
    {logos}
    <style jsx>{`
      .logos-container {
        flex-wrap: wrap;
        justify-content: center;
    `}</style>
  </div>
}