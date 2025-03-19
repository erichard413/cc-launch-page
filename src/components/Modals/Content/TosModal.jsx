import "../../../styles/modals/TosModal.css";

export default function TosModal({ handleClose }) {
  return (
    <div className="TosModal modal-body">
      <h2>TERMS OF USE</h2>
      <h4>Convenient Cards Terms and Conditions of Use</h4>
      <p>
        Convenient Cards, Inc. (“CC”) provides the information and services on
        its Web site (the “Site”) under the following terms and conditions. By
        accessing and/or using the Site, you indicate your acceptance of these
        terms and conditions.
      </p>
      <ol>
        <li>
          <strong>LAWS AND REGULATIONS.</strong> Access to and use of this Site
          are subject to all applicable international, federal, state, and local
          laws and regulations. User agrees not to use the Site in any way that
          violates such laws or regulations.{" "}
        </li>
        <li>
          {" "}
          <strong>COPYRIGHT AND TRADEMARKS.</strong> The information available
          on or through the Site is the property of CC, or its licensors, and is
          protected by copyright, trademark, and other intellectual property
          laws. Users may not modify, copy, distribute, transmit, display,
          publish, sell, license, create derivative works, or otherwise use any
          information available on or through this Site for commercial or public
          purposes. Users may not use the trademarks, logos, and service marks
          (“Marks”) for any purpose including, but not limited to, use as “hot
          links” or meta tags in other pages or sites on the World Wide Web
          without the written permission of CC or such third party that may own
          the Mark.{" "}
        </li>
        <li>
          {" "}
          <strong>TAMPERING.</strong> User agrees not to modify, move, add to,
          delete, or otherwise tamper with the information contained in the
          Site. User also agrees not to decompile, reverse engineer,
          disassemble, or unlawfully use or reproduce any of the software,
          copyrighted or trademarked material, trade secrets, or other
          proprietary information contained in the Site.{" "}
        </li>
        <li>
          {" "}
          <strong>THIRD PARTY INFORMATION.</strong> Although CC monitors the
          information on the Site, some of the information may be supplied by
          independent third parties. While CC attempts to insure the accuracy of
          all information on the Site, CC makes no warranty as to the accuracy
          of any such information.{" "}
        </li>
        <li>
          {" "}
          <strong>LINKS TO THIRD PARTY SITES.</strong> This Site may contain
          links that will let you access other Web sites that are not under the
          control of CC. The links are only provided as a convenience, and CC
          does not endorse any of these sites. CC assumes no responsibility or
          liability for any material that may be accessed on other Web sites
          reached through this Site, nor does CC make any representation
          regarding the quality of any product or service contained at any such
          site.{" "}
        </li>
        <li>
          {" "}
          <strong>LINKS FROM THIRD PARTY SITES.</strong> CC prohibits
          unauthorized links to the Site and the framing of any information
          contained on the site or any portion of the Site. CC reserves the
          right to disable any unauthorized links or frames. CC has no
          responsibility or liability for any material on other Web sites that
          may contain links to this Site.{" "}
        </li>
        <li>
          {" "}
          <strong>NO WARRANTIES.</strong> Information and documents provided on
          this Site are provided “as is” without warranty of any kind, either
          express or implied, including without limitation warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. CC uses reasonable efforts to include accurate and
          up-to-date information on this Site; it does not, however, make any
          warranties or representations as to its accuracy or completeness. CC
          periodically adds, changes, improves, or updates the information and
          documents on this Site without notice. CC assumes no liability or
          responsibility for any errors or omissions in the content of this
          Site. Your use of this Site is at your own risk.{" "}
        </li>
        <li>
          {" "}
          <strong>LIMITATION OF LIABILITY.</strong> UNDER NO CIRCUMSTANCES SHALL
          CERIDIAN PAYMENT SOLUTIONS BE LIABLE FOR ANY DAMAGES SUFFERED BY YOU,
          INCLUDING ANY INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES (INCLUDING,
          WITHOUT LIMITATION, ANY LOST PROFITS OR DAMAGES FOR BUSINESS
          INTERRUPTION, LOSS OF INFORMATION, PROGRAMS, OR OTHER DATA) THAT
          RESULT FROM ACCESS TO, USE OF, OR INABILITY TO USE THIS SITE OR DUE TO
          ANY BREACH OF SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION
          THROUGH THE INTERNET, EVEN IF CERIDIAN PAYMENT SOLUTIONS WAS ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES.{" "}
        </li>
        <li>
          {" "}
          <strong>PRIVACY.</strong> Protecting the privacy of our clients and
          users of our Sites is important to CC. The CC Privacy Policy describes
          how we use and protect information you may provide to us.{" "}
        </li>
        <li>
          {" "}
          <strong>SECURITY.</strong> CC uses physical, electronic, and
          operational safeguards designed to reduce the risk of unauthorized
          access to User's personally identifiable information. However, no data
          transmission over the Internet can be guaranteed to be 100% secure.
          While CC strives to protect personally identifiable information, it
          cannot warrant the security of the personally identifiable information
          transmitted to or received by CC. CC may provide links to external Web
          sites for User's convenience. CC has no control over the security or
          privacy practices of these sites. If User has questions regarding a
          Web site's practices, please review the site's privacy policy.{" "}
        </li>
        <li>
          {" "}
          <strong>TRANSMISSION OF PERSONAL DATA.</strong> User acknowledges and
          agrees that by providing CC with any personally identifiable
          information through the Site, User consents to the transmission of
          such personally identifiable information over international borders as
          necessary for processing in accordance with CC's standard business
          practices and the CC Privacy Policy.{" "}
        </li>
        <li>
          {" "}
          <strong>ACCESS TO PASSWORD PROTECTED/SECURE AREAS.</strong> Access to
          and use of password protected and/or secure areas of the Site is
          restricted to authorized users only. Unauthorized access to such areas
          is prohibited and may lead to criminal prosecution.{" "}
        </li>
        <li>
          {" "}
          <strong>JURISDICTION/GOVERNING LAW.</strong> These terms and
          conditions shall be governed and construed in accordance with the laws
          of the Commonwealth of Massachusetts, USA, and applicable federal laws
          without regard to conflicts of law principles. User agrees that any
          and all proceedings relating to this site and the subject matter
          contained herein shall be maintained in the courts of the Commonwealth
          of Massachusetts or the federal district courts sitting in
          Massachusetts, which courts shall have exclusive jurisdiction for such
          purpose.{" "}
        </li>
        <li>
          <strong>CHANGES TO THIS POLICY.</strong> Any changes to this policy
          will be posted at this location and will take effect immediately after
          they are posted.
        </li>
      </ol>
      <p>
        <strong>EFFECTIVE DATE:</strong> June 20, 2010
      </p>

      <div className="modal-btns">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
