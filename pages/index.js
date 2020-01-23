import React           from 'react';
import Frame           from '../components/_frame';
import Landing         from '../components/home/landing';
import ProductContent  from '../components/home/product-content';
import content         from '../helpers/content';
import { 
  fireNewPageView }    from '../helpers/tag-manager';
import Intro           from '../components/home/intro';
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

    return <Frame 
      hideHeader={true} 
      meta={content.index.meta}
      toggleModal={this.toggleModal} >
      <Landing />
      <Intro />
      <Concepts/>
      <PartnerLogos/>
      <ProductContent/>
    </Frame>
  }

};