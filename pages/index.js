import React           from 'react';
import Frame           from '../components/_general/_frame';
import Modal           from '../components/_general/modal';
import content         from '../helpers/content';
import { 
  fireNewPageView }    from '../helpers/tag-manager';
import Intro           from '../components/home/intro';
import Landing         from '../components/home/landing';
import ProductContent  from '../components/home/product-content';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal:        false,
      modalContent: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
    fireNewPageView();
  }

  toggleModal(modalContent) {
    this.setState({
      modal: !this.state.modal,
      modalContent,
    });
  }

  render() {
    const modal = !this.state.modal ? null :
      <Modal
        toggleModal={this.toggleModal}
        content={this.state.modalContent}/> ;

    return <Frame 
      hideHeader={true} 
      meta={content.index.meta}
      toggleModal={this.toggleModal} >
      <Landing />
      <Intro />
      <ProductContent
        toggleModal={this.toggleModal}/>
      {modal}
    </Frame>
  }

};