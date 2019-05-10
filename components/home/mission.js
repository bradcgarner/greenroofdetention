import React               from 'react';
import LazyLoad            from 'react-lazyload';

import { isObjectLiteral } from 'conjunction-junction';
import content             from '../../helpers/content';
import { 
  section,
  bigButton,
  bigButtonHover, 
  backgroundMid,
  fontReading,
  green,
  mainHeaderCSS }          from '../../helpers/common-styles';
import ModalMission        from './modal-mission';
import { modalOpen, 
  fireGtmHover }           from '../../helpers/tag-manager';

export default props => {

  const m = isObjectLiteral(content.mission) ? content.mission : {} ;
  const nav = isObjectLiteral(m.mainNav) ? m.mainNav : {} ;

  const win = typeof window !== 'undefined' ? window : {};
  const width = win.innerWidth;

  const bp = 1160;

  const missionModal = <ModalMission content={m}/>

  const bullets = m.bullets.map((p, i) => {
    return <li key={i} className='text'>
      {p}
      <style jsx>{`
      .text {
        position: relative;
        font-size: 14px;
        ${fontReading}
        line-height: 30px;
        list-style: none;
      }
      .text:after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        top: 10px;
        left: -20px;
        background-color: ${green};
        border-radius: 50%;
      }
      `}</style>
    </li>
    });
  
  return <section id={nav.id} className='section'
    onMouseEnter={()=>fireGtmHover(nav.id)}>
    <div className='list-container'>
      <h3 className='header'>{nav.divHeader}</h3>
      <ul className='list'>
        {bullets}
      </ul>
    </div>
    <div className='image-and-button-container'>
      {width >= bp ? <div className='image-container'>
        <LazyLoad height='100%'>
          <img className='image' 
            src={m.featured_image} 
            alt={m.featured_alt} />
        </LazyLoad>
      </div> : null }
      {width <= bp ? 
        <LazyLoad height='100%'>
          <div className='banner-image'/>
        </LazyLoad> : null }
      <button className={`button ${modalOpen} mission true true`}
        type='button'
        onClick={()=>props.toggleModal(missionModal)}>
        {m.buttonLabel}
      </button>
    </div>

    <style jsx>{`
      .section {
        ${section}
        ${backgroundMid}
        flex-direction: column;
      }
      .header {
        ${mainHeaderCSS}
        margin-top: 0;
      }
      .list-container,
      .image-container {
        flex-direction: column;
        margin: 0 50px 50px 50px;
        flex: 1;
        height: 100%;
      }
      .image-container {
        justify-content: space-between;
      }
      .list {
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
        justify-content: space-between;
      }
      .image-and-button-container {
        max-width: 100%;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
      }
      .image-container {
        display: none;
        overflow: hidden;
      }
      .image {
        width: 100%;
        object-fit: contain;
      }
      .banner-image {
        width: 100%;
        height: 20vh;
        background-image: url(${m.banner_image});
        background-size: cover;
        background-position: center center;
        border-radius: 2px;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.3);
      }
      .button {
        ${bigButton}
        margin-top: 20px;
        margin-left: 0px;
        padding-top: 3px;
        height: 40px;
        width: 200px;
      }
      .button:hover {
        ${bigButtonHover}
      }

      @media (min-width: ${bp}px) {
        .section {
          flex-direction: row;
          height: 45vw;
          max-height: 650px;
        }
        .banner-image {
          display: none;
        }
        .image-and-button-container {
          max-width: 45%;
        }
        .image-container {
          display: flex;
          flex: 1;
          box-shadow: rgba(0,0,0, 0.3) 3px 3px 5px 0px;
        }
      }
    `}</style>
  </section>;
}
