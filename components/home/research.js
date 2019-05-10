import Link                from 'next/link';
import LazyLoad            from 'react-lazyload';
import { isObjectLiteral } from 'conjunction-junction';
import content             from '../../helpers/content';
import { 
  mainHeaderCSS, 
  section, 
  backgroundMid, 
  fontReading, 
  globalHeaderColor, 
  cardHoverColor, 
  card }                   from '../../helpers/common-styles';
import { linkStatic, 
  fireGtmHover }           from '../../helpers/tag-manager';

export default () => {

  const r = isObjectLiteral(content.research) ? content.research : {} ;
  const list = Array.isArray(r.list) ? r.list : [] ;
  const nav = isObjectLiteral(r.mainNav) ? r.mainNav : {} ;

  const cardDivs = list.map((c,i)=>{
    return <Link key={i} href={`/${c.link}`}>
      <a className={`card ${linkStatic} home ${c.link} true`}>
        <h4 className='title'>
          {c.title}
        </h4>
        <LazyLoad>
          <div className='image'/>
        </LazyLoad>
        <p className='text'>
          {c.text}
        </p>
        <style jsx>{`
          .card {
            ${card}
            display: flex;
            padding: 15px;
            margin: 20px 20px 10px 0;
            height: 400px;
            min-width: 300px;
            max-width: 400px;
            flex-grow: 1;
            flex-shrink: 0;
          }
          @media(max-width: 450px){
            .card {
              max-width: 90vw;
            }
          }
          .card-clickable {
            border-radius: 5px;
            flex-direction: column;
            height: 100%;
            width: 100%;
            padding: 10px 30px;
            cursor: pointer;
          }
          .card-clickable:hover {
            background-color: ${cardHoverColor};
          }
          .title{
            text-align: center;
            font-size: 24px;
            color: ${globalHeaderColor};
            margin-bottom: 25px;
            margin-top: 10px;
          }
          a {
            text-decoration: none;
          }
          .image {
            width: 100%;
            overflow: hidden;
            background-image: url('${c.image}');
            background-size: 100%;
            flex: 1;
          }
          .text {
            width: 90%;
            margin: 25px 10px 50px 10px;
            font-size: 14px;
            ${fontReading}
            text-align: justify;
            line-height: 30px;
            height: 60px;
          }
        `}</style>
      </a>
    </Link>
  });

  const cardDiv = <div className='cards'>
    {cardDivs}
    <style jsx>{`
      .cards {
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
      }
    `}</style>
  </div>

    return <section id={nav.id} className='section'
      onMouseEnter={()=>fireGtmHover(nav.id)}>
      <h2 className='header'>{nav.divHeader}</h2>
      <div className='content'>
        {cardDiv}
      </div>

      <style jsx>{`
        .section {
          ${section}
          flex-direction: column;
          align-self: center;
          align-items: center;
          justify-content: center;
          ${backgroundMid}
        }
        .header {
          ${mainHeaderCSS}
        }
        .content {
          flex-direction: column;
          width: 90%;
        }
        .text {
          width: 90%;
          margin-top: 25px;
          margin-bottom: 50px;
          font-size: 14px;
          ${fontReading}
          text-align: justify;
          line-height: 170%;
        }
      `}</style>
    </section>;
  
}
