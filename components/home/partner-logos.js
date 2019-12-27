import Link              from 'next/link';
import LazyLoad          from 'react-lazyload';
import { 
  disabledButtonColor,
  purple, }              from '../../helpers/common-styles';
import { partnerList }   from '../../helpers/partners/partners-input';
import {
  Envelope,
  Globe }                from '../graphics/icons';

export default function PartnerLogos(){

  const logos = Array.isArray(partnerList) ? partnerList.map((p,i)=>{

    if(p.exclude) { return null ;} // eliminates the 'N/A' from here

    return <div key={i} className='card'>
      <div className='image-container' >
        <LazyLoad height={'100%'} offset={100}>
          <img className='image' 
            src={p.logo}/>
        </LazyLoad>
      </div>
      <p className='name'>
        {p.nameBroken || p.name}
      </p>
      <p className='product'>
        {p.productName}
      </p>
      <div className='links-container'>
        <Link href={`/contact?cc=${p.code}`}>
          <div className='link'>
            <Envelope style={{height: 20, width: 20}}/>
          </div>
        </Link>
        <a href={p.productUrl} target='_blank'
          className='link'>
          <Globe style={{height: 20, width: 20}}/>
        </a>
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
        .image-container {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
          height: 80px;
          margin-bottom: 5px;
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
        .links-container {
          width: 100%;
          margin-top: 5px;
          justify-content: space-around;
        }
        .link {
          cursor: pointer;
          color: ${disabledButtonColor};
        }
        .link:hover {
          color: ${purple};
        }
      `}</style>
    </div>
  }) : null ;
  
  return <div className='logos-container'>
    {logos}
    <style jsx>{`
      .logos-container {
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </div>
}