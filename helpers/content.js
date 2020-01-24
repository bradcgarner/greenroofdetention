import {
  EllipsisVAlt, 
  CaretUp
} from '../components/graphics/icons';
import { fontsToLoad, accentFontColor, accentFontColorHover, green, red } from './common-styles';
import ImageContainer from '../components/home/image-container';

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
            Blue-Green Roof concept
          </h3>
          <p className='concept-text'>
            Storing water in a horizontal reservoir below a green roof with flow control at the drain, often via smart controls.
          </p>
        </div>
        <div className='concept'>
          <h3 className='concept-header'>
            Purple Roof concept
          </h3>
          <p className='concept-text'>
            Storing water in a horizontal reservoir below a green roof with flow control provided by uniform friction throughout the green roof.
          </p>
        </div>
        <div className='concept'>
          <h3 className='concept-header'>
            Custom
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
        `}</style>
      </div>
    }
  ],
  companyIntro: [
    {
      element: 'h2',
      text: 'The following companies provide detention-oriented green roofs.',
      style: 'text-align: center;'
    },
  ],


  solutions: [
    // array of team solutions listed IN ORDER that they will appear on the home screen AND in the list of team solutions

    {
      id: 1, 
      contentTitle: 'We lead',
      firstName:    'Joshua',
      productHtmlId: 'josh',
      lastName:     'Robinson',
      logoAlt:        'Hydrologic Engineer',
      // logoUrls should be square
      logoUrl:     'https://cdn.buttercms.com/R7tc4SGRE2jFtS0cGzQL',
      // alt tag for logoUrl is person's name
      // quotes that appear on main screen, NOT in the modal
      // identify accented text by !!.  E.g. to accent the word "accent", put !! on either side of the word, with no spaces between the two exclamation points, but spaces on either side of the pair of exlamation points, such as "no accent !! accent !! no accent"
      // To emphasize the first word of a string, you must add an extra space before the !! at the front of the string
      quotes: [
        ' !u! Green Roof Diagnostics !u! was founded to provide scientific and technical leadership within the green roof industry. Our success is when !! all parties succeed !! .',
        ' !! Testing !!  is critical to our work. We test products and concepts from anyone. We try to handle this work in a rigorous, !! data-driven !! manner for optimal benefit to all parties.',
      ],
      // Bio that shows in the modal. Array of strings (one string = one paragraph).
      // Emphasize with !! the same as done for quotes.
      bio: [
        'Growing up along a tidal creek in coastal South Carolina, I have always been inspired and humbled by the order and complexity of the natural world. My fascination with natural systems, coupled with my passion for design, led me to study engineering as an undergraduate, and then to graduate research in the burgeoning field of environmental hydraulics. This work introduced me to streams and entire watersheds that had been devastated by the effects of urbanization.',
        'Since then, I have worked to repair natural systems, and equally, to engender a spirit of land stewardship that views stormwater as a resource instead of a waste product. I am a licensed professional engineer with over fifteen years of experience as a water resources engineer, ecological engineer, and consulting hydrologist in private practice. I have extensive experience in the planning, design, engineering, permitting, construction, and management of aquatic ecosystem restoration and green stormwater infrastructure projects.',
        'My work represents a unique combination of ideas, rigorous scientific analysis, and design. In 2008, I founded Robinson Design Engineers, a collaborative consulting practice with offices in Charleston, SC, and Asheville, NC. Since then, I have led a team of talented engineers, hydrologists, and designers engaged in a variety of project types. Through the years, in our struggle to find data-driven, physically-based methods for designing and managing living infrastructure systems, we began doing our own internal research to guide our work. This pursuit led to a collaboration that took shape as Green Roof Diagnostics. I’m thrilled for the opportunity to contribute the important work of elevating green infrastructure in professional practice and policy.',
        'I am a co-founder of Green Roof Diagnostics, where I lead hydrologic and stormwater research.',
      ],
      /* The frames is used in 2 ways:
       1) Within the modal of "read more" we display:
           paragraph 1,
           image 1, image 2,
           paragraph 2
           paragraph 3
           image 3, image 4
           paragraph 4, etc.
           (no captions in modal)
       2) Carousel shows images and captions only.
      */
     frames: [
      {
        img: 'https://cdn.buttercms.com/XWP5F35aRWW6BqSNYaW7',
        alt: 'green roof research facility',
        // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
        caption: 'Green Roof Diagnostic\'s research facility in Culpeper, VA',
        text: 'Green Roof Diagnostics was founded to provide scientific and technical leadership within the green roof industry.  Testing  is critical to our work, and we are very proud of our green roof testing facility in Culpeper, Virginia. We test products and concepts from anyone as part of an initiative to improve green roof performance industry-wide, not just by a few parties. Our indoor and outdoor lab is equipped with technologies to allow us to work in a rigorous, data-driven  manner.',
      },
      {
        img: 'https://cdn.buttercms.com/nlbmZ9F4S9i8clcWZr5c',
        alt: 'green roof stepping stone pathway',
        caption: 'We research biological health as well as hydrology. Green roofs should perform AND look great!',
        text: 'We want to see some big changes in the world of green roofs, such as accurate, standardized performance metrics.  But we embrace small, incremental changes as pragmatic.  Our work includes first-hand research, literature reviews, and consulting on designs, calculations and policies.  We want to meet the market where they are, and help advance initiatives that incentivize tangible performance.',
      },
      // {
      //   img: 'https://cdn.buttercms.com/Od9ayFtGSeQkPlxyQDv0',
      //   // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
      //   alt: 'green roof platform plant inspection',
      //   caption: 'Hydrology impacts vegetation. Vegetation impacts hydrology. We are mapping these relationships.',
      //   text: 'Green Roof Diagnostics\'s holistic approach is one of our more uncommon aspects.  Versus focusing solely on stormwater, or horticulture, or nutrient cycles, we try to evaluate all aspects of green roof design and performance as an interconnected package.  We thrive on examining interrelationships between components and phenomena, such as the impact of vegetation on stormwater management, or the relationship between plant health and retention.',
      // },
      {
        img: 'https://cdn.buttercms.com/lPRd07RRkQmRXe3HHo0w',
        alt: 'green roof detention hydrograph',
        caption: 'Hydrograph demonstrating green roof platform detention performance.',
        text: 'Leading often involves re-examining foregone conclusions, such as the conclusion that green roofs provide retention but not detention. This may be true with current assemblies, but our research indicates viable ways to achieve true detention via extensive green roof assemblies.  These phenomena are apparent when examining hydrographs.  We are sharing some of our hydrographs on the monitoring page of this site.',
      },
    ], // end frames
    montage: {
      topLeft: [
        {
          url: 'https://cdn.buttercms.com/WDYmw4hRymVnnIOuUhxd',
          alt: 'joshua robinson in stream', // populate for internal reference, but not currently used in this context
          backgroundColor: '#ddd',
        }
      ],
      bottomLeft: [
        {
          text: {
            content: true, // will repeat the name; when compressing to smallest size, this stays when all else goes
          },
        },
        {
          backgroundColor: '#ddd',
          button: true, // when compressing to smallest size, this stays when all else goes
        },
      ],
      // DO NOT PUT BUTTON OR TEXT IN THE CENTER
      // center hides on small screens
      center: [
        {
          url: 'https://cdn.buttercms.com/5VJb0cFAQj2yyuw1OsjW',
          alt: 'joshua robinson in canoe', // populate for internal reference, but not currently used in this context
          backgroundColor: '#ddd',
        },
        {
          url: 'https://cdn.buttercms.com/J5237Ow2S0y3RnHOEbd0',
          alt: 'joshua robinson in field', // populate for internal reference, but not currently used in this context
          backgroundColor: '#ddd',
        },
        {
          url: 'https://cdn.buttercms.com/S7kyH1rtTb1Q6sCXoVAE',
          alt: 'joshua robinson in wetland', // populate for internal reference, but not currently used in this context
          backgroundColor: '#ddd',
        }
      ],
      right: [
        {
          url: 'https://cdn.buttercms.com/Ffe6MxchQjuRU7QhljfI',
          alt: 'Joshua Robinson', // populate for internal reference, but not currently used in this context
          backgroundColor: '#ddd',
          mainlogoUrl: true, // when compressing to smallest size, this stays when all else goes
        },
        {
          url: 'https://cdn.buttercms.com/mimBwDkmToG5ecS9ZFuR',
          alt: 'Joshua Robinson on construction site', // populate for internal reference, but not currently used in this context
          backgroundColor: '#ddd',
        },
      ],
    }, // end montage
  }, // end Josh

  {
    id: 0, 
    contentTitle: 'We start at the top', // title of main page content that this team member authored
    firstName:    'Charlie',
    productHtmlId: 'charlie',
    lastName:     'Miller',        
    logoAlt:        'Advisor',
    // logoUrls should be square
    logoUrl:     'https://cdn.buttercms.com/8xH1TjPiSESBiPuzFuvK', // alt tag is person's name
    // quotes that appear on main screen, NOT in the modal
    // identify accented text by !!.  E.g. to accent the word "accent", put !! on either side of the word, with no spaces between the two exclamation points, but spaces on either side of the pair of exlamation points, such as "no accent !! accent !! no accent"
    // To emphasize the first word of a string, you must add an extra space before the !! at the front of the string
    quotes: [
      'Green infrastructure focuses on cost-effective, living,  !! upstream !!  solutions. And there is no-where farther up stream than the roof!',
      ' !! Green infrastructure !!  is so powerful because it harnesses the simple solutions of nature to provide primary and !! secondary benefits !! ',
    ],
    // Bio that shows in the modal. Array of strings (one string = one paragraph).
    // Emphasize with !! the same as done for quotes.
    bio: [
      'I was introduced to the world of green roofing by a dear friend, Joachim Tourbier, an international pioneer in promoting landscape-oriented urban stormwater runoff management practices. After I become frustrated with the limitations of conventional engineering solutions, Toby opened my eyes to the potential of harnessing nature. My journey led me to Europe, where full-scale green roof implementation was on display, and then to a succession of German and American engineers, architects and landscape designers, who became my partners in bringing these ideas home.',
      'Looking back, my work is an ideal culmination of my wide-ranging interests, that included previous careers as a research chemist, exploration geologist, civil engineer, and organic farm operator. Green engineering offers a refuge in this era of siloed specialists and technology. I am most optimistic about our future when I see how fresh and exciting new projects emerge from a dialogue between the fields of biology, sociology, hydrology, architecture, and materials science; and it happens all the time!',
      'Twenty-one years ago, I founded Roofscapes, Inc. (ne Roofmeadow) which has focused on the custom design of green roofs. Throughout, my objective has been to select the best materials and the most appropriate methods suited to each client and project. My clients have given me the opportunity to participate in the design of meadows, lawns, parks, and elaborate gardens. Of the hundreds of projects for which I have provided design services, no two are identical. These include the Chicago City Building, Brooklyn Botanic Garden Visitors Center, CIRA Green Park, Jackson National Insurance Co. Headquarters, and the Music City Center. In 2019 I am retiring from Roofmeadow and I am pleased to be serving as an advisor to Green Roof Diagnostics.',
    ],
    /* The frames is used in 2 ways:
     1) Within the modal of "read more" we display:
          paragraph 1,
         image 1, image 2,
         paragraph 2
         paragraph 3
         image 3, image 4
         paragraph 4, etc.
         (no captions in modal)
      2) Carousel shows images and captions only.
     3) Size: Carousel images should be 0.75h to 1.00w.  E.g. 3 units tall to 4 units wide.
     4) Size: Carousel images should be about 1MB.
    */

    frames: [
      {
        img: 'https://cdn.buttercms.com/ueJWlM4QR2OUrVcDvjex',
        // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
        alt: 'chicago skyline',
        caption: 'Challenge: achieving a pre-development hydrologic regime in the city.',
        text: 'It is time to look down on our cities and begin in earnest to colonize the roofs and terraces that constitute the urban plateau. The urban plateau is the headwater for green cities of the future, where rainfall, instead of pouring destructively and wastefully into our sewers, will be detained to nourish a new green human habitat. From there runoff can descend benignly to the streets below.',
      },
      {
        img: 'https://cdn.buttercms.com/b6qthtmSUCThcwQKBgWF',
        alt: 'Jackson National Headquarters, Lansing, MI',
        caption: 'Jackson National Headquarters, Lansing, MI. Photo courtesy of Gresham Smith.',
        text: 'Introducing new green infrastructure on the ground level (e.g., creating opportunities for infiltration, daylighting streams, and opening new green spaces) will generally require undoing the mistakes of the past before we can move forward. On the other hand, the work of greening our roof tops and terraces is almost exclusively an additive process. Bleak windswept surfaces are converted to green landscapes and recreational areas by adding a veneer of specialized materials that can intercept rainfall and give rise to a mosaic of groundcovers, flowers, grass, shrubs and trees.',
      },
      {
        img: 'https://cdn.buttercms.com/3QzyrEgQRHOpx3GESF4I',
        alt: 'green roof at Music City Center in Nashville, TN',
        // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
        caption: '175,000 square foot green roof at Music City Center in Nashville, TN. Photo courtesy of Roofmeadow.',
        text: 'To promote this green transformation, it is essential that we make good choices about the materials and approaches that we use. The last 20 years in the United States has been a long introduction to the concept of urban greening and, in particular, to green roofs. During this time, we designers have learned a lot; sometimes by making mistakes. The next decade must now capitalize on this hard-won knowledge to optimize the benefits and reduce the costs of roof greening.',
      },
      {
        img: 'https://cdn.buttercms.com/wW3LtmEMTPm6PNwgd1y1',
        alt: 'green roof University of Virginia Hospital',
        caption: 'Beautiful and functional green roof at UVA Hospital. Photo courtesy of Roofmeadow.',
        text: 'Designers must respect the underlying scientific principles that give rise to effective rainfall runoff management and improve their designs accordingly. I am pleased to be involved with this band of engineers, horticulturalists and scientists that have set this as their goal.',
      },
      {
        img: 'https://cdn.buttercms.com/3n6JI5FFTlSdaivoWDT0',
        alt: 'green roof at Chicago City Hall',
        // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
        caption: 'The green roof atop Chicago\'s City Hall was a significant moment in the greening of American cities. Photo courtesy of Roofmeadow.',
      },
      {
        img: 'https://cdn.buttercms.com/y6Co1unqROazUpkjvjAS',
        alt: 'green roof Brooklyn Botanical Gardens',
        caption: 'A true "roof meadow" at Brooklyn Botanical Gardens. Photo courtesy of New York Green Roofs.',
      },
    ], 
    // END CAROUSEL

      /* START PHOTO MONTAGE
        photo montage has 4 areas: top left, bottom left, center, and right
        Each slot can have 1 or more images.  Images are centered in slots.
        ___________________________________
        |               |  c  |           |
        |     top       |  e  |     r     |
        |     left      |  n  |     i     |
        |_______________|  t  |     g     |
        |      bot      |  e  |     h     |
        |      left     |  r  |     t     |
        |_______________|_____|___________|

        Visibility:
           Wide screen: all show
           Narrower: center disappears
           Narrower: all disappear and are replaced by:
        _________________
        |               |
        |     logoUrl  |  << i.e. mainlogoUrl = true
        |_______________|
        |      title    |  << i.e. content = true
        |_______________|
        |      button   |  << i.e. button = true
        |_______________|
                           ...alternately...
        _________________
        |               |
        |     logoUrl  |  << i.e. mainlogoUrl = true
        |_______________|
        |      title    |  << i.e. content = true
        |      button   |     AND button = true
        |_______________|

        Graphic flow:
          Top left and bottom left flow left-to-right
          Center and right flow top-to-bottom
          Everything is spaced out and remains proporational
          E.g. in the center column, since it is narrow, you can fit about 5 or 6 landscape images. If you use only 2 or 3, they will just space evenly within the column.
          To force spaces (such as to force everything to the top or bottom), add blank objects in the array.

        Object format: {
          url: full url of image (omit if using text or button)
          alt: alt tag (only use with url)
          mainlogoUrl: true (optional key, use only once)
          text: { (optional key)
            content: string or true to use the name and title (use true only once)
            style: CSS to be applied to this text (ask Brad)
          }
          backgroundColor: hex color to use as background color (optional key)
          button: true to open bio (optional key, use only once)
        }

        Guidelines:
          One image in top left.
          Two items (images or text only or button only) in bottom left
          NO TEXT / NO BUTTONS in center
          Beyond that, mix it up. The point is for this to be a variable / free-form space where each team member has a collage of images (of the person, of topics related to the person, maybe of their work such as a book cover or video still or drawing), also with variable format.
      */

      montage: {
        topLeft: [
          {
            url: 'https://cdn.buttercms.com/LaEARnepS82pGJGSyWm6',
            alt: 'Chicago City Hall green roof', // populate for internal reference, but not currently used in this context
          }
        ],
        bottomLeft: [
          {
            url: 'https://cdn.buttercms.com/xWiO1OeReKFElyU0M5ol',
            alt: 'Charlie Miller in Roofmeadow green roof media lab', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
            backgroundPosition: 'background-position: center top;',
          },
          {
            url: 'https://cdn.buttercms.com/5yfJogFBQmafxPyFLU1x',
            alt: 'Charlie Miller on green roof construction site with safety cable', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
            backgroundPosition: 'background-position: center top;',
          },
        ],
        // DO NOT PUT BUTTON OR TEXT IN THE CENTER
        // center hides on small screens
        center: [
          {
            url: 'https://cdn.buttercms.com/jn0MtaxjQfStBFx4yQZP',
            alt: 'Charlie Miller on extensive green roof', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/YABfizzkQayqnDseMXA3',
            alt: 'Charlie Miller on green roof meadow', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
        ],
        right: [
          {
            url: 'https://cdn.buttercms.com/JZDMn0QYS4pS1Sde0CAo',
            alt: 'Charlie Miller logoUrl', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
            mainlogoUrl: true,
          },
          {
            text: {
              content: true,
              // style: `color: white;`,
            },
            button: true,
            style: 'height: 25%;',
            photoCredit: 'photos courtesy of Roofmeadow',
          }
        ],
      }, // end montage
    }, // end Charlie


    {
      id: 2, 
      contentTitle: 'We verify',
      firstName:    'Nolan',
      productHtmlId: 'nolan',
      lastName:     'Williams',
      logoAlt:        'Civil Engineer',
      // logoUrls should be square
      logoUrl:     'https://cdn.buttercms.com/hLSeDgc0T2CxVLwW3KTg', // logoUrl is person's name
      // quotes that appear on main screen, NOT in the modal
      // identify accented text by !!.  E.g. to accent the word "accent", put !! on either side of the word, with no spaces between the two exclamation points, but spaces on either side of the pair of exlamation points, such as "no accent !! accent !! no accent"
      // To emphasize the first word of a string, you must add an extra space before the !! at the front of the string
      quotes: [
        'We measure, quantify, and !! validate !!the effectiveness of green infrastructure. We think the industry benefits from this !! de-mystification !! .',
        'We help design teams with better data so they can utilize green roofs !! confidently by maximizing detention benefits !! , with  !! ROI !!  for the developer and the environment.',
      ],
      // Bio that shows in the modal. Array of strings (one string = one paragraph).
      // Emphasize with !! the same as done for quotes.
      bio: [
        'I am fascinated by the interactions of humans, water, ecosystems, and the built environment. This fascination has instilled me with the desire to dedicate my personal and professional pursuits to preserve and improve all that exists at this intersection. These passions were the foundation of my educational pursuits, through which I obtained a degree in Civil Engineering, with a focus on Water and Environmental Systems.',
        'While in school I was involved in various volunteer and research capacities on a variety projects primarily focused on the use of green stormwater infrastructure and the intricacies of urban hydrology. It was also during this time that I began working as an intern with Robinson Design Engineers, an expertise-driven consulting practice specializing in water resources engineering, design, and environmental hydrology.  As part of my internship with Robinson, I pursued a long-term research project focused on the hydrologic performance of green roofs and their applications in stormwater management engineering, which eventually led to on-going collaboration with the Green Roof Diagnostics team. Now a full-time staff member with Robinson, I have continued work in computational modeling, stormwater management design and planning. I also collect and analyze hydrologic data.',
        'I’m excited to be a part of the Green Roof Diagnostics team and look forward to collaborating with other engineers, scientists, and industry professionals in an effort to elevate stormwater management and urban green infrastructure practices in an unbiased, data-driven, and scientifically rigorous manner.'
      ],
      /* The frames is used in 2 ways:
       1) Within the modal of "read more" we display:
           paragraph 1,
           image 1, image 2,
           paragraph 2
           paragraph 3
           image 3, image 4
           paragraph 4, etc.
           (no captions in modal)
       2) Carousel shows images and captions only.
      */
     frames: [
        {
          img: 'https://cdn.buttercms.com/KxInOan4TRuBv7mAuHYn',
          alt: 'green roof diagnostics testing cassette assembly',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          caption: 'Assembling a green roof cassette for testing.',
          text: 'We believe green roofs offer great promise, be we want to do more than believe.  We want to know.  Deeply.  So we started by challenging assumptions about how this performance is measured.  Tabletop sized samples are great for testing component properties, and monitoring of full-scale projects is great for determining how scale affects hydrology.  But neither of these common options allows for a highly controlled test of a fully assembled profile.  We think that is an important step, so testing at that scale is one of our areas of focus.',
        },
        {
          img: 'https://cdn.buttercms.com/SGcKmvzR1CvArDQYJMdw',
          alt: 'Calibrating distribution of simulated rainfall',
          caption: 'Calibrating distribution of simulated rainfall',
          text: 'We are pioneering novel testing protocols, borrowing from other industries, and applying this knowledge to green infrastructure.  The photo above shows measuring the evenness of rainfall distribution in our rainfall simulator.',
        },
        {
          img: 'https://cdn.buttercms.com/q0budX7NTLKDyIww96c2',
          alt: 'Green roof cassette in rainfall simulator for testing',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          caption: 'Green roof cassette in rainfall simulator for testing',
          text: 'Slope has a significant impact on a green roof\'s hydrologic performance, so we test green roofs at various slopes.  Notice that the test specimen is fully vegetated; this is intentional to accurately simulate actual field conditions.  We are also studying the impact that plants have on stormwater performance.',
        },
        {
          img: 'https://cdn.buttercms.com/wpkKTAhuQ5OEjuJKJnXL',
          alt: 'green roof diagnostics hydrograph multiple profiles',
          caption: 'Hydrograph comparing multiple green roof profiles',
          text: 'Our custom monitoring software aggregates all test data and allows us to overlay multiple tests for a rapid initial analysis of comparative performance.  The example above shows one rain event and four different profiles, each of which has different runoff characteristics.',
        },
      ], // end frames
      montage: {
        topLeft: [
          {
            url: 'https://cdn.buttercms.com/dLbP1P4ZQ4u1XRnZGOyi',
            alt: 'nolan williams fishing in mountains', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
        ],
        bottomLeft: [
          {
            url: 'https://cdn.buttercms.com/pRXFvy2Q4amzkpwbBHrr',
            alt: 'nolan photographer', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          // {
          //   url: 'https://cdn.buttercms.com/FvpBqKW9QXiVKP42wPLh',
          //   alt: 'nolan williams fishing in mountain stream', // populate for internal reference, but not currently used in this context
          //   backgroundColor: '#ddd',
          // },
          {
            url: 'https://cdn.buttercms.com/zHdKDCpkTWm7BsslXnOn',
            alt: 'nolan williams hiking out west', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          }
        ],
        // DO NOT PUT BUTTON OR TEXT IN THE CENTER
        // center hides on small screens
        center: [
          {
            url: 'https://cdn.buttercms.com/JgwGNzx0RZSsGtz7WxiC',
            alt: 'nolan fishing', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/ATt7VuRSdCswz4EWYqxm',
            alt: 'nolan fishing', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
        ],
        right: [
          {
            url: 'https://cdn.buttercms.com/hLSeDgc0T2CxVLwW3KTg',
            alt: 'nolan logoUrl', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
            mainlogoUrl: true,
          },
          {
            text: {
              content: true, // will repeat the name; when compressing to smallest size, this stays when all else goes
            },
            button: true,
            backgroundColor: '#ddd',
          },
          // {
          //   backgroundColor: '#ddd',
          //   button: true, // when compressing to smallest size, this stays when all else goes
          // },
        ],
      }, // end montage
    },


    {
      id: 3, 
      contentTitle: 'We take on challenges',
      firstName:    'Brad',
      productHtmlId: 'brad',
      lastName:     'Garner',
      logoAlt:        'Software Engineer',
      // logoUrls should be square
      logoUrl:     'https://cdn.buttercms.com/nk22q32STGgyygwQ3owv', // logoUrl is person's name
      // quotes that appear on main screen, NOT in the modal
      // identify accented text by !!.  E.g. to accent the word "accent", put !! on either side of the word, with no spaces between the two exclamation points, but spaces on either side of the pair of exlamation points, such as "no accent !! accent !! no accent"
      // To emphasize the first word of a string, you must add an extra space before the !! at the front of the string
      quotes: [
        'Responding and adapting to our climate requires !! innovation !! , and the best ideas may come from anywhere!',
        'We help  !! manufacturers and inventors !!  evaluate their  !! sustainable solutions !! , through rigorous testing and monitoring.',
      ],
      // Bio that shows in the modal. Array of strings (one string = one paragraph).
      // Emphasize with !! the same as done for quotes.
      bio: [
        'I’m passionate about the environment, and I\'ve always enjoyed working with data. I also like working on a team with high standards. This is why I’m so happy to be at Green Roof Diagnostics.',
        'I am responsible for GRD’s monitoring infrastructure, data collection and integrity, software development, and data visualization: basically anything that includes bits or numbers. I find this rewarding, largely due to my mutt of a professional background.',
        'I practiced traditional landscape architecture for 13 years, working with architects, developers, engineers, and environmental agencies. Then I led operations and product development at another green roof company, where I was exposed to more of the same parties, but from a different perspective. Those six years taught me a lot about stormwater regulations and were my start into stormwater research. In both prior careers, I worked in construction: first in construction administration, then later in the construction supply chain.',
        'After two decades of design and construction work, I returned to school to study application development.  I had hoped to start this new career building software for the environmental industry, and I was thrilled when the opportunity with Green Roof Diagnostics arose, as this married my past and current skillsets. I\'m glad to be part of a team that is leveraging technology to improve stormwater solutions for the design and construction industry.',
      ],
      /* The frames is used in 2 ways:
       1) Within the modal of "read more" we display:
           paragraph 1,
           image 1, image 2,
           paragraph 2
           paragraph 3
           image 3, image 4
           paragraph 4, etc.
           (no captions in modal)
       2) Carousel shows images and captions only.
      */
     frames: [
        {
          img: 'https://cdn.buttercms.com/XSjEmVONRy2kpKJ0MZrj',
          alt: 'green roof amenity space in urban area',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          caption: 'Challenge: Beauty, performance, and durability',
          text: 'Green roofs are challenging.  And a times that\'s a part of their allure.  Not only do these thin-profile ecosystems need to provide stormwater benefits, they need to look great while withstanding the harsh urban environment.  Meeting these challenges is rewarding due to the wealth of benefits green roofs can provide.',
        },
        {
          img: 'https://cdn.buttercms.com/AnarN6kXTQK15e4JqCnI',
          alt: 'green roof around skyscraper',
          caption: 'Harsh environments and limited space are challenging',
          text: 'We look at one of the challenges a bit differently from some others: the challenge of limited space. We know that urban areas will not magically begin to free up space, and stormwater concerns will continue.  We are seeing increased use of cisterns, even on projects with significant green roofs, so one of our focuses is how can green roofs do better and minimize or eliminate the need for those tanks.',
        },
        {
          img: 'https://cdn.buttercms.com/gYb3LEwToexyOYcrqjAY',
          alt: 'green roof slope in New York City',
          caption: 'Sloped roofs present stormwater challenges',
          text: 'Central to Green Roof Diagnostics\' mission is verifying performance. Slope is often not considered when green roof performance is calculated, and we have learned that the impact of slope is poorly understood within the industry.  We are studying this impact carefully.  We are not only pursuing the knowledge, but we are pursuing solutions that can improve stormwater performance on slopes.',
        },
        {
          img: 'https://cdn.buttercms.com/0zPpHgeKRDafhtDiUdbR',
          alt: 'green roof with planter boxes courtyard',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          caption: 'Green roofs often must be multi-functional',
          text: 'Green roofs face unparalleled multi-functional demands.  Sometimes these demands, such as perpetual lushness, result in high irrigation or nutrient use, which cancels out a lot of the green roof\'s promised performance.  We are studying long-term retention, and the impact of a healthy soil biology on green roof performance, both of which provide promise of lessening irrigation and fertilizer use on intensive green roofs.',
        },
      ], // end frames
      montage: {
        topLeft: [
          {
            url: 'https://cdn.buttercms.com/nk22q32STGgyygwQ3owv',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
            mainlogoUrl: true, // when compressing to smallest size, this stays when all else goes
          },
        ],
        bottomLeft: [
          {
            url: 'https://cdn.buttercms.com/tk8w83FTMymSKCrfl5FH',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          },
          {
            url: 'https://cdn.buttercms.com/qlDfCjPvShaLocFicpj3',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          },
          {
            button: true, // when compressing to smallest size, this stays when all else goes
            backgroundColor: '#333',
          }
        ],
        // DO NOT PUT BUTTON OR TEXT IN THE CENTER
        // center hides on small screens
        center: [
          {
            url: 'https://cdn.buttercms.com/h4hqPItKSfKjUd4MF1VA',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/nsGoR1VDRpWKeUPaJVHO',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/5JLVQcBTKatqgIG8cPgZ',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/RIs9IHOqSOWyvvB7iFt4',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/fjGHGQdSJS50Ty4AKc6V',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/GzdAyByQl6PEwmguNSWp',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
        ],
        right: [
          {
            url: 'https://cdn.buttercms.com/LSJ0SnRQZW73CfXRaFz2',
            alt: 'brad on tv', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          },
          {
            text: {
              content: true, // will repeat the name; when compressing to smallest size, this stays when all else goes
            },
            backgroundColor: '#ddd',
          },
          {
            url: 'https://cdn.buttercms.com/46eIQTIrS6iaL1NAksGE',
            alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
            backgroundColor: '#ddd',
          }
        ],
      }, // end montage
    },


    {
      id: 4, 
      contentTitle: 'Our work is alive!',
      firstName:    'Dr. Anna',
      productHtmlId: 'anna',
      lastName:     'Zakrisson',
      logoAlt:        'Soil Biologist',
      // logoUrls should be square
      logoUrl:     'https://cdn.buttercms.com/cDIYvfkQ8CqH4b0wCXFU', // alt tag is person's name
      // quotes that appear on main screen, NOT in the modal
      // identify accented text by !!.  E.g. to accent the word "accent", put !! on either side of the word, with no spaces between the two exclamation points, but spaces on either side of the pair of exlamation points, such as "no accent !! accent !! no accent"
      // To emphasize the first word of a string, you must add an extra space before the !! at the front of the string
      quotes: [
        'Green infrastructure is  !! alive! !!   Our work is holistic, including  !! soil biology !!  and  !! water quality !! .',
        'Humanity is moving to cities. Despite this, we often overlook the biology and chemistry of our !! urban ecosystems !! We aim at unlocking some of these mysteries and harness them for good.',
      ],
      // Bio that shows in the modal. Array of strings (one string = one paragraph).
      // Emphasize with !! the same as done for quotes.
      bio: [
      'I am intrigued by the possibility of creating sustainable ecosystems within cities. As a Ph.D. biologist with degrees in plant science and microbial ecology (Cambridge University, Max-Planck Institute), I am excited to work together with the experts at Green Roof Diagnostics to create cutting-edge research that effects positive, direct and profound impact on our future.',
      'My time as VP of Content at a fast-growing digital marketplace made my approach result-orientated and pragmatic, and also made me see the benefits of effective communication. Science communication has since become both a passion and a profession of mine leading to consulting assignments in content marketing and digital strategy. I also have extensive field-work experience from over 30 marine and jungle expeditions which has taught me the value of resourcefulness and problem-solving.',
      'We are living in a rapidly changing world, and if we want to see a sustainable future, we need innovative and creative solutions. The challenge is to achieve true sustainability interweaving ecology, finance, regulations, and local conditions. At GRD I feel that I am doing that: creating a sustainable product with significant financial benefits. At GRD I lead soil biology and plant physiology research.'
    ],
      /* The frames is used in 2 ways:
       1) Within the modal of "read more" we display:
           paragraph 1,
           image 1, image 2,
           paragraph 2
           paragraph 3
           image 3, image 4
           paragraph 4, etc.
           (no captions in modal)
       2) Carousel shows images and captions only.
      */
     frames: [
        {
          img: 'https://cdn.buttercms.com/A4woxNYQqaU9rEgrSmwe',
          alt: 'green roof soil beneficial fungi',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          caption: 'Beneficial fungi in soil',
          text: 'The green roof industry often treats green roofs as manufactured products.  Though the plants are alive, most commercial growers, and many commercial green roof maintainers, rely heavily on chemicals.  The landscape industry only began focusing on soil biology about 20 years ago, and the green roof industry has not yet focused on soil biology. We think that should change.',
        },
        {
          img: 'https://cdn.buttercms.com/QrxZHlJzRWmN1lZTr527',
          alt: 'green roof testing in rain laboratory with sedum',
          caption: 'Fully vegetated green roof cassette in laboratory',
          text: 'We are studying microbiology within green roofs.  We have determined that green roofs can support beneficial fungi, such as arbuscular mycorrhiza. We are studying the impact that these organisms have on the overall green roof mesocosm, including the ability to support healthy plants with lower chemical use.  Further, we are studying the impact of plants on stormwater management.  Yes, we we will eventually be able to assign an efficiency factor to a green roof based on its microbial health.  We think cities will benefit from deploying these approaches on a large scale.',
        },
        {
          img: 'https://cdn.buttercms.com/CYUwMcYcQA2MXlmmWyWy',
          alt: 'lady bug on allium blossom on green roof',
          caption: 'Green roofs provide needed urban habitat',
          text: 'Healthy green roofs reliably provide much-needed urban habitat.  These thin-profile systems may be habitat to a few larger organisms, such as birds, but bees and butterflies get more attention.  But all these organisms rely on healthy soil biology.',
        },
        {
          img: 'https://cdn.buttercms.com/CmVeGPULQqCjZTDxKnxb',
          alt: 'Nematode',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          caption: 'Nematodes are beneficial microorganisms that can thrive in green roof soil.',
          text: 'We are also studying the relationship between soil biology and nutrient runoff.  We are testing hypotheses that healthy green roof soil biology results in greater nutrient retention and greater nutrient plant-availability, thus reducing nutrient runoff.',
        },
      ], // end frames
      montage: {
        topLeft: [
          {
            url: 'https://cdn.buttercms.com/ecyxFXriTHmR5ksTf5rP',
            alt: 'Anna Zakrisson speaking', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
            text: null,
          },
        ],
        bottomLeft: [
          {
            url: 'https://cdn.buttercms.com/EZee0F9gS6yE4s7mPOPU',
            alt: 'Anna Zakrisson boat', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
            text: null,
          },
          {
            url: 'https://cdn.buttercms.com/KkQNG54aQNObg05RoB8s',
            alt: 'Anna Zakrisson laboratory', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          }
        ],
        // DO NOT PUT BUTTON OR TEXT IN THE CENTER
        // center hides on small screens
        center: [
          {
            url: 'https://cdn.buttercms.com/TtYlbbyoQ1GrFXZBHEfR',
            alt: 'Anna Zakrisson biologist on ship', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          },
          {
            url: 'https://cdn.buttercms.com/dUcz2siMRGKEvf9CDPkt',
            alt: 'Anna Zakrisson in marine gear', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          },
          {
            url: 'https://cdn.buttercms.com/IxhCaXiQS65XDmlv7D0X',
            alt: 'Anna Zakrisson biologist on ship', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          },
          {
            url: 'https://cdn.buttercms.com/aVPnrGnXTYa4bEpVaUGL',
            alt: 'Anna Zakrisson biologist on ship', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
          },
        ],
        right: [
          {
            url: 'https://cdn.buttercms.com/ngrzbGlfQVadillaHX77',
            alt: 'Anna Zakrisson speaking', // populate for internal reference, but not currently used in this context
            backgroundColor: '#333',
            mainlogoUrl: true, // when compressing to smallest size, this stays when all else goes
          },
          {
            text: {
              content: true, // will repeat the name; when compressing to smallest size, this stays when all else goes
              style: `color: white;`,
            },
            backgroundColor: '#333',
            button: true, // when compressing to smallest size, this stays when all else goes
          },
        ],
      }, // end montage
    }, 
    // END TEAM MEMBER

  ],
  // END TEAM solutions

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