import Link               from 'next/link';
import PrivacyModal       from './modal';
import content            from '../../helpers/content';
import { 
  pageContent, 
  pageTitle, 
  pageContentInner, 
  accentFontColor,
  fontReading,
  accentFontColorHover}   from '../../helpers/common-styles';

export default props => {

  const toggleModal = typeof props.toggleModal === 'function' ? props.toggleModal : ()=>{} ;

  const removeAllCookies = () => {
    window.localStorage.clear();
    const res = document.cookie;
    const multiple = res.split(";");
    for(let i = 0; i < multiple.length; i++) {
      const key = multiple[i].split("=");
      document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
    toggleModal();
  }

  const privacy = content.privacy || {} ;
  const theCompany = privacy.theCompany;
  const thisUrl = privacy.thisUrl;
  const thisDomain = privacy.thisDomain;
  const modalContent = <PrivacyModal 
    message={privacy.deleteMessage} 
    removeAllCookies={removeAllCookies}/>

  return <div className='content'>
      <h1 className='title'>
        {privacy.header}
      </h1>
      <div className='content-inner'>

        <p>Effective date: January 11, 2019</p>

        <p>{theCompany} ("us", "we", or "our") operates the {thisDomain} website (hereinafter referred to as the "Service").</p>

        <p>This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

        <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from {thisDomain}</p>

        <h2>Definitions</h2>
        <ul>
          <li>
            <p><strong>Service</strong></p>
            <p>Service is the {thisDomain} website operated by {theCompany}</p>
          </li>
          <li>
            <p><strong>Personal Data</strong></p>
            <p>Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
          </li>
          <li>
            <p><strong>Usage Data</strong></p>
            <p>Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
          </li>
          <li>
            <p><strong>Cookies</strong></p>
            <p>Cookies are small files stored on your device (computer or mobile device).</p>
          </li>
          <li>
            <p><strong>Data Controller</strong></p>
            <p>Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p>
            <p>For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>
          </li>
          <li>
            <p><strong>Data Processors (or Service Providers)</strong></p>
            <p>Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller.</p>
            <p>We may use the services of various Service Providers in order to process your data more effectively.</p>
          </li>
          <li>
            <p><strong>Data Subject (or User)</strong></p>
            <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
          </li>
        </ul>

        <h2>Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

        <h3>Types of Data Collected</h3>

        <h4>Personal Data</h4>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

        <ul>
          <li>Cookies and Usage Data</li>
        </ul>

        <h4>Usage Data</h4>

        <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

        <h4>Tracking &amp; Cookies Data</h4>
        <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
        <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.</p>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
          <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
          <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
        </ul>

        <p>Specific Cookie Implementation:</p>

        <ul>
          <li><strong>Essential Cookies.</strong> We use the following essential cookies to track your privacy preferences. These cookies are stored in HTML5 localStorage of your browser.
            <ul>
              <li className='indented-li'><strong>consented:</strong> This cookie does not exist or possesses a false value if the user has not provided a response to the site's cookie consent banner.  When the user responds to the cookie consent banner, this cookie records the date of response, so that consent expires after a given timeframe, as required by law.</li>
              <li className='indented-li'><strong>userHistory:</strong> This cookie is set when the user responds to the cookie consent banner. This cookie contains a value of true if the user has agreed to "user experience" in the cookie consent banner.  Consent to this cookie allows the site to store within the user's browser how the user has used the site.  Benefits of consenting to this cookie include that the browser remembers which content the user has already used or viewed, and may therefore improve the user's experience.</li>
              <li className='indented-li'><strong>userStats:</strong> This cookie is set when the user responds to the cookie consent banner.  This cookie contains a value of ture if the user has agreed "user statistics" in the cookie consent banner.  If this cookie is set to true, Google Analytics will include potentially identifiable user information, such as the user's IP address.  If this cookie is set to false, Google Analytics will anonymize the user's IP address and remove the user's unique Gooogle-assigned id.  The benefit of agreeing to this cookie is that {theCompany} is better able to identify repeat visitors versus first-time visitors.</li>
            </ul>
          </li>
          <li className='indented-li'><strong>Changing Preferences.</strong> The user may visit "Privacy Settings" within the footer of any page at {thisDomain}to change privacy settings. If the user wishes to remove all cookies from {thisDomain}, the user may click <span className='remove' onClick={()=>toggleModal(modalContent)}>here</span>; note that this action will remove all historical cookies, but only historical cookies.</li>
        </ul>
        
        <h2>Use of Data</h2> 
        <p>{theCompany} uses the collected data for various purposes:</p>    
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
          
        <h2>Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)</h2>
        <p>If you are from the European Economic Area (EEA), {theCompany} legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.</p>
        <p>{theCompany} may process your Personal Data because:</p>
        <ul>
          <li>We need to perform a contract with you</li>
          <li>You have given us permission to do so</li>
          <li>The processing is in our legitimate interests and it is not overridden by your rights</li>
          <li>To comply with the law</li>
        </ul>

            
        <h2>Retention of Data</h2>    
        <p>{theCompany} will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
        <p>{theCompany} will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>    

        <h2>Transfer of Data</h2>
        <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
        <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
        <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <p>{theCompany} will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

        <h2>Disclosure of Data</h2>
        <h3>Business Transaction</h3>
        <p>If {theCompany} is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>    

        <h3>Disclosure for Law Enforcement</h3>
        <p>Under certain circumstances, {theCompany} may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

        <h3>Legal Requirements</h3>
        <p>{theCompany} may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of {theCompany}</li>
          <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>To protect the personal safety of users of the Service or the public</li>
          <li>To protect against legal liability</li>
        </ul>

        <h2>Security of Data</h2>
        <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

        <h2>Your Data Protection Rights under the General Data Protection Regulation (GDPR)</h2>
        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. {theCompany} aims to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data.</p>
        <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
        <p>In certain circumstances, you have the following data protection rights:</p>
        <ul>
          <li>
            <p><strong>The right to access, update or delete the information we have on you.</strong> Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.</p>
          </li>
          <li>
            <p><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</p>
          </li> 
          <li>
            <p><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</p>
          </li>
          <li>
            <p><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</p>
          </li>
          <li>
            <p><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</p>
          </li>
          <li>
            <p><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where {theCompany} relied on your consent to process your personal information.</p>
          </li>
        </ul>
        <p>Please note that we may ask you to verify your identity before responding to such requests.</p>

        <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>

        <h2>Service Providers</h2>
        <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
        <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

        <h3>Analytics</h3>
        <p>We may use third-party Service Providers to monitor and analyse the use of our Service.</p>    
        <ul>
          <li>
            <p><strong>Google Analytics</strong></p>
            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
            <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p>
            <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy?hl=en" target="_blank">https://policies.google.com/privacy?hl=en</a></p>
          </li>
        </ul>

        <h2>Links to Other Sites</h2>
        <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

        <h2>Children's Privacy</h2>
        <p>Our Service does not address anyone under the age of 18 ("Children").</p>
        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>


        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>By visiting this page on our website: <Link href='/contact'>{`${thisUrl}/contact`}</Link></li>    
        </ul>
      </div>    
    <style jsx>{`
    .content {
      ${pageContent}
      width: 100vw;
    }
    .content-inner {
      ${pageContentInner}
      margin-bottom: 50px;
      ${fontReading}
    }
    .title {
      ${pageTitle}
    }
    ul, li {
      list-style-type: circle;
    }
    h2 {
      margin-top: 25px;
      font-size: 24px;
    }
    h3 {
      margin-top: 15px;
      font-size: 21px;
    }
    h4 {
      margin-top: 12px;
      font-size: 18px;
    }
    p, ul, .indented-li {
      margin-top: 10px;
      ${fontReading}
    }
    ul {
      margin-left: 15px;
      ${fontReading}
    }
    li {
      margin-left: 20px;
      ${fontReading}
    }
    strong {
      font-weight: bold;
    }
    a {
      color: ${accentFontColor};
      ${fontReading}
    }
    a:hover {
      color: ${accentFontColorHover};
    }
    .remove {
      font-weight: bold;
      color: ${accentFontColor};
      ${fontReading}
    }
    .remove:hover {
      color: ${accentFontColorHover};
    }
    `}</style>
  </div>

  }