import {
  EllipsisVAlt, 
  CaretUp
} from '../components/graphics/icons';
import { fontsToLoad, accentFontColor, accentFontColorHover, green, red } from './common-styles';

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
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
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

  intro: [
    [
      {
        p: 'Both retention and detention are important stormwater management strategies. Green roofs have traditionally only offered retention. This site lists solutions that offer detention AND retention. ',
        src: 'https://cdn.buttercms.com/JbXv6qWuR8urwkSr1mtv',
        alt: '******SOME IMAGE********',
      },
      {
        p: [
          'Stormwater retention is preventing the occurrence of runoff, by capturing water and allowing plants to evaporate it into the atmosphere. The video series at purple-roof.com/retention-and-detention (which Green Roof Diagnostics assisted with) does a good job at explaining the differences and importance of the two phenomena. ',
          'Stormwater detention is temporarily storing stormwater, then allowing it to drain later. Detention has always been essential to stormwater management. Why? Because detention is reliable. The physics is quite simple. ',
          'Retention requires storage that empties very slowly (5-10 days). If more rain occurs than storage, runoff is uncontrolled. If rain occurs after the green roof is wet, runoff is uncontrolled, as if the green roof were not there. Can this be solved by just increasing retention storage? No. Emptying retention volume relies on the weather, and the sun and wind will only remove so much water. ',
        ],
      },
    ],

    [
      {
        p: 'Detention requires storage that empties slowly, but much more rapidly than retention (usually 6-24 hours vs 5-10 days). Emptying detention storage relies on gravity, or possibly some mechanics, not the weather. This makes detention far more reliable, which is why hydrologists worldwide use detention as their #1 tool. ',
      },
      {
        src: 'https://cdn.buttercms.com/JbXv6qWuR8urwkSr1mtv',
        alt: '******SOME IMAGE********',
      },
    ],
    [
      {
        h: 'Why the roof?',
        p: 'Cities across the globe are dealing with stormwater management crises. Around 40% of the surface are of many cities is rooftop. Around another 40% of the area of cities is pavement. With at least 80% of most cities being covered in impervious surfaces, we need to be creative in dealing with stormwater. The roof is a great opportunity to manage stormwater. ',
      },
      {
        p: [
          'First, the roof is the highest elevation of any watershed. Dealing with runoff from the roof prevents problems rather than managing problems downstream. ',
          
          'Second, using green roofs to manage stormwater on rooftops opens the door to compounding benefits offered by green roofs... at no extra charge! These benefits include habitat creation, urban heat island mitigation, extending the life of the roof membrane, reducing cooling costs, and aesthetics. ',

          'Further, unlike stormwater tanks, green roofs reduce stormwater runoff volume through retention. Volume reduction is a vital aspect of urban stormwater management. '
        ],
      },
    ],
   
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
  'Detention in green roofs can be accomplished a number of ways. There are currently 3 concepts that accomplish this.',

'Blue-Green Roof concept',
'Storing water in a horizontal reservoir below a green roof with flow control at the drain, often via smart controls. ',

'Purple Roof concept',
'Storing water in a horizontal reservoir below a green roof with flow control provided by uniform friction throughout the green roof.',

'Custom',
'Unique design by a skilled designer and/or hydrologist to meet custom project needs.',
  ],
  
  products: {
    mainNav: {
      barLabel:    'Products',
      burgerLabel: 'Purple-Roof Products',
      divHeader:   'Purple-Roof Products',
      pageHeader:  'Proven Performance: Purple-Roof Products',
      id:     'products',
      link:   '/products',
      priority: 1, // 1st to go
    },
    meta: {
      title:       'Purple-Roof Products',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Purple-Roof is a non-proprietary performance specification for a resilient green roof.',
      url:         `${thisUrl}/products`,
      image:       'https://cdn.buttercms.com/oDLgtsF7Qe44p5Pa1M01',
      alt:         'Purple-Roof Green Roof Products',
    },
    fontsToLoad: fontsToLoad.slice(0,2),
    textTop: [
      `A growing list of architects, landscape architects and civil engineers are incorporating -compliant green roof assemblies into their products.-compliant assemblies are sold under several different brand names worldwide.  A sampling of some recent products is below.`,
    ],
    list: [
      {
        image: 'https://cdn.buttercms.com/ZAGTsdx1SUSwcoF1vXZU',
        alt:   'green roof washington dc conway center SOME',
        id: 'some-conway',
        text:  [
          'SOME (So Others May Eat) Conway Center, Washington, DC, USA. This 4-inch (100mm) thick Purple-Roof roof was installed to meet the District of Columbia\'s stormwater retention requirements, which would have otherwise required an 8-inch (200mm) thick green roof.',
        ],
        team: [
          {
            role: 'Developer',
            name: 'SOME (So Others Might Eat)',
            url: 'https://www.some.org/',
          },
          {
            role: 'Architect',
            name: 'Wiencek + Associates',
            url: 'https://wiencek-associates.com/',
          },
          {
            role: 'General Contractor',
            name: 'Bozzuto Construction',
            url: 'https://www.bozzuto.com/construction/',
          },
          {
            role: 'Supplier',
            name: 'Green Roof Specialty Products',
            url: 'http://www.purple-roof.com',
          },
          {
            role: 'Supplier',
            name: 'Carlisle Coatings & Waterproofing',
            url: 'https://www.carlisleccw.com/',
          },
          {
            role: 'Installer',
            name: 'Kalkreuth Roofing and Sheet Metal',
            url: 'https://www.krsm.net/',
          },
        ],
      },
      {
        image:       'https://cdn.buttercms.com/rctItBHSQqGnD1sO8csq',
        alt:    'green roof sky view parc flushing ny',
        id: 'sky-parc-1',
        // no team here, skip to next
      },
      {
        image:       'https://cdn.buttercms.com/lMamVoVPQ66L0oiHlOum',
        alt:    'green roof sky view parc flushing ny',
        id: 'sky-parc-2',
        // no team here, skip to next
      },
      {
        image:       'https://cdn.buttercms.com/NZDQ0PGgT92NR6Fr3tGv',
        alt:    'green roof sky view parc flushing ny',
        id: 'sky-parc-3',
        text:        [
          'Sky View Parc, Phase 2, Flushing, Queens, New York, NY, USA.  Located in the prime location of Downtown Flushing, Sky View Parc is one of the largest mixed-use developments in New York City, offering a new and unique investment opportunity. The owner saw value in aesthetic green and made it into NYC’s second largest green roof stormwater sponge. The landscape architect delivered a smart and spectacular design, the installer delivered despite conditions that were next to impossible, and yet the outcome is beyond expectations. This is a textbook example why you need great landscape architects that can think beyond the basics, great suppliers of high quality soils and plants, and a thorough maintenance plan that protects the owner’s investment.',
        ],
        team: [
          {
            role: 'Developer',
            name: 'Onex Real Estate Partners',
            url: 'https://www.onex.com/',
          },
          {
            role: 'Architect',
            name: 'architectsAlliance',
            url: 'http://architectsalliance.com/',
          },
          {
            role: 'Landscape Architect',
            name: 'Moss Gilday Group',
            url: 'https://www.mossgilday.com/',
          },
          {
            role: 'Growing Media Supplier',
            name: 'rooflite',
            url: 'https://www.rooflitesoil.com/',
          },
          {
            role: 'Supplier',
            name: 'Sempergreen USA',
            url: 'http://www.sempergreen.com',
          },
          {
            role: 'Installer',
            name: 'Steven Dubner Landscaping, Inc.',
            url: 'http://www.stevendubnerlandscaping.com/',
          },
        ],
        pdf: {
          text: 'Read more about Sky View Parc.',
          link: `${xyz}/files/sky-view-park-flushing-ny-green-roof.pdf`,
        },
      },
      {
        image:       'https://cdn.buttercms.com/DYV1w11uTOf58ygm1ufM',
        alt:    'green roof philadelphia water department',
        id: 'phila-water-dept',
        text:        [
          'Philadelphia Water Department 61st Street Facility, Philadelphia, PA, USA.  The Philadelphia Water Department is aggressively pursuing green infrastructure improvements to capture stormwater before runoff occurs, evaporate water into the atmosphere, and/or slowly release water into storm sewers. This Purple-Roof project is a great example of green infrastructure pursuing those goals.',
        ],
        team: [
          {
            role: 'Architect',
            name: 'Converse Winkler Architecture',
            url: 'https://www.cwarc.com/',
          },
          {
            role: 'Civil Engineer',
            name: 'Burns Group',
            url: 'https://www.burns-group.com/',
          },
          {
            role: 'Supplier',
            name: 'American Hydrotech',
            url: 'https://www.hydrotechusa.com/',
          },
          {
            role: 'Supplier',
            name: 'Thomco, Inc.',
            url: 'http://thomco1.com/',
          },
          {
            role: 'General Contractor',
            name: 'AP Construction',
            url: 'https://www.apconstruction.com/',
          },
          {
            role: 'Installer',
            name: 'EDA Contractors',
            url: 'https://www.edacontractors.com/',
          },
        ],
      },
      {
        image:       'https://cdn.buttercms.com/X7LUxrkURaKFrr4RWfKj',
        alt:    'green roofs in dubai uae',
        id: 'dubai',
        // no team, see next
      },
      {
        image:       'https://cdn.buttercms.com/0b7tu2uTVeBGns8zi56w',
        alt:    'green roof opera dubai uae',
        id: 'opera-dubai',
        text:        [
          'Opera Dubai and other products, Dubai, UAE.  The hot, desert climate of the United Arab Emirates is a very harsh environment for green roofs.  Urbanscape has successfully implemented several Purple-Roof green roofs in Dubai. Highly retentive needled mineral wool is helps sustain healthy plants without excessive irrigation use.',
        ],
        team: [
          {
            role: 'Supplier',
            name: 'Urbanscape',
            url: 'http://www.green-urbanscape.com/',
          },
        ],
      },
      {
        image:       'https://cdn.buttercms.com/wo2dKNzeSue3S9bcaG1k',
        alt:    'green roof convention center melsomvik norway',
        id: 'melsomvik',
        text:        [
          'Convention Center in Melsomvik, Norway. Here the Urbanscape Purple-Roof green roofs dramatically ascend and descend roof surfaces of this breathtaking convention center that seems to rise out of the ground.  Each Purple-Roof is climate-adapted, allowing Purple-Roof to work equally well in Scandinavia and Arabia.',
        ],
        team: [
          {
            role: 'Architect',
            name: 'NIELSTORP+ arkitekter',
            url: 'http://nielstorp.no/',
          },
          {
            role: 'Supplier',
            name: 'Urbanscape',
            url: 'http://www.green-urbanscape.com/',
          },
        ],
      },
      {
        image:       'https://cdn.buttercms.com/KRIVKVyPSUuKUh7MjRID',
        alt:    'green roof maison de quartier de la croix bonnet',
        id: 'maison',
        text:        [
          'Urbanscape Purple-Roof at Maison de quartier de la Croix Bonnet, France.',
        ],
        team: [
          {
            role: 'Supplier',
            name: 'Urbanscape',
            url: 'http://www.green-urbanscape.com/',
          },
        ],
      },
      {
        image:       'https://cdn.buttercms.com/09NaQqeUQkaLNWNx3Rhl',
        alt:    'green roof iberia',
        id: 'iberia',
        text:        [
          'Urbanscape Purple-Roof in Iberia.',
        ],
        team: [
          {
            role: 'Supplier',
            name: 'Urbanscape',
            url: 'http://www.green-urbanscape.com/',
          },
        ],
      },
      {
        image:       'https://cdn.buttercms.com/RyqJFmtUQe6vPX18e3I5',
        alt:    'green roof 800 nj avenue washington dc',
        id: '800-nj',
        text:        [
          '800 New Jersey Avenue, SE, Washington, DC, USA.  Parker Rodriguez landscape architects incorporated some design flourishes into Purple-Roof project. The Purple-Roof green roof satisfies the District of Columbia\'s aggressive stormwater retention requirements, while cooling the immediate environment and providing a pleasing aesthetic.',
        ],
        team: [
          {
            role: 'Developer',
            name: 'WCS Smith',
            url: 'https://www.wcsmith.com/',
          },
          {
            role: 'Architect',
            name: 'SK+I Architecture',
            url: 'https://www.skiarch.com/',
          },
          {
            role: 'Civil Engineer',
            name: 'Vika Capitol',
            url: 'http://www.vikacapitol.com/',
          },
          {
            role: 'Landscape Architect',
            name: 'Parker Rodriguez',
            url: 'http://parkerrodriguez.com/',
          },
          {
            role: 'Supplier',
            name: 'Green Roof Specialty Products',
            url: 'http://www.purple-roof.com',
          },
          {
            role: 'Installer',
            name: 'Commercial Roofing & Sheet Metal',
            url: 'http://www.crsm.com/',
          },
        ],
      },
    ]
  },

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
      title:       'Green Roof Diagnostics',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         thisUrl,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Diagnostics',
    },
  },
};