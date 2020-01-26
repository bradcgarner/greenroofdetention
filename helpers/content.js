import {
  EllipsisVAlt, 
  CaretUp
} from '../components/graphics/icons';
import { 
  green, 
  red, 
  detentionBlue,
  purple,
  black } from './common-styles';
import ImageContainer from '../components/home/image-container';
import { partnerObj } from '../helpers/partners-input';
/*
 * This file - with few, small exceptions - includes ALL "static" content for greenroofdetention.com, i.e. all content that is not an image or file.
 * Images are in Butter CMS in the GRD account.
 * Files (such as Word documents for spec downloads), are saved at greenroofdetention.xyz.
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */

const xyz = 'https://greenroofdetention.xyz'

const thisUrl = process.env.THIS_URL;
const thisDomain = process.env.THIS_DOMAIN;

export default {

  // IGNORE EVERYTHING ABOVE THIS LINE EXCEPT GENERAL COMMENTS IN /* */.
  // meta tags go in the header, which creates previews in search engines, sharing, etc.
  // post meta tags are per post, using Butter CMS
  index: {
    meta: {
      siteName:    'Green Roof Detention',
      twitterCard: 'summary_large_image',
      twitterSite: 5, // get this from Twitter
      fbAppId:     3, // get htis from Facebook
      type:        'website',
      // end tags that apply to all pages
      
      // start tags that apply ONLY to the home page (blog posts read these tags from the CMS) (pages missing tags will use the home page tags as default)
      title:       'Green Roof Detention',
      description: 'Green Roof Detention Green Roof Detention Green Roof Detention.',
      url:         thisUrl,
      image:       'https://cdn.buttercms.com/ivYUUzqqTZuNhXa4ZvOy',
      alt:    'Green Roof Detention',
    },
  }, // end index (home)

  menu: [
    // home is always at left of menu
    'privacy', // this is the id of the div for scrolling purposes. It will appear in the URL when clicked, e.g. https://greenroofdiagnostics.com changes to https://greenroofdiagnostics.com/#mission when this is clicked in the menu.
    'toTop',
    'burger',
  ],
  // END MENU

  tagline: 'greenroofdetention.com is a clearinghouse of green roof solutions that provide stormwater detention. ',

  column1: [
    {
      element: 'h2',
      text: 'Both retention and detention are important stormwater management strategies.',
    },
    {
      element: 'text',
      text: [
        'Green roofs have traditionally only offered retention. This site lists solutions that offer detention AND retention. ',
        'Stormwater retention is preventing the occurrence of runoff, by capturing water and allowing plants to evaporate it into the atmosphere. The video series linked below (which Green Roof Diagnostics assisted with) explains the differences and importance of the two phenomena.',
      ]
    },
    {
      element: 'component',
      component: <div key='image-1' className='image-outer-container'>
        <a href='https://www.purple-roof.com/retention-and-detention'
          target='_blank'>
          <div className='image-inner-container'>
            <ImageContainer
              src ='https://cdn.buttercms.com/GL24d1U0RNCIFXtDfhd9'
              alt= 'stormwater retention and detention video series'
              caption = '' />
          </div>
        </a>
        <style jsx>{`
          .image-outer-container {
            width: 100%;
            align-items: center;
            justify-content: center;
          }
          .image-inner-container {
            max-width: 500px;
          }
          .image-inner-container:hover {
            opacity: 0.8;
          }
        `}</style>  
      </div>
    },
    {
      element: 'h2',
      text: 'What is stormwater detention?',
    },
    {
      element: 'text',
      text: [
        'Stormwater detention is temporarily storing stormwater, then allowing it to drain later. Detention has always been essential to stormwater management. Why? Because detention is reliable. The physics is quite simple. ',

        'Retention requires storage that empties very slowly (5-10 days). If more rain occurs than storage, runoff is uncontrolled. If rain occurs after the green roof is wet, runoff is uncontrolled, as if the green roof were not there. Can this be solved by just increasing retention storage? No. Emptying retention volume relies on the weather, and the sun and wind will only remove so much water. ',

        'Detention requires storage that empties slowly, but much more rapidly than retention (usually 6-24 hours vs 5-10 days). Emptying detention storage relies on gravity, or possibly some mechanics, not the weather. This makes detention far more reliable, which is why hydrologists worldwide use detention as their #1 tool. ',

        'Retention lowers annual runoff volume, but retention does not lower runoff volume during every storm, particularly during large storms.  Detention can provide predictable, reliable runoff rates regardless of antecedent conditions.'
      ],
    },
  ],
  column2: [
    {
      element: 'component',
      component: <div key='microburst' className='image-outer-container'>
        <div className='image-inner-container'>
          <ImageContainer
            src ='https://cdn.buttercms.com/cKK4zaMWSDmTJIHb6FHD'
            alt= 'rainstorm microburst in Thailand'
            caption = 'Detention is essential to manage intense storms, including microbursts' />
        </div>
        <style jsx>{`
          .image-outer-container {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
          }
          .image-inner-container {
            max-width: 500px;
          }
        `}</style>  
      </div>
    },
    {
      element: 'h2',
      text: 'Why the roof?'
    },
    {
      element: 'text',
      text: [
        'Cities across the globe are dealing with stormwater management crises. Around 40% of the surface are of many cities is rooftop. Around another 40% of the area of cities is pavement. With at least 80% of most cities being covered in impervious surfaces, we need to be creative in dealing with stormwater. The roof is a great opportunity to manage stormwater. ',

        'First, the roof is the highest elevation of any watershed. Dealing with runoff from the roof prevents problems rather than managing problems downstream. ',
        
        'Second, using green roofs to manage stormwater on rooftops opens the door to compounding benefits offered by green roofs... at no extra charge! These benefits include habitat creation, urban heat island mitigation, extending the life of the roof membrane, reducing cooling costs, and aesthetics. ',
        
        'Further, unlike stormwater tanks, green roofs reduce stormwater runoff volume through retention. Volume reduction is a vital aspect of urban stormwater management. '
      ],
    },
    {
      element: 'component',
      component: <div key='image-2' className='image-outer-container'>
        <div className='image-inner-container'>
          <ImageContainer
            src ='https://cdn.buttercms.com/uQi8mDDAQw95tQFBXU8R'
            alt= 'green roof on Ace Hotel Chicago Illinois stormwater management'
            caption = 'Deployed at scale, detention green roofs can solve many urban stormwater problems.' />
        </div>
        <style jsx>{`
          .image-outer-container {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
          }
          .image-inner-container {
            max-width: 500px;
          }
        `}</style>  
      </div>
    },
  ],

//   Pros of blue-green:
// High detention storage volume (their minimum for open storage is around 100mm, which is around our maximum for the honeycomb).
// Very good at accepting water from contributing areas.
// Cons of blue-green:
// Usually heavier; usually done with semi-intensive or sometimes intensive,
// Requires a 0% deck, which is uncommon,

// Difficult to employ on small roofs, or roofs with a high ratio of drains, because much of the infrastructure and cost is at the drain itself.
// Other blue-green factors to consider:
// Blue-green relies on orifice restriction.  Orifices can become clogged, but I wouldn't play this up too much, because the better blue-green systems have this worked out pretty well.
// Most blue-green systems use smart technology to open and close orifices.  These could be considered a pro or a con by different clients.  But smart technology does require internet service, maintenance, and monitoring.
// Pros of Purple:
// Flexible detention storage volume,
// Works well on 2% slope (will work on slopes above that, but values not confirmed yet),
// Easily deployed on large, rectangular roofs and small, chopped-up roofs.
// Detention capabilities on small, irregular, chopped up roofs, and roofs with high ratio of drains is still very good,
// Less expensive than blue-green,
// Available in thin, lightweight profiles,
// 100% passive with built-in redundancy; friction layer is highly unlikely to clog, but even if portions did clog, since the layer covers 100% of the surface, there is tremendous redundancy in flow paths.
// Cons of Purple:
// Well suited to accepting water from contributing areas, but to a lesser extent than blue-green.  
// Lower total storage volume than blue-green.

  concepts: [
    {
      element: 'h2',
      text: 'Detention in green roofs can be accomplished a number of ways. There are currently 3 concepts that accomplish this.',
      style: 'text-align: center;'
    },
    {
      element: 'component',
      component: <div key='concepts' className='concepts'>
        <div className='concept'>
          <h3 className='concept-header'>
            <span className='blue'>Blue</span>-<span className='green'>Green</span> <span className='roof'>Roof</span> concept
          </h3>
          <p className='concept-text'>
            Storing water in a horizontal reservoir below a green roof with flow control at the drain, often via smart controls.
          </p>
        </div>
        <div className='concept'>
          <h3 className='concept-header'>
            <span className='purple'>Purple</span>-<span className='roof'>Roof</span><sup className='sup'>TM</sup> concept
          </h3>
          <p className='concept-text'>
            Storing water in a horizontal reservoir below a green roof with flow control provided by uniform friction throughout the green roof.
          </p>
        </div>
        <div className='concept'>
          <h3 className='concept-header'>
            <span className='custom'>Custom</span>
          </h3>
          <p className='concept-text'>
            Unique design by a skilled designer and/or hydrologist to meet custom project needs.
          </p>
        </div>
        <style jsx>{`
          .concepts {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .concept {
            flex-direction: column;
            width: 90%;
          }
          @media (min-width: 500px){
            .concept {
              width: 25%;
            }
          }
          .concept-header {
            margin-bottom: 10px;
            margin-top: 10px;
          }
          span {
            font-size: 20px;
            font-weight: bold;
          }
          .blue {
            color: ${detentionBlue};
          }
          .green {
            color: ${green};
          }
          .purple {
            color: ${purple};
          }
          .roof {
            color: ${black};
          }
          .custom {
            color: #5e1c1c;
          }
          .sup {
            font-size: 8px;
            padding-left: 2px;
          }
        `}</style>
      </div>
    }
  ],
  companyIntro: [
    {
      element: 'h2',
      text: 'The following companies provide detention-oriented green roof assemblies, design detention-oriented green roofs, and/or provide components designed for use in detention green roofs.',
      style: 'text-align: center;'
    },
  ],

  // privacy page and in footer. Note that this page is no-crawl
  privacy: {
    meta: {
      title:       'Green Roof Diagnostics Privacy Policy',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/privacy`,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Diagnostics Privacy Policy',
    },
    consent: {
      bannerMain: 'This site uses cookies.',
      buttonLabel: 'OK',
      showMore: 'Show Details',
    },
    theCompany: 'Green Roof Diagnostics',
    thisDomain: 'greenroofdiagnostics.com',
    thisUrl: 'http://www.greenroofdiagnostics.com',    
    deleteMessage: 'Delete all cookies? This cannot be un-done.',
    // button in footer
    policyButtonLabel: 'privacy policy',
    // button in footer to open expanded consent footer
    settingsButtonLabel: 'privacy settings',
    // button from expanded consent footer
    policyExpandedLabel: 'Read our full privacy policy.',
    // header at top of privacy page
    header: 'Privacy Policy',
  },

  /* NOTE: the urls listed are social handles we want people to FOLLOW, not any ghost accounts.
   * If you need to edit the url of an existing handle: do that here. No need to coordinate with Brad.
   * BUT, if you want to add or remove a social profile (e.g. add Tumblr or remove Facebook), PLEASE coordinate that with Brad. This is because there is another part of the code that links these with icons; Brad needs to manage that part.
   * If you want to change how social SHARING is handled, e.g. allow to share via MySpace, coordinate that with Brad for similar reasons.
   */
  socialHandles: {
    facebook: {
      url: 'https://www.facebook.com/greenroofdiagnostics'
    },
    linkedin: {
      url: 'https://linkedin.com/company/green-roof-diagnostics'
    }, 
    twitter: {
      url: 'https://twitter.com/GRD_Research'
    },
  },

  footer: {
    disclaimer: <p><span className='logo'>greenroofdetention.com</span> is maintained by <a href='https://www.greenroofdiagnostics.com' target='_blank'>Green Roof Diagnostics</a>. If your company provides a green roof detention solution that we omitted, please contact us via the Green Roof Diagnostics website. To be considered for inclusion, solutions must provide retention and detention. Detention shall only include gravitational water, i.e. water above field capacity. Documentation and calculations must clearly illustrate reliable peak flow reduction during a range of design storms including larger design storms such as 150 mm 24-hour Type II. Green Roof Diagnostics maintains this page for the purposes of educating the market about green roof solutions that provide meaningful detention, and Green Roof Diagnostics will decide, at its sole discretion, which solutions to include or exclude.
    <style jsx>{`
      .logo {
        color: ${green};
        font-weight: bold;
      }
      a {
        text-decoration: none;
        color: ${red};
      }
      a:hover {
        font-weight: bold;
      }
    `}</style>
    </p>,
    copyright: 'Copyright 2019 Green Roof Diagnostics, LLC',
  },

  // this is the 'go back to top of page' icon, which is an icon, not text
  toTop: {
    mainNav: {
      barLabel:    <CaretUp style={{width: 40, height:40}}/>,
      burgerLabel: null,
      divHeader:   null,
      pageHeader:  null,
      id:     'top', // this is the id of the div for scrolling purposes. IN THIS CASE, USER DOES NOT SEE IN THE URL. Top just goes to top and removes the hash.  E.g. https://purple-roof.com/#what changes to https://purple-roof.com when clicked.
      link:   null,
      priority: 1, // 1st to go
    },
  },

  burger: {
    mainNav: {
      barLabel: <EllipsisVAlt style={{width: 40, height:40}}/>,
      burgerLabel: null,
      divHeader: null,
      pageHeader: null,
      id:     'menu', // this is the id of the div for scrolling purposes. IN THIS CASE, USER DOES NOT SEE IN THE URL. Top just goes to top and removes the hash.  E.g. https://purple-roof.com/#what changes to https://purple-roof.com when clicked.
      link:   null,
      priority: -1, // appears when everything else disappears
    },
  },

  error: {
    '404': 'Sorry, but we didn\'t find that page.',
    error: 'Sorry, but there was a problem loading this page.',
    meta: {
      title:       'Green Roof Detention',
      description: 'Green Roof Detention provides unbiased, scientific research for the green infrastructure industry.',
      url:         thisUrl,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Detention',
    },
  },
};