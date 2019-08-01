import {
  EllipsisVAlt, 
  CaretUp
} from '../components/graphics/icons';
import { fontsToLoad } from './common-styles';

/*
 * This file - with few, small exceptions - includes ALL "static" content for the Purple-Roof site, i.e. all content that is not a blog post or image or file.
 * Blog posts and images are in the CMS.
 * Files (such as Word documents for spec downloads), are saved at ____ (currently TBD).
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */

const xyz = 'https://purple-roof.xyz'

const thisUrl = process.env.THIS_URL;
const thisDomain = process.env.THIS_DOMAIN;

export default {

  // IGNORE EVERYTHING ABOVE THIS LINE EXCEPT GENERAL COMMENTS IN /* */.
  // meta tags go in the header, which creates previews in search engines, sharing, etc.
  // post meta tags are per post, using Butter CMS
  index: {
    meta: {
      siteName:    'Green Roof Diagnostics',
      twitterCard: 'summary_large_image',
      twitterSite: 5, // get this from Twitter
      fbAppId:     3, // get htis from Facebook
      type:        'website',
      // end tags that apply to all pages
      
      // start tags that apply ONLY to the home page (blog posts read these tags from the CMS) (pages missing tags will use the home page tags as default)
      title:       'Green Roof Diagnostics',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         thisUrl,
      image:       'https://cdn.buttercms.com/BO4Yk7JnRL2iCLXhEFeG',
      alt:    'Green Roof Diagnostics',
    },
  }, // end index (home)

  // this is an array (list) of major divs of the main page
  // these are listed in order that they appear 1) on the main page, and 2) in the nav bar menu
  // DO NOT CHANGE THE ORDER WITHOUT COORDINATING WITH BRAD!!!!!!
  // The program hard-codes the index of each div.  E.g. 'What' is hard-coded to read from the first index.
  menu: [
    // home is always at left of menu
    'privacy', // this is the id of the div for scrolling purposes. It will appear in the URL when clicked, e.g. https://greenroofdiagnostics.com changes to https://greenroofdiagnostics.com/#mission when this is clicked in the menu.
    'toTop',
    'burger',
  ],
  // END MENU

  landing: {
    backgroundImage: 'https://cdn.buttercms.com/iwpVNbNQ3ScnxnsYcCyo',
    // no alt tag for background image
    tagline: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
    subTag: `We are a team of professionals of various backgrounds who share a common goal: to improve the understanding and effectiveness of green infrastructure through rigorous science.`,
  },

  contact: {
    mainNav: {
      barLabel:    'Contact', // label in header
      burgerLabel: 'Contact Us',
      pageHeader:  'Contact Us',
      divHeader:   'Contact Us', // label on actual div
      id:     'contact', // this is the id of the div for scrolling purposes.
      link:   '/contact',
      priority: 2, // 2nd to go
    },
    meta: {
      // limit title to 55 characters
      title:       'Contact Purple-Roof',
      // limit description to 120-140 characters
      //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
      description: 'Purple-Roof is a non-proprietary performance specification for a resilient green roof.',
      url:         `${thisUrl}/contact`,
      image:       'https://cdn.buttercms.com/8t6e9sjgTB6hfTBgIsox',
      alt:         'Contact Purple-Roof',
    },
    fontsToLoad: fontsToLoad.slice(0,2),
    // contact info is in the footer
    info: {
      buttonLabel: 'Contact Us',
      address1:    '17416 Germanna Highway',
      address2:    'Culpeper, VA 22701',
      tel:         '1+540.881.0058',
      mapUrl:      'https://www.google.com/maps/place/17416+Germanna+Hwy,+Culpeper,+VA+22701/@38.450847,-77.938673,17z/data=!3m1!4b1!4m5!3m4!1s0x89b42753cc4aeb5d:0x9ee3db7f5b221321!8m2!3d38.4508428!4d-77.936479',
    },
    placeholders: {
      name: 'name',
      email: 'name@email.com',
      tel: '555.555.5555',
      msg: 'How can we help you?',
    },
    submitButton: 'Send',
    // success message that displays when user clicks send on contact us
    success: {
      header: 'Thanks for contacting us!',
      message: [
        'Check your email for an auto-generated confirmation of receipt.',
        'One of our team members will contact you within 1 business day.',
      ]
    },
    // failure message that displays if contact us is not successfull upon send
    fail: {
      header: 'Oops!',
      message: 'Sorry, something went wrong.  Please try again. If this does not work, please email info@purple-roof.com.',
    },
  },

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
      // {
      //   images: [
      //     {
      //       image: 'https://cdn.buttercms.com/JbXv6qWuR8urwkSr1mtv',
      //       alt:    'green roof sky parc flushing ny sedum',
      //     },
      //     {
      //       image: 'https://cdn.buttercms.com/swuyWc0ySRWBWLE8bnRE',
      //       alt:    'green roof sky parc flushing ny grasses',
      //     },
      //   ], 
      // },
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