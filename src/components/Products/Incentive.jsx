import incentivecard from "../../assets/IncentiveCard.png";
import { Link } from "react-router-dom";

export default function Incentive() {
  return (
    <div className="AccessCardPage">
      <div className="access-content-left">
        <div className="product-img-div">
          <img src={incentivecard} alt="incentive card" />
        </div>
        <h2>Convenient Visa Incentive Card</h2>
        <p>
          The Convenient Visa® Incentive Card is a single-load reward card
          designed for business customers.
        </p>
        <span className="mini-header">Get the Most from Your Rewards</span>
        <ul>
          <li>
            Employee Rewards - sales contests, appreciation for a job well done
          </li>
          <li>
            Incentives for Partners - sales & referral rewards, performance
            incentives
          </li>
          <li>Loyalty Rewards - promote customer loyalty</li>
        </ul>

        <table>
          <thead>
            <tr>
              <th colSpan="2">Using the Convenient Visa Incentive Card</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loading</td>
              <td>
                Load the card at the financial institution up to $750. For large
                orders Convenient Cards can load them.
              </td>
            </tr>
            <tr>
              <td>Purchases</td>
              <td>
                The Incentive Card can be used wherever Visa debit cards are
                accepted, around the world. It works just like any other prepaid
                card. This includes grocery stores, the mall, gas stations,
                restaurants and more.
              </td>
            </tr>
            <tr>
              <td>Cash</td>
              <td>
                The Convenient Visa Incentive Card does not provide cash access.
              </td>
            </tr>
            <tr>
              <td>Online</td>
              <td>
                Cardholders can make purchases online. Users must first register
                their card in their name and address in order to do so. Cards
                can be registered by following the instructions{" "}
                <Link
                  to="http://www.convenientcards.com/register"
                  target="_blank"
                >
                  here
                </Link>
                .
              </td>
            </tr>
            <tr>
              <td>Alerts</td>
              <td>
                Set up text and email alerts to notify you when transaction
                parameters are met and when the card balance is low.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
