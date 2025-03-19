import "../../../styles/modals/ComparingProductsModal.css";
import access from "../../../assets/AccessCard.png";
import incentive from "../../../assets/IncentiveCard.png";
import gift from "../../../assets/GiftCard.png";
import "../../../styles/modals/SolutionsModal.css";

export default function SolutionGuideModal({ handleClose }) {
  return (
    <div className="modal-body SolutionsModal ComparingProductsModal">
      <h3>Selecting a Card</h3>
      <table>
        <thead>
          <tr>
            <th>Customer Need</th>
            <th colspan="2">Product</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="bold-text">
              Gifts for birthdays, holidays, weddings, graduations, etc.
            </td>
            <td>Convenient Visa Gift Card</td>
            <td>
              <img src={gift} alt="Gift Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">Secure spending money while traveling</td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              A cash alternative for students on a trip
            </td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              Banking services for customers that don't qualify for traditional
              checking accounts
            </td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              A way to provide college students with spending money away from
              home
            </td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              An easy way to budget money for groceries, school shopping or
              holiday gift purchases
            </td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">Direct deposit for unbanked customers</td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              To use for online purchases to shield customer bank accounts from
              fraud
            </td>
            <td>Convenient Access Visa Prepaid Card</td>
            <td>
              <img src={access} alt="Access Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              A business looking to offer incentives to their customers during a
              promotion
            </td>
            <td>Convenient Visa Incentive Card</td>
            <td>
              <img src={incentive} alt="Incentive Card Image" />
            </td>
          </tr>
          <tr>
            <td className="bold-text">
              A business looking to reward employees for exceeding sales goals
            </td>
            <td>Convenient Visa Incentive Card</td>
            <td>
              <img src={incentive} alt="Access Card Image" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="modal-btns">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
