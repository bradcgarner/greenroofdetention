import Link                from 'next/link';
import { convertStringToTimestamp, 
  convertTimestampToString } from 'conjunction-junction';
import {
  sidebarTitleCSS,
  fontBlogMenu,
  accentFontColor,
}                          from '../../helpers/common-styles';
import { postLink,  
  oopsClick }              from '../../helpers/tag-manager';

export default props => {

  const formatPostLinks = list => {
    if(!Array.isArray(list)) return [];

    list.sort((a,b)=>{
      const keyA = `${a.published}${a.slug}`;
      const keyB = `${b.published}${b.slug}`;
      if(keyB < keyA) return 1;
      return -1;
    });

    const win = typeof window !== 'undefined' ? window : {} ;
    const path = win.location && win.location.pathname ? win.location.pathname : '' ;
    const pathClass = path === '/' ? 'home' : path ? path : 'no-path';
  
    const renderTest = process.env.TEST_RENDERING && typeof window === 'undefined' ? '~' : '' ;

    return list.map((c,i)=>(
      <li key={i} className={`link-li ${postLink} ${pathClass} ${c.slug} sidebar-similar-${i}`}>
        <Link as={`/publication/${c.url}`} 
          href={`/publication/?slug=${c.slug}`}>
          <a className='link' >
            <h6 className='li-text title'>{c.title}{renderTest}</h6>
            <p className='li-text author'>by{` `}{c.author.first_name}{` `}{c.author.last_name}</p>
            <p className='li-text date'>{convertTimestampToString(convertStringToTimestamp(c.published),'yyyy-mm-dd')}</p>
            <p className='li-text cats'>{c.categories.map(a=>a.name).join(', ')}</p>
          </a>
        </Link>
        <style jsx>{`
          .link-li {
            padding: 0;
            cursor: pointer;
          }
          .link {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            ${fontBlogMenu}
            font-size: 12px;
            text-decoration: none;
            text-align: left;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            margin-bottom: 10px;
          }
          .link:hover {
            color: ${accentFontColor};
          }
          .li-text {
            font-size: inherit;
            color: inherit;
            margin-bottom: 3px;
          }
          .link .li-text {
            text-decoration: none;
          }
          .title {
            margin-bottom: 5px;
          }
          .author, .date, .cats {
            font-size: 85%;
            padding-left: 10px;
            opacity: 0.8;
          }
        `}</style>
      </li>
    ));
  };

  const theList = formatPostLinks(props.recents);

  const linksJSX = <div className='group'>
    <h2 className={`${oopsClick} title`}>{props.pubs.recents}</h2>
    <ul className='ul'>
      {theList}
    </ul>
    <style jsx>{`
      .group {
        flex-direction: column;
        max-height: 80vh; /* looks funny on iOS if too tall... can see below the footer when scrolling up from very bottom */
      }
      .title {
        ${sidebarTitleCSS}
      }
      .ul {
        flex-direction: column;
        background-color: white;
        -moz-box-shadow:    inset 2px 2px 5px -1px #ccc;
        -webkit-box-shadow: inset 2px 2px 5px -1px #ccc;
        box-shadow:         inset 2px 2px 5px -1px #ccc;
        padding: 5px 5px 10px 10px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
    `}</style>
  </div>

  return <div className='links'>
    {linksJSX}
    <style jsx>{`
      .links {
        flex-direction: column;
      }
    `}</style>
  </div>
} 