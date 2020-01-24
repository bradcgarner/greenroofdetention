export const downloadLink      = 'download-link';

export const fireNewPageView = noScroll => {
  const thisUrl = process.env.THIS_URL;
  if(typeof window !== 'undefined'){
    const pathname = window.location && window.location.pathname ? window.location.pathname : null ;
    if(!noScroll && typeof window.scrollTo === 'function'){
      window.scrollTo(0,0);
    }
    if(pathname && typeof window.dataLayer !== 'undefined'){
      if(typeof window.dataLayer.push === 'function'){
        window.dataLayer.push({
          event: 'PageView',
          url: `${thisUrl}${pathname}`,
        });
      }
    }
  }
};

export const fireGtmHover = (label, value) => {
  if(typeof window !== 'undefined'){
    if(typeof window.dataLayer !== 'undefined'){
      if(typeof window.dataLayer.push === 'function'){
        window.dataLayer.push({
          event: 'onHover',
          hoverLabel: label,
          hoverValue: value,
        });
      }
    }
  }
}

export const navLink           = 'nav-link';
export const oopsClick         = 'oops-click';
export const carouselNav       = 'carousel-nav';
export const carouselEnlarge   = 'carousel-enlarge';
export const privacyAll        = 'privacy-all';
export const privacyOpen       = 'privacy-open';
export const privacySave       = 'privacy-save';
export const privacyGoTo       = 'privacy-go-to';
export const modalOpen         = 'modal-open';

// first class is the trigger; second class must be last class, and will be parsed as the type
export const teamFocusClass    = 'team-focus';
export const linkFromHome      = 'link-from-home';
export const linkStatic        = 'link-static';

// @@@@@@@@@@ END CLASSES', START IDS!!!! @@@@@@@@@@@ 

// top 0% is assumed on page load
export const scrollPageFooter  = 'scroll-footer';