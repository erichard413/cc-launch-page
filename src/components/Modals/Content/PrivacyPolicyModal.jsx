import "../../../styles/modals/PrivacyPolicyModal.css";

export default function PrivacyPolicyModal({ handleClose }) {
  return (
    <div className="PrivacyPolicyModal modal-body">
      <h2>PRIVACY POLICY</h2>
      <p>
        This overview represents our basic philosophy with regard to our
        information gathering and dissemination practices. Convenient Cards,
        Inc. (“CC”) Privacy Statement:
        <br />
        <br />
        CC has created this privacy statement ("Statement") in order to
        demonstrate our commitment to customer privacy. Privacy on the CC
        website (the "Site") is of great importance to us. Because we gather
        important information from our visitors and customers, we have
        established this Statement as a means to communicate our information
        gathering and dissemination practices. We reserve the right to change
        this Statement and will provide reasonable notice to our customers and
        other registered users of the Site of the change prior to the change
        taking effect. Any revision to this Statement will be effective upon our
        posting of the revision on the Site.
        <h4>Collected Information:</h4>
        In general, you can browse the website without telling us who you are or
        revealing any personal information about yourself. At the time you
        express interest in receiving additional information, we may also ask
        for additional personal information, such as title, department name, fax
        number, or additional company information, such as annual revenues,
        number of employees, or industry. Customers can opt out of providing
        this additional information by not entering it when asked.
        <br />
        <br />
        CC uses the information that we collect to contact customers to further
        discuss customer interest in our company, the services that we provide,
        and to send information regarding our company or partners, such as
        promotions and events. Customers are invited to receive an email
        newsletter by providing an email address. Customer email addresses and
        any personal customer information will not be distributed or shared with
        third parties. Customers can opt out of being contacted by us, or
        receiving such information from us, at any time by sending an email to
        opt-out@convenientcards.com. We may also email information regarding
        udates to the services or company, and will send a Customer Newsletter.
        Again, email addresses will not be distributed or shared and customers
        can opt out of receiving any communication by emailing
        opt-out@convenientcards.com at the time it is distributed.
        <br />
        <br />
        Except as we explicitly state at the time we request information, we do
        not disclose to third parties the information provided unless required
        to do so by laws, regulations or other legal requests for such
        information.
        <br />
        <br />
        CC may also track and analyze non-identifying and aggregate usage and
        volume statistical information from our visitors.
        <h4>Security:</h4> We use procedural and technical safeguards to protect
        your personal information against a loss or theft as well as
        unauthorized access and disclosure, including “firewalls” and Secure
        Socket Layers. ALTHOUGH WE EMPLOY MANY DIFFERENT SECURITY TECHNIQUES TO
        PROTECT SUCH DATA FROM UNAUTHORIZED ACCESS BY USERS, ABSOLUTE SECURITY
        DOES NOT EXIST ON THE INTERNET.
        <h4>Third Party Sites:</h4> The Site contains links to other websites.
        CC is not responsible for the privacy practices or the content of these
        other web sites. Customers and visitors will need to check the policy
        statement of these others websites to understand their policies.
        Customers and visitors who access a linked site may be disclosing their
        private information. It is the responsibility of the user to keep such
        information private and confidential.
        <h4>Additional Information:</h4>
        Questions regarding this Statement or the practices of this Site should
        be directed to CC by e-mailing such questions to
        support@ConvenientCards.com.
      </p>
      <div className="modal-btns">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
