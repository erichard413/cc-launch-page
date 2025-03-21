import giftcard from "../../assets/GiftCard.png";
import { Link } from "react-router-dom";

export default function Gift() {
  return (
    <div className="AccessCardPage">
      <div className="access-content-left">
        <div className="product-img-div">
          <img src={giftcard} alt="gift card" />
        </div>
        <h2>Convenient Visa Gift Card</h2>
        <p>
          The Convenient Visa® Gift Card is a single load card that is the
          perfect gift for any occasion.
        </p>
        <span className="mini-header">
          Perfect for Any Gift Giving Occasion
        </span>
        <ul>
          <li>Christmas and Chanukah</li>
          <li>Graduations</li>
          <li>Weddings and wedding showers</li>
          <li>Baby showers</li>
          <li>Just because...</li>
        </ul>

        <table>
          <thead>
            <tr>
              <th colSpan="2">Using the Convenient Visa Gift Card</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loading</td>
              <td>Load the card at the financial institution up to $500.</td>
            </tr>
            <tr>
              <td>Purchases</td>
              <td>
                The Gift Card can be used wherever Visa debit cards are
                accepted, around the world. It works just like any other prepaid
                card. This includes grocery stores, the mall, gas stations,
                restaurants and more.
              </td>
            </tr>
            <tr>
              <td>Cash</td>
              <td>
                The Convenient Visa Gift Card does not provide cash access.
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
