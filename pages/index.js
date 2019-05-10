import React           from 'react';
import Frame           from '../components/_frame';
import Landing         from '../components/home/landing';
import HomeContentList from '../components/home/content-list';
import HomeTeamList    from '../components/home/team-list';
import HomeMission     from '../components/home/mission';
import Modal           from '../components/modal';
import content         from '../helpers/content';
import HomeResearch    from '../components/home/research';
import { 
  fireNewPageView }    from '../helpers/tag-manager';


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
      <Landing         />
      <HomeContentList toggleModal ={this.toggleModal}/>
      <HomeTeamList    toggleModal ={this.toggleModal}/>
      <HomeMission     toggleModal ={this.toggleModal}/>
      <HomeResearch />
      {modal}
    </Frame>
  }

};