import React           from 'react';
import Frame           from '../components/_frame';
import Landing         from '../components/home/landing';
import ProductContent  from '../components/home/product-content';
import content         from '../helpers/content';
import { 
  fireNewPageView }    from '../helpers/tag-manager';
import Intro           from '../components/home/intro';
import Bottom          from '../components/home/bottom';
import PartnerLogos    from '../components/home/partner-logos';
import Concepts        from '../components/home/concepts';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    fireNewPageView();
  }

  render() {

    const intro = content.intro || {};

    return <Frame 
      hideHeader={true} 
      meta={content.index.meta}
      toggleModal={this.toggleModal} >
      <Landing />
      <Intro
       h1={intro[0].h}
       p1={intro[0].p}
       h2={intro[1].h}
       p2={intro[1].p} />
      <Intro
       h1={intro[2].h}
       p1={intro[2].p}
       h2={intro[3].h}
       p2={intro[3].p} />
      <Intro
       h1={intro[4].h}
       p1={intro[4].p}
       h2={intro[5].h}
       p2={intro[5].p} />
      <Intro
       h1={intro[6].h}
       p1={intro[6].p}
       h2={intro[7].h}
       p2={intro[7].p} />
      <Intro
       h1={intro[8].h}
       p1={intro[8].p}
       h2={intro[9].h}
       p2={intro[9].p} />
      <Concepts/>
      <PartnerLogos/>
      <ProductContent/>
      <Bottom />
    </Frame>
  }

};