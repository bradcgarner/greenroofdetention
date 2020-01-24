import Link                from 'next/link';
import { isObjectLiteral } from 'conjunction-junction';
import content             from '../../helpers/content';
import GRDLogo             from '../graphics/logo-grd-color';
import { 
  backgroundDark, 
  footerElementMargins, 
  fontNormal,
  accentFontColor,
  fontOnColorColorHover,
  globalHeaderColor,
  fontFinePrint,
  greenDarker}              from '../../helpers/common-styles';
import FooterConsent       from './consent';
import { privacyOpen,
  oopsClick, 
  phoneLink,
  privacyGoTo,
  scrollPageFooter,
  navLink}              from '../../helpers/tag-manager';

export default function Footer(props) {

  const privacy = content.privacy || {} ;
  const footer  = content.footer  || {} ;

  const disclaimer = footer.disclaimer || {};

  const win = typeof window !== 'undefined' ? window : {} ;
  const path = win.location && win.location.pathname ? win.location.pathname : '' ;
  const pathClass = path === '/' ? 'home' : path ? path : 'no-path';

  const disclaimerDiv = <div className='disclaimer'>
    {disclaimer}
    <style jsx>{`
      .disclaimer {
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        width: 100%;
      }
    `}</style>
  </div>

  const _c = isObjectLiteral(props.consent) ? props.consent : {} ;
  const {consented, userHistory, userStats} = _c;

  const footerCenter = <div className='footer-center'>
      <ul className='sitemap-privacy'>
      <li className={`li ${navLink} footer ${pathClass} sitemap`}>
        <Link href={`/sitemap`}>
          <a className='link'>sitemap</a>
        </Link>
      </li>
      <li className={`li ${navLink} footer ${pathClass} sitemap`}>
        <Link href={`/sitemap.html`}>
          <a className='link'>html</a>
        </Link>
      </li>
      <li className={`li ${navLink} footer ${pathClass} sitemap`}>
        <Link href={`/sitemap.xml`}>
          <a className='link'>xml</a>
        </Link>
      </li>
      <li className={`li privacy ${privacyGoTo} ${pathClass}-footer ${consented}-${userHistory}-${userStats}`} >
        <Link href={`/privacy`}>
          <a className='link'>{privacy.policyButtonLabel}</a> 
        </Link>
      </li>
      <li className={`li privacy ${privacyOpen} ${pathClass}-footer ${consented}-${userHistory}-${userStats}`} >
        <button className='link' 
          role='nav'
          onClick={()=>{props.showPrivacySettings()}}>
          {privacy.settingsButtonLabel}
        </button> 
      </li>
      <style jsx>{`
        .footer-center {
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .sitemap-privacy {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
        }
        .li {
          width: 120px;
          margin: 10px;
          text-align: center;
        }
        .link {
          ${fontNormal}
          font-size: 11px;
          font-style: italic;
          font-weight: normal;
          background-color: transparent;
          border: none;
          color: #444;
          text-decoration: none;
        }
        .link:hover {
          color: ${greenDarker};
        }
      `}</style>
    </ul>
  </div>

  const consent = 
    !props.consent ? null : 
    props.consent.consented ? null :
    <FooterConsent 
      consent             ={props.consent}
      toggleExpand        ={props.toggleExpand}
      showPrivacySettings ={props.showPrivacySettings}
      changeConsent       ={props.changeConsent} />
  
  return <footer className='footer' id={scrollPageFooter}>
    {disclaimerDiv}
    {footerCenter}
    {consent}
    <p className='copyright'>{footer.copyright}</p>
    <style jsx>{`
      .footer {
        flex-direction: column;
        flex-wrap: wrap;
        ${backgroundDark}
        padding: 50px 50px 100px 50px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #bbb;
        z-index: 99;
        position: relative;
      }
      
      // @media (min-width: 630px) {
      //   .footer {
      //     flex-direction: row;
      //     padding-bottom: 50px;
      //   }
      // }
      // @media (min-width: 900px) {
      //   .footer {
      //     padding-bottom: 0px;
      //   }
      // }
      .copyright {
        position: absolute;
        bottom: 0;
        right: 0;
        ${fontFinePrint}
        text-align: right;
        font-size: 12px;
        padding: 10px;
        color: #777;
      }
  `}</style>
  </footer>;
}
