import {
  EllipsisVAlt, 
  CaretUp
} from '../components/graphics/icons';
import { warmGray1, warmGray2, warmGray3, warmGray4 } from './common-styles';
/*
 * This file - with few, small exceptions - includes ALL "static" content for the Purple-Roof site, i.e. all content that is not a blog post or image or file.
 * Blog posts and images are in the CMS.
 * Files (such as Word documents for spec downloads), are saved at ____ (currently TBD).
 * When editing this file MAINTAIN FILE STRUCTURE!!!
 * The site is hard-coded to read the structure of this file, structure mostly being object structure (data types, what is an object, what are object keys, etc)
 * Arrays may change length. Array length is not object structure.  E.g. if there are 2 lines of text in an array, and we want 5 lines, change to 5 lines; this does not affect "structure".
 * ALL OTHER COMMENTS ARE IN-LINE
 */

const loremIpsum =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at finibus est. Suspendisse maximus nisi at felis interdum, ac ultrices quam dictum. Nulla commodo nulla suscipit sollicitudin volutpat. In nec ultrices felis. Duis risus elit, hendrerit sit amet auctor ac, tincidunt ac dui. Nunc ultricies, sem eget laoreet euismod, nulla metus interdum ligula, et imperdiet lacus lectus ut erat. Nullam vestibulum sollicitudin nisi ac efficitur. Proin molestie felis a sagittis pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam venenatis libero non nibh facilisis rhoncus.`;

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
    'team', // this is the id of the div for scrolling purposes. It will appear in the URL when clicked, e.g. https://greenroofdiagnostics.com changes to https://greenroofdiagnostics.com/#mission when this is clicked in the menu.
    'mission', // this is the id of the div for scrolling purposes.
    'research', // this is the id of the div for scrolling purposes.
    'monitoring',
    'lab',
    'collab',
    'pubs',
    'contact',
    'toTop',
    'burger',
  ],
  // END MENU

  landing: {
    backgroundImage: 'https://cdn.buttercms.com/iwpVNbNQ3ScnxnsYcCyo',
    // no alt tag for background image
    tagline: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
    subTag: `We are a team of professionals of various backgrounds who share a common goal: to improve the understanding and effectiveness of green infrastructure through rigorous science.`,
    equations: [
          `<div style="align-items: center;">
            <p style="font-weight: bold; font-size: 250%;color: ${warmGray1};">ET<sub>o</sub> =</p>
            <div style="flex-direction: column;">

              <div style="align-items: center; border-bottom: 1px solid black; padding-bottom: 5px; margin-bottom: 5px;">
                <p style="font-weight: bold; font-size: 250%; color: ${warmGray1}; padding-right: 5px;">
                  0.408&Delta; (R<sub>n</sub> - G) + &gamma;
                </p>
                <div style="flex-direction: column; align-items: center;">
                  <p style="width: 100%; text-align: center; border-bottom: 1px solid black; font-weight: bold; font-size: 250%; color: ${warmGray1}; padding-bottom: 5px; margin-bottom: 5px;">900</p>
                  <p style="font-weight: bold; font-size: 250%; color: ${warmGray1};">T + 273</p>
                </div>
                <p style="font-weight: bold; font-size: 250%; color: ${warmGray1}; padding-left: 5px;">
                  U<sub>2</sub> (e<sub>s</sub> - e<sub>a</sub>)
                </p>
              </div>

              <div style="justify-content: center;">
                <p style="font-weight: bold; font-size: 250%; color: ${warmGray1};">&Delta; + &gamma; (1 + 0.34U<sub>2</sub>)</p>
              </div>

            </div>
          </div>`,

          `<p style="font-weight: bold; font-size: 250%; color: ${warmGray2};">W<sub>in</sub> = R<sub>obs</sub> * &Omega; * &thetasym; ((X × &pi;) / 180 ) * ( 1 + a<sub>rain</sub> * X )</p>`,

          `<p style="font-weight: bold; font-size: 250%; color: ${warmGray3};">S = 100 * (1 - (WS<sub>act</sub> / (p * WS<sub>max</sub>) ) )</p>`,

          `<p style="font-weight: bold; font-size: 250%; color: ${warmGray4};">W<sub>ro</sub> = W<sub>in</sub> − (WS<sub>max</sub> − WS<sub>act</sub>)</p>`,
    ]
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
    // contact info is in the footer
    meta: {
      title:       'Contact Green Roof Diagnostics',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/contact`,
      image:       'https://cdn.buttercms.com/qWRKSMrYQAeLOx7uX9pD',
      alt:         'Contact Green Roof Diagnostics',
    },
    info: {
      buttonLabel: 'Contact Us',
      address1:    'PO Box 2',
      address2:    'Stevensburg, VA 22741',
      tel:         '1+540.881.0027',
      email:       'info@greenroofdiagnostics.com',
    },
    placeholders: {
      name: 'name',
      email: 'myname@mydomain.com',
      tel: '555.555.5555',
      msg: 'Send us a message.',
    },
    submitButton: 'Send',
    // background image for contact us page
    // make sure this works with content on all devices
    backgroundImage: 'https://cdn.buttercms.com/JLnvIszKRA2F3llw8SUN', // no alt tag for background image
    // success message that displays when user clicks send on contact us
    success: {
      header: 'Thanks for contacting us!',
      message: [
        'Check your email for an auto-generated confirmation of receipt.',
        'One of our team members will contact you within 1 business day.',
      ],
    },
    // failure message that displays if contact us is not successfull upon send
    fail: {
      header: 'Oops!',
      message: 'Sorry, something went wrong.  Please try again. If this does not work, please email info@greenroofdiagnostics.com.',
    },
  }, // end contact

  // START TEAM
  // MAIN HOME CONTENT IS ORGANIZED AROUND TEAM.MEMBERS
  team: {
    mainNav: {
      barLabel:   'Team', // label in header
      burgerLabel: 'Team',
      divHeader:   'Team', // label on actual div
      pageHeader:  null,
      id:     'team', // this is the id of the div for scrolling purposes.
      link:   '/#team',
      priority: 1, // 1st to go
    },
    // button on each card
    buttonLabel: 'View Bio',
    // main content is organized around team members
    members: [
      // array of team members listed IN ORDER that they will appear on the home screen AND in the list of team members

      {
        id: 1, 
        contentTitle: 'We lead',
        firstName:    'Joshua',
        firstNameKey: 'josh',
        lastName:     'Robinson',
        title:        'Hydrologic Engineer',
        // headshots should be square
        headshot:     'https://cdn.buttercms.com/R7tc4SGRE2jFtS0cGzQL',
        // alt tag for headshot is person's name
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
        /* The story is used in 2 ways:
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
       story: [
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
        {
          img: 'https://cdn.buttercms.com/Od9ayFtGSeQkPlxyQDv0',
          // target 75-100 characters in caption          40        50        60        70        80        90        100 <<< max CAPTION
          alt: 'green roof platform plant inspection',
          caption: 'Hydrology impacts vegetation. Vegetation impacts hydrology. We are mapping these relationships.',
          text: 'Green Roof Diagnostics\'s holistic approach is one of our more uncommon aspects.  Versus focusing solely on stormwater, or horticulture, or nutrient cycles, we try to evaluate all aspects of green roof design and performance as an interconnected package.  We thrive on examining interrelationships between components and phenomena, such as the impact of vegetation on stormwater management, or the relationship between plant health and retention.',
        },
        {
          img: 'https://cdn.buttercms.com/lPRd07RRkQmRXe3HHo0w',
          alt: 'green roof detention hydrograph',
          caption: 'Hydrograph demonstrating green roof platform detention performance.',
          text: 'Leading often involves re-examining foregone conclusions, such as the conclusion that green roofs provide retention but not detention. This may be true with current assemblies, but our research indicates viable ways to achieve true detention via extensive green roof assemblies.  These phenomena are apparent when examining hydrographs.  We are sharing some of our hydrographs on the monitoring page of this site.',
        },
      ], // end story
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
            mainHeadshot: true, // when compressing to smallest size, this stays when all else goes
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
      firstNameKey: 'charlie',
      lastName:     'Miller',        
      title:        'Advisor',
      // headshots should be square
      headshot:     'https://cdn.buttercms.com/8xH1TjPiSESBiPuzFuvK', // alt tag is person's name
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
      /* The story is used in 2 ways:
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

      story: [
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
          |     headshot  |  << i.e. mainHeadshot = true
          |_______________|
          |      title    |  << i.e. content = true
          |_______________|
          |      button   |  << i.e. button = true
          |_______________|
                             ...alternately...
          _________________
          |               |
          |     headshot  |  << i.e. mainHeadshot = true
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
            mainHeadshot: true (optional key, use only once)
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
              alt: 'Charlie Miller headshot', // populate for internal reference, but not currently used in this context
              backgroundColor: '#ddd',
              mainHeadshot: true,
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
        firstNameKey: 'nolan',
        lastName:     'Williams',
        title:        'Civil Engineer',
        // headshots should be square
        headshot:     'https://cdn.buttercms.com/hLSeDgc0T2CxVLwW3KTg', // headshot is person's name
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
        /* The story is used in 2 ways:
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
       story: [
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
        ], // end story
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
              alt: 'nolan headshot', // populate for internal reference, but not currently used in this context
              backgroundColor: '#ddd',
              mainHeadshot: true,
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
        firstNameKey: 'brad',
        lastName:     'Garner',
        title:        'Software Engineer',
        // headshots should be square
        headshot:     'https://cdn.buttercms.com/nk22q32STGgyygwQ3owv', // headshot is person's name
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
        /* The story is used in 2 ways:
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
       story: [
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
        ], // end story
        montage: {
          topLeft: [
            {
              url: 'https://cdn.buttercms.com/nk22q32STGgyygwQ3owv',
              alt: 'Brad Garner', // populate for internal reference, but not currently used in this context
              backgroundColor: '#ddd',
              mainHeadshot: true, // when compressing to smallest size, this stays when all else goes
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
        firstNameKey: 'anna',
        lastName:     'Zakrisson',
        title:        'Soil Biologist',
        // headshots should be square
        headshot:     'https://cdn.buttercms.com/cDIYvfkQ8CqH4b0wCXFU', // alt tag is person's name
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
        /* The story is used in 2 ways:
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
       story: [
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
        ], // end story
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
              mainHeadshot: true, // when compressing to smallest size, this stays when all else goes
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
    // END TEAM MEMBERS
  },
  // END TEAM


  // mission on the home page AND mission page
  mission: {
    mainNav: {
      barLabel:   'Mission', // label in header
      burgerLabel: 'Mission',
      divHeader:   'Mission', // label on actual div
      pageHeader:  null,
      id:     'mission', // this is the id of the div for scrolling purposes.
      link:   '/#mission',
      priority: 1, // 1st to go
    },
    modalTitle: 'Our Mission',
    // label for the button on the main screen
    buttonLabel:    'Full Mission Statement',
    // image that shows in the mission div on the home page
    featured_image: 'https://cdn.buttercms.com/PDLEofuQYC9BxGuQJohm',
    featured_alt: 'green roof on school building',
    banner_image: 'https://cdn.buttercms.com/zFZpx71xTxurnTzKJe5u', // no alt tag
    // bullets for mission on home page
    // These look best if we have about 5-8 bullets
    // keep each bullet fairly short (no more than 50 characters looks best, but no hard limit)
    bullets: [
      'Encouraging use of holistic green infrastructure',
      'Research, innovation, data-driven design',
      'Testing protocols specifically adapted to urban infrastructure',
      'Meeting urgent needs in the stormwater management industry',
      'Accurately predicting green infrastructure performance',
      'Developing practical modeling tools to empower architects and engineers',
      'Optimizing green roofs for maximum volume reduction and peak flow management',
      'Honesty and objectivity, including acknowledging when green roofs might not be the best solution for a given project',
    ],
    // narrative that shows in the mission modal
    // list an array of strings.  Each string is a paragraph.
    // this is our full length, long-form mission statement
    narrative: [
      'Green Roof Diagnostics is an unbiased scientific and engineering research organization. We are a team of professionals of various backgrounds, who share a !! common goal: to improve the understanding and effectiveness of green infrastructure through rigorous science. !! ',

      'Green Roof Diagnostics enables novel, holistic approaches to stormwater management through research, innovation, and data-driven design.',
      
      'GRD seeks to transform urban environments by enabling developers, architects, and engineers to design green infrastructure solutions optimized for performance. Through continuous testing and modeling efforts, GRD leverages some of the most advanced data in the stormwater management industry to develop optimized solutions for green infrastructure design based on project-specific constraints and priorities.',

      'Cities around the globe are facing stormwater crises. In a rainstorm, most natural landscapes can absorb large volumes of water like a sponge, then very slowly release that water to plants, streams, and groundwater for days and even weeks after the clouds have cleared. While nature slowly takes water in, cities are designed to very quickly push water out. When rainwater falls on a roof or road, it immediately flows to the “gray” stormwater network of gutters and storm drains, picking up trash, chemicals, bacteria, and other pollutants on the way.',

      ' !! Like commuters at rush hour, the sudden rush of water creates a traffic jam in the pipes, which can lead to sewer overflows, floods, property damage, and water pollution. !! ',

      'Green infrastructure (GI) is one strategy cities use to help mitigate the stormwater crisis. GI projects like green roofs, bioretention basins, and rain gardens, use processes inspired by nature to clean runoff and prevent some of it from reaching the storm drain. Many cities have adopted policies to encourage or promote GI, yet these attempts have been limited by the fact that, while there is strong evidence that GI can be effective, the industry lacks data on exactly how effective different approaches can be. Without this data, civil engineers are forced to rely on gray stormwater infrastructure that satisfies most regulatory requirements and offers predictable results but does little to solve the city-wide stormwater problem.',

      'As cities continue to build up and out, the need for novel, holistic approaches to stormwater control grow as well. Green Roof Diagnostics is committed to bridging this gap between current stormwater infrastructure and the solutions of the future through research, innovation, and data-driven design.',

      'Recognizing a lack of rigorous, verifiable methods for evaluating green roof and urban stormwater infrastructure performance, the Green Roof Diagnostics team has combined extensive experience in engineering, scientific research methods, and industry best practices to develop innovative, reputable testing protocols specifically adapted to urban infrastructure projects. These protocols fill an urgent need in the stormwater management industry for trustworthy methods to accurately quantify and characterize green infrastructure performance.',

      ' !! GRD provides unbiased, scientific research for the green infrastructure industry. !! ',
    ],
  },

  pubsMenu: {
    meta: {
      title:       'Green Roof Diagnostics Publications',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/publications`,
      image:       'https://cdn.buttercms.com/41d9qxLjRRCJYYYmrY5M',
      alt:         'Green Roof Diagnostics Publications',
    },
  },

  // data used in blog, not on home page
  pubs: {
    meta: {
      title:       'Green Roof Diagnostics Publications',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/publications`,
      image:       'https://cdn.buttercms.com/41d9qxLjRRCJYYYmrY5M',
      alt:         'Green Roof Diagnostics Publications',
    },
    mainNav: {
      barLabel:    'Publications',
      burgerLabel: 'Publications',
      divHeader:   'Publications',
      pageHeader:  'Publications',
      id:     'publications', // this is the id of the div for scrolling purposes.
      link:   '/publications',
      priority: 3, // 3rd to go = last to go
    },
    // label for topics in sidebar
    topics:  'other publications on these topics', // if a post is opened
    // label for authors in sidebar
    authors: 'more publications by', // will include author name
    // label for recent posts in sidebar
    recents: 'other recent publications',
    // text on link that gets you to the screen with two icons
    linkToMenu: 'see all publications',
    shareHeader: 'Share:',
    menuHeader: 'Publications',
    noPubs: {
      header: 'Check back soon!',
      text: 'We will populate this page with our research, reviews of existing research, and other helpful information about green infrastructure.',
    },
    authorLookup: {
      'slug-name': 'Anna Zakrisson, PhD and Joshua Robinson, PE',
    },
  },

  // research division on the main page
  research: {
    mainNav: {
      barLabel:   'Research', // label in header
      burgerLabel: 'Research',
      divHeader:   'Research', // label on actual div
      pageHeader:  null,
      id:     'research', // this is the id of the div for scrolling purposes.
      link:   '/#research',
      priority: 1, // 1st to go
    },
    list: [
      // array of buttons, each button has a "card" to link to a page
      {
        title:    'Monitoring',
        image:    'https://cdn.buttercms.com/zQNCV8QhQfW3YYWlyCB7',
        alt:     'Green Roof Diagnostics graph of green roof monitoring data',
        text:     'Check out live monitoring of green roof test platforms!',
        link:     'monitoring' // link to the page on our site, no /, just the page
      },
      {
        title:    'Publications',
        image:    'https://cdn.buttercms.com/HDfg92WyQkC1x0kkC2ch',
        alt:      'Green Roof Diagnostics green roof scientific publications',
        text:     'Find our green roof articles and white papers here.',
        link:     'publications' // link to the page on our site, no /, just the page
      },
      {
        title:    'Laboratory',
        image:    'https://cdn.buttercms.com/0YzpyuDQSGfHprBmYCUO',
        alt:      'Green Roof Diagnostics scientific testing laboratory',
        text:     'Learn more about our green roof testing laboratory and rain simulator.',
        link:     'lab' // link to the page on our site, no /, just the page
      },
      {
        title:    'Collaboration',
        image:    'https://cdn.buttercms.com/2Z7KPDXpQH6korUDmVVV',
        alt:      'Green Roof Diagnostics research collaboration',
        text:     'Learn how we can work together to create greener cities through living infrastructure.',
        link:     'collaboration' // link to the page on our site, no /, just the page
      },
    ],
  },

  // lab page
  lab: {
    meta: {
      title:       'Green Roof Diagnostics Green Roof Research Facility',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/lab`,
      image:       'https://cdn.buttercms.com/gsn7nNVgTWCukcSakfLY',
      alt:        'Green Roof Diagnostics Green Roof Research Facility',
    },
    mainNav: {
      barLabel:    'Lab', // label in header
      burgerLabel: 'Research and Testing Laboratory',
      pageHeader:  'Welcome to our lab!',
      divHeader:   'Lab', // label on actual div
      id:     'lab', // this is the id of the div for scrolling purposes.
      link:   '/lab',
      priority: 3, // 3rd to go = last to go
    },
    // text at very top of page, just below title
    // this page is formatted as 2 columns, so use EXACTLY two paragraphs (array of 2 strings)
    textTop: [
      'This is the Green Roof Diagnostics laboratory and learning center. This world-class facility allows us to study the intricacies of green roof components and green roof profiles at a scale never seen before in our industry.',
      'The lab includes controlled and uncontrolled areas. The controlled "Rain Lab" is used for simulating a wide range of storm events at slopes ranging from dead flat to 2.5 percent. The uncontrolled areas include outdoor platforms and a weather station, used for monitoring runoff, evapotranspiration, and a range of weather phenomena. Read more below.',
    ],
    // images just below text at top of screen
    // url, alt tag, and caption for each
    // Try to keep captions similar lengths, around 60-100 characters.
    images: [
      {
        url: 'https://cdn.buttercms.com/V2srUe78SOaIGAYBiJQH',
        alt: 'green roof testing laboratory rainfall simulator',
        caption: 'Rain Lab and control room.',
      },
      {
        url: 'https://cdn.buttercms.com/sozv7a8qSySxObtW2fp0',
        alt: '80 square foot (7.4 square meter) green roof cassette in the rain lab (view from side)',
        caption: '80 square foot (7.4 square meter) green roof cassette in the rain lab.',
      },
      {
        url: 'https://cdn.buttercms.com/VRdP0aqTByzFN08ClRGH',
        alt: '80 square foot (7.4 square meter) green roof cassette in the rain lab (longitudinal view)',
        caption: '80 square foot (7.4 square meter) green roof cassette in the rain lab.',
      },
      {
        url: 'https://cdn.buttercms.com/MNcGoVzSTa2I7tOpQzRS',
        alt: 'overhead view of moveable green roof testing cassettes',
        caption: 'Between tests in the rain simulator, green roof cassettes grow outdoors. Each cassette is fully vegetated.',
      },
      {
        url: 'https://cdn.buttercms.com/uD1aRYV6SraXKk5DnJZx',
        alt: 'green roof media / green roof soil over mineral wool',
        caption: 'We are able to test any combination of components. Showing mineral wool assembly.',
      },
      {
        url: 'https://cdn.buttercms.com/rl3HzvS0Qo6RDDvmGHPe',
        alt: 'green roof drainage layer installation',
        caption: 'We are able to test any combination of components. Showing cup-type drainage layer installation.',
      },
      {
        url: 'https://cdn.buttercms.com/SiQ7oVArQ2ictZAnMEv4',
        alt: 'overhead view of stationary green roof testing platforms',
        caption: 'Outdoor, uncontrolled green roof platforms complement research in the rain lab.',
      },
      {
        url: 'https://cdn.buttercms.com/IdEFjOH2T6lsPzmvz4TQ',
        alt: 'view of stationary green roof testing platforms with rain laboratory in background',
        caption: 'Green roof platforms allow monitoring of stormwater performance and runoff water quality.',
      },
      {
        url: 'https://cdn.buttercms.com/E28DvPvlSpeOWmC2f0oJ',
        alt: 'weather station on roof of green roof testing laboratory',
        caption: 'Our weather station allows correlation between green roof observations and weather phenomena.',
      },
      {
        url: 'https://cdn.buttercms.com/90fdbmULQ8mcShKW6NZQ',
        alt: 'overhead view of green roof cassette to monitor plant health',
        caption: 'We track the vegetative health of each green roof platform and cassette throughout the year.',
      },
      {
        url: 'https://cdn.buttercms.com/XPf6MO2TQQalaS9FVkNj',
        alt: 'green roof platform testing compression',
        caption: 'We compact each green roof assembly to ensure tests most closely replicate actual field conditions.',
      },
      {
        url: 'https://cdn.buttercms.com/yj1zrZPtS8ifDb2XYgAY',
        alt: 'worker standing on green roof testing platform assembly',
        caption: 'Cold, winter days are a great time to change out platforms to test new profiles!',
      },
    ],
    // subheader below images, above text at bottom of page
    subheader: 'A few ways we believe our lab is special:',
    // text at the bottom of the page. This is formatted as two columns, and looks best when there are an EVEN number of paragraphs, and each paragraph is about the same length.
    // paragraphs display as
    /*  1  2
        3  4
        5  6  when wide, and 

        1
        2
        3
        4
        5
        6  when narrow  */
    textBottom: [
      'High precision. The Rain Lab is equipped with sensors to allow a full water balance of each run, i.e., we can measure any overspray or drips that land on the floor, so we know exactly how much was sprayed on the green roof. We test for high-intensity rainstorms, which inevitably produces overspray. Further, all green roof profiles are weighed continuously throughout the tests, which is far more precise than the more common (and less expensive) method of using soil moisture probes. This precision allows for full water balance calculations that allow us to measure minute phenomena such as evapotranspiration',
      'High volume. The Rain Lab, in particular, is equipped to produce a very high volume of tests. This is because each green roof cassette is placed in the lab for only a few hours during a simulated storm, allowing for multiple tests to be run per day. This rate of testing enables us to isolate variables and produce from one facility within a few years more accurate performance parameters than could be done in dozens of outdoor test sites over the course of decades. This speed is necessary for rapid improvement within the green roof industry.',
      'Large sample size. Green roofs are more complex than many other green infrastructure best management practices (BMPs) such as rain gardens. Much of this complexity is due to the thin nature of the green roof, and the interaction of multiple layers and edges. We do some universal small-scale testing (such as 150 mm (6 inches) diameter, or 300 mm square (1 square foot), but most of our testing is focused on a mid-range of 36 square feet (3.3 square meters) to 80 square feet (7.4 square meters) to lessen edge effects, and to provide intermediate data between micro-scale and full-sized rooftop installations.',
      'Quality and quantity. We believe a green roof is more than just a hydrologic tool, more than just a horticultural curiosity... more than the sum of its parts! This is why our studies include hydrology, soil biology, vegetative health, water quality, nutrient cycles, and more. We believe problem-solving is not complete until the solution is balanced, so we try to measure and evaluate all relevant criteria.',
      'Vegetated. Believe it or not, a lot of green roof hydrologic research does not include plants. We have observed plants having a measurable impact on hydrologic performance, and whenever possible, any tests we perform on green roof assemblies include vegetation.',
      'Modular and scalable. We can do a lot with one laboratory in one climate zone, but we are always looking for partners in other climate zones. Our lab, and accompanying custom monitoring and data analysis software is scalable. Contact us if you are interested in collaboration.',
    ],
  },

  // monitoring page
  monitoring: {
    meta: {
      title:       'Green Roof Diagnostics Green Roof Monitoring',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/monitoring`,
      image:       'https://cdn.buttercms.com/NAQcuySHRWKqssWLHTeO',
      alt:    'Green Roof Diagnostics Green Roof Monitoring',
    },
    mainNav: {
      barLabel:    'Monitoring', // label in header
      burgerLabel: 'Green Roof Monitoring',
      pageHeader:  'Green Roof Monitoring',
      divHeader:   'Monitoring', // label on actual div
      id:     'monitoring', // this is the id of the div for scrolling purposes.
      link:   '/monitoring',
      priority: 3, // 3rd to go = last to go
    },
    topText: [
      'This page shares some of Green Roof Diagnostic\'s monitoring of field performance of green roofs. Our facility has four platforms where we monitor a wide range of green roof conditions, including rainfall, runoff, retention, drainage, air temperatures, soil temperatures, and evapotranspiration.'
    ],
    teaserImage: 'https://cdn.buttercms.com/bVyPmiSGCeU1wdqvueGg',
    teaserAlt: 'screenshot of graph of green roof monitoring data',
    middleText: [
      'This page shows raw, unprocessed, un-analyzed data, and as such, this data is not suitable for any purpose other than just sharing some of our ongoing activities. But even before analyzing and filtering out errant measurements, some trends are very apparent.',
      'Monitoring of actual green roof performance is central to Green Roof Diagnostic\'s activities.  Outdoor platforms, exposed to the elements, provides necessary context for laboratory tests, and is a critical element in quantifying evapotranspiration.',
    ],
    videoTitle: 'Quick Green Roof Monitoring Tutorial',
    videoLink: '//www.youtube.com/embed/Fhg8DiRxGGw',
    videoText: [
      'Check out the video about our monitoring data.  We\'ll show you briefly what the platforms look like, how to search monitoring data on this page, and how to read the graphs.',
      'If you have any questions about this, please click "Contact Us" in the footer of this page.'
    ],
    searchTopHeader: 'Monitoring Search Console',
    searchTopText: [
      'To see actual monitoring data, select up to 3 events from the list below.  Then click the magnifying glass icon. A graph then appears over a full-screen, dark gray background (for visibility).',
      'Navigate to the next event, or prior event, by using the left and right arrows at the bottom of the graph.',
      'Check out the video above for more information!',
    ],
    // actual monitoring goes here
    faqHeader: 'Monitoring Data and Graphs FAQ',
    faq: [
      { 
        a: 'Most of the information below is in the video, if you\'d rather watch than read.',
        image: null,
      },
      { 
        q: 'What do these graphs show?',
        a: [
          'Above is a fairly typical example.  We currently have four (4) platforms, so there are five (5) lines on the screen: rain is solid blue, and the four other lines are runoff from the four (4) platforms.',
          'The X axis (horizontal axis) is time in an hourly timestep, from oldest (left) to more recent (right).',
          'The Y axes (vertical axes) are quantification.  The standard graph settings above show inches per increment, and decimal percent.  Inches per increment of the blue line is rain in inches per hour, and for the other lines it is runoff in inches per hour.  Decimal percent just means 0.2 is 20%, 0.5 is 50% and so on.  For more about this, see "What are the dots on the left margin of each graph?" below.',
          'Here is a plain English explanation of the graph above:  During this rainfall, there were two peaks, with the first peak at around 0.2 inches of rainfall per hour, and the second peak at around 0.40 inches per hour.  Throughout the rain event, the control roof produced runoff at a rate almost identical to rainfall rate.  The traditional green roof started off moist, with a VWC of about 22%, which is about 63% of its ASTM theoretical maximum saturation.  The other two green roofs started off rather wet, with VWC of about 47-50%, which is about 95-105% of their ASTM theoretical maximum saturation.',
          'The rather dry traditional green roof delayed initial runoff by approximately 2 hours, at which point runoff occurred at a rate approximately equivalent to rainfall, with peak runoff reduced by approximately 8%.  The other two green roof profiles delayed initial runoff by nearly as much, but reduced peak runoff rate by 22% and 37%.',
        ],
        image: 'https://cdn.buttercms.com/fnaVP8fQw2nQqSGHmjlo',
        alt: 'graph of green roof monitoring research',
      },
      { 
        q: 'How do I navigate these graphs?',
        a: 'See the example above. You can hover over any vertical line or data point to see numerical values at that point in time. The icons at left include some layer pre-sets to display other data points (such as temperature and evapotranspiration).  Use the left and right arrows to change events.  Exit the graph by clicking the X at top.',
        image: 'https://cdn.buttercms.com/Q4GGBbj6Rd6jkAvE8Tt9',
        alt: 'graph of green roof monitoring research',
      },
      { 
        q: 'What is an event?',
        a: [
          'See the selector list farther up on the page.  Each row in this selector list is a "rain event". We use the common definition of rain event, which begins when the first drop of rain falls, and which ends when no rainfall has occurred for at least 6 hours.  Unless you check the box "show only rain events", the graph will also show the period following a rain event, before the next event starts.  This "dry" period can be important for observing drainage after the rain stops.',
          'The graph above illustrates this concept.  The lefthand side of the graph is the rain event, distinguished by the presence of rain (the solid blue line).  The righthand side of the graph is the period after the rain event, distinguished by the absence of rain.  The rain event begins at the very far left of the graph, when the first drop of rainfall is detected.  The next rain event (#79 in this example) begins immediately after this graph, in this example on 11/8/2018 at 7AM.',
        ],
        image: 'https://cdn.buttercms.com/bVyPmiSGCeU1wdqvueGg',
        alt: 'graph of green roof monitoring research',
      },
      { 
        q: 'What is the significance of the event numbers?',
        a: 'Each event receives a sequential number.  Our event numbering system starts with #1 in late March 2018.  There is no significance beyond that.  Since rain events are very site specific, there is no universal numbering system for events.',
        image: null,
        alt: null,
      },
      { 
        q: 'What is the "peak in/sf/hr" column in the selectors?',
        a: 'That column indicates peak rainfall intensity per hour.  (Later we will add peak intensity per 6-minute period.)  This corresponds to the tallest peak of the blue line on the graphs.  Green roofs and soil absorb water more efficiently during lower-intensity rainfalls.  One of the things we are monitoring is which systems absorb water more efficiently during intense rainstorms.',
        image: null,
        alt: null,
      },
      { 
        q: 'What is the hrs column?',
        a: 'The hours column is the number of hours of the rain event.  These hours do not count the time between events.  In the example image 2 questions prior, the hours corresponds to the timespan between the far left edge of the graph and the vertical red line when rainfall stopped.',
        image: null,
        alt: null,
      },
      { 
        q: 'What are the dots on the left margin of each graph?',
        a: [
          'Each graph illustrates antecedent moisture conditions at the far left of the graph.  Antecedent conditions are just the conditions preceding the event.  These measurements let us know how wet or dry the green roof was before rain began, which is a major area of our research focus.  Specifically, we are studying which green roof systems continue to absorb (retain and/or detain) water even when substantially saturated.',
          'There are two sets of dots in the left margin.  The smaller, solid-center dots represent volumetric water content, i.e. the volume of the green roof profile that is occupied by water.  Depending on green roof profile, these measurements range from 0.1 (10%) to about 0.4 (40%), sometimes up to 0.6.',
          'The larger, open-center dots represent how saturated the profile is in contrast with the theoretical ASTM maximum saturated value. (We\'ve written a technical bulletin about these common ASTM tests.)  These numbers may be anywhere along the axis, but in most profiles the numbers range from 0.2 (20%) to 0.7 (70%) and in some profiles exceed 1.0 (>100%).',
          'In the example graph below, the platform C had an initial VWC of 16% (50% of that profile\'s ASTM maximum saturation, platform B had an initial VWC of 49% (104% of ASTM), platform B had an initial VWC of 41% (85% of ASTM).',
        ],
        image: null,
        alt: null,
      },
      { 
        q: 'Why do some of these events show almost nothing on the screen?',
        a: 'The monitoring data we show is raw, unfiltered, pre-analysis, and quite often a tiny rain event registers, which looks insignificant on the screen.  Rain events of less than 6mm or about 0.25 inches do not usually produce very interesting graphs. The image below shows a rain event of only 0.04 inches, which obviously remains a valid rain event, but which produces a rather empty looking graph. We usually learn the most from graphs of big storms!',
        image: 'https://cdn.buttercms.com/MTCgO8bkRzGVtO6RdwnR',
        alt: 'graph of green roof monitoring research',
      },
      { 
        q: 'Can I adjust the axes?',
        a: 'The Y axes of each graph are normalized so that each event is easily compared with other events.  However, sometimes this means that very large events exceed the screen, or very small events are hard to see.  Click the up-down arrow icon in the right margin to toggle the Y-axes to auto-fit.  Currently the X-axes are fixed, with only 2 options: include dry period after rain event, or exclude it.',
        image: null,
        alt: null,
      },
      { 
        q: 'What do you do with this data?',
        a: 'We use this data in a variety of ways, including quantifying evapotranspiration, parameterizing performance characteristics, confirming applicability of data from laboratory tests, observing performance in erratic weather, and observation of detention several hours or days after a rainstorm.',
        image: null,
        alt: null,
      },
      { 
        q: 'How often is this updated?',
        a: 'Every time it rains.  We collect monitoring data as frequently as every minute.  As soon as a new rain event starts, data from the prior event is automatically processed and posted to this page.  If this is really interesting to you, let us know, and we could potentially email you when a new graph is available.',
        image: null,
        alt: null,
      },
      { 
        q: 'How does this data differ from analyzed data?',
        a: 'During analysis we follow a standard scientific process of eliminating bad data points, identifying trend lines and margins of error.  Bad data points are usually due to equipment maintenance or malfunction.  Each graph lists a very brief summary of the event, and identifies things such as platform down for maintenance, etc.',
        image: null,
        alt: null,
      },
    ],
  },

  // collaboration page
  collab: {
    meta: {
      title:       'Green Roof Diagnostics Scientific and Research Collaboration',
      description: 'Green Roof Diagnostics provides unbiased, scientific research for the green infrastructure industry.',
      url:         `${thisUrl}/collaboration`,
      image:       'https://cdn.buttercms.com/Lv13JQCOROy1SDeugUoc',
      alt:    'Green Roof Diagnostics Scientific and Research Collaboration',
    },
    mainNav: {
      barLabel:    'Collaboration', // label in header
      burgerLabel: 'Collaboration',
      pageHeader:  'Collaboration',
      divHeader:   'Collaboration', // label on actual div
      id:     'collaboration', // this is the id of the div for scrolling purposes.
      link:   '/collaboration',
      priority: 3, // 3rd to go = last to go
    },
    // bold font, full-width subheader just below title
    subheader: 'We seek to change the green roof industry, by focusing on science and verifiable performance. We will not do this alone!',
    // normal-font, full-width text just below subheader.
    // we can do 1 paragraph or a few (keep it kinda short)
    textTop: [
      'Green Roof Diagnostics is an independent research organization. We strive to be objective and transparent in all our endeavors. We actively seek collaboration with like-minded organizations and individuals. There are a number of ways we can work together.',
    ],
    // full-width subheader above waysList. Keep short!
    waysHeader: 'Ways to work together',
    /* text about ways to work together. This is formatted as two columns, and looks best when there are an EVEN number of paragraphs, and each paragraph is about the same length.
    First sentence of each paragraph is bold, accent color.
        paragraphs display as
        1  2
        3  4
        5  6  when wide, and 

        1
        2
        3
        4
        5
        6  when narrow  */
    waysList: [
      'Commissioned testing. Are you a manufacturer or a consultant with an idea? Do you want to make sure it works? We provide confidential testing of products and assemblies. We specialize in innovative testing protocols that are not (yet) adopted by ASTM or others.',
      'Research assistance. Are you a public- or private-sector or university researcher? Could you use some help on particular research topics? We may be able to help.',
      'Research opportunities. We have a backlog of research questions that may overlap with questions posed by university researchers. We may be able to provide materials and/or facilities in exchange for research collaboration.',
      'On-site monitoring. We are always looking for opportunities to monitor full-scale green roof installations. Ideal candidates build upon the existing body of research, so contact us to see if your project is a good fit.',
      'Remediation- or renovation- consulting. Green roof renovation consulting projects allow us to better understand the cause of failures.',
      'And more. We aim to effect positive change on the green industry, and you may have opportunities to collaborate that we have not considered. Our team has over 100 years of experience in green roof design, construction, permitting, and associated hydrological and ecological issues, and we would like to put that expertise to good use for a greener future. Together.'
    ],
    // full-width, bold subheader
    boardHeader: 'Advisory Board',
    // SINGLE paragraph about the advisory board.  Keep text length proportionate to visual length of list of board members
    /* wide screen
       board intro     board list

       narrow screen
       board intro
       board list */
    boardIntro: [
      'GRD collaborates with industry leaders. We endeavor not only to improve knowledge and understanding of green roofs, but also the applied sciences of manufacturing, design, construction, and maintenance. As such, our advisory board is comprised of leaders who work or have worked in a range of capacities within the green industry.',
    ],
    // bulleted list of board members
    boardList: [
      {
        text: 'Charlie Miller, Founder of Roofmeadow',
        url: null,
      },
      {
        text: 'Peter Maybach, Soil Consultant at Brookside Laboratories',
        url: null,
      },
      // {
      //   text: 'Dr. Elizabeth Fassman-Beck, Professor at Stevens Institute of Technology',
      //   url: null,
      // }
    ],
    // full-width, bold subheader about our supporters / funders
    fundingHeader: 'Supporters',
    // full-width paragraph about our supporters / funders.
    // can be multiple paragraphs.
    fundingIntro: [
      'We think it is important to disclose how we work with our sponsors as part of demonstrating Green Roof Diagnositics\' objectivity.',
    ],
    // SINGLE paragraph or a few VERY SHORT pagraphs about our relationship with funders.  Keep text length proportionate to visual length of list of funders
    /* wide screen
       funders intro     funders list

       narrow screen
       funders intro
       funder list */
    fundersIntro: [
      'Green Roof Diagnostics is primarily funded by several companies within the green roof industry. These are progressive companies that want to effect change. We do not allow any funders or other third parties to introduce bias into our research. In exchange for funding general (versus specific) research, we may provide our partners with assistance in improving their product lines to incorporate our research and/or access to the research before the information is available to the public. This follows principles similar to the US patent system, which rewards the innovator before benefiting the general public or industry at large.',
    ],
    // bulleted list
    fundersList: [
      {
        text: 'Knauf Insulation',
        url: 'https://www.knaufinsulation.com/',
      },
      {
        text: 'Sempergreen',
        url: 'https://www.sempergreen.com/',
      },
      {
        text: 'Sempergreen USA',
        url: 'https://www.sempergreenusa.com/',
      },
      {
        text: 'American Hydrotech',
        url: 'https://www.hydrotechusa.com/',
      },
      {
        text: 'Uniseal',
        url: 'http://www.uniseal.com/',
      },
      {
        text: 'Next Level',
        url: 'https://www.nlsm.ca/',
      },
      {
        text: 'Stormwater Capture Co.',
        url: 'https://stormwatercaptureco.com/'
      },
    ],
    // trailing paragraph about supporters / funders
    fundOther: [
      'Green Roof Diagnostics is secondarily funded via commissioned research and other commissioned services.',
    ],
    bannerImage: 'https://cdn.buttercms.com/noU0OoVnSCKJfZaOaaGQ', // no alt
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

  // keep this so we know we are on a blank page
  // I forget how I used this... b ut it is for testing during development and should never go live...
  _blank: {
    header: 'THIS IS A BLANK PAGE!!!',
    text: '...better start writing!',
  }
};