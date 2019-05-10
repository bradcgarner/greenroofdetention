import content       from '../../helpers/content';
import { 
  pubTitle, 
  pubContentInner, 
  hotButton,
  hotButtonHover,
  pageContent,
  disabledButtonColor,
  red} from '../../helpers/common-styles';
import ContactModal       from './modal';
import { detect } from 'detect-browser';

export default class ContactContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:  '',
      email: '',
      tel:   '',
      msg:   '',
      site: 'greenroofdiagnostics.com',
    };
  }

  handleChange(e,key){
    const value = e.target.value !== 'undefined' ? e.target.value : '' ;
    this.setState({
      [key]: value,
    });
  }

  submitForm(){
    event.preventDefault();
    const url = `${process.env.INQ_URL}/api/inquiries`
    const headers = {
      'Content-Type': 'application/json',
    };
    const init = {
      method: 'POST',
      headers,
      body: JSON.stringify(this.state),
    }
    fetch(url, init)
    .then(()=>{
      const modalContent = <ContactModal success={true}/>
      this.props.toggleModal(modalContent);
      return;
    })
    .then(()=>{
      this.setState({
        name:  '',
        email: '',
        tel:   '',
        msg:   '',
      });
    })
    .catch(err=>{
      const modalContent = <ContactModal success={false}/>
      this.props.toggleModal(modalContent);
      console.error(err);
    })
  }

  render(){

    const formWidth = 400;
    const formWidth2 = 300;
    const bp = 500;
      
    const submitEnabled = this.state.email && this.state.name && this.state.msg;
    const submitDisabledClass = submitEnabled ? '' : 'disabled' ;
    
    const browser = detect();
    const b_name = browser.name;
    const os = browser.os;

    const knownAutoCompleteWarning = b_name === 'crios' && os === 'iOS' ?
    <div className='warning-container'>
      <p className='warning'>We are very sorry, but autocomplete may be buggy on this form in Chrome on iOS.  This is a problem between React.js and Google Chrome.</p>
      <p className='warning'>Suggested fix: Manually type, or after using autocomplete change 1 character per field. Thanks for your patience.</p>
      <style jsx>{`
        .warning-container {
          flex-direction: column;
          margin-left: ${formWidth2*0.25}px;
        }
        @media(min-width: ${bp}px){
          .warning-container {
            margin-left: ${formWidth*0.25}px;
          }
        }
        .warning {
          text-align: center;
          margin-bottom: 10px;
          font-style: italic;
          color: #893049;
        }
      `}</style>
    </div> : null ;

    const c = content.contact || {} ;
    const nav = c.mainNav || {} ;
    const placeholders = c.placeholders || {} ;

    return <div className='content'>
      <div className='background-image'></div>
      <h1 className='title'>{nav.pageHeader}</h1>
      <div className='content-inner'>
        <form className='contact-form'
          onSubmit={()=>this.submitForm()}>
          <label className='input-label'>
            name
            <input
              type='text'
              value={this.state.name}
              className='input'
              onChange={e=>this.handleChange(e,'name')}
              placeholder={placeholders.name}
              required /> 
          </label>
          <label className='input-label'>
            email
            <input
              type='email'
              value={this.state.email}
              className='input'
              onChange={e=>this.handleChange(e,'email')}
              placeholder={placeholders.email}
              required /> 
          </label>
          <label className='input-label'>
            phone
            <input
              type='text'
              value={this.state.tel}
              className='input'
              onChange={e=>this.handleChange(e,'tel')}
              placeholder={placeholders.tel} /> 
          </label>
          <label className='input-label input-label-textarea'>
            message
            <textarea
              value={this.state.msg}
              className='input input-textarea'
              onChange={e=>this.handleChange(e,'msg')}
              placeholder={placeholders.msg}
              required />
          </label>
          <div className='button-container'>
            <button type='submit' className={`submit-button ${submitDisabledClass}`}>
              {c.submitButton}
            </button>
          </div>
          {knownAutoCompleteWarning}
        </form>
      </div>    
      <style jsx>{`
      .content {
        ${pageContent}
        width: 80vw;
      }
      @media(min-width: ${bp}px){
        .content {
          width: 100vw;
        }
      }
      .content-inner {
        ${pubContentInner}
        align-items: center;
      }
      .title {
        ${pubTitle}
        color: white;
        margin-bottom: 20px;
      }
      .contact-form {
        display: flex;
        flex-direction: column;
        margin-left: -${formWidth2*0.25}px;
        width: ${formWidth2}px;
      }
      @media(min-width: ${bp}px){
        .contact-form {
          margin-left: -${formWidth*0.25}px;
          width: ${formWidth}px;
        }
      }
      .input-label {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        color: white;
      }
      .input:focus,
      .input {
        font-size: 16px; /* iOS zooms if smaller than 16px */
        margin-top: -6px;
        padding: 4px;
        flex-grow: 0;
        margin-left: 5px;
        border: 1px solid ${red};
        width: 75%;
      }
      .input-textarea {
        height: 300px;
      }
      .button-container {
        width: 100%;
        justify-content: flex-end;
      }
      .submit-button {
        ${hotButton}
        width: 75%;
        height: 45px;
      }
      .submit-button:hover {
        ${hotButtonHover}
      }
      .disabled, 
      .disabled:hover {
        background-color: ${disabledButtonColor};
      }
      .background-image {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url(${content.contact.backgroundImage});
        background-attachment: fixed;
        background-size: cover;
        z-index: -999;
      }
      `}</style>
    </div>
  }
  
}