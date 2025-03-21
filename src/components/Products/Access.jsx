import accesscard from "../../assets/AccessCard.png";

export default function Access() {
  return (
    <div className="AccessCardPage">
      <div className="access-content-left">
        <div className="product-img-div">
          <img src={accesscard} alt="access card" />
        </div>
        <h2>Convenient Access Visa Prepaid Card</h2>
        <p>
          The Convenient Access Visa® Prepaid Card is a general purpose
          reloadable prepaid card with hundreds of applications.
        </p>
        <span className="mini-header">
          Second Chance Account for the Unbanked
        </span>
        <ul>
          <li>
            Ideal for consumers that don't qualify for (or choose not to open)
            traditional checking accounts
          </li>
          <li>No credit check required</li>
          <li>All that is needed is a valid Social Security Number</li>
        </ul>
        <span className="mini-header">Stick to a Budget</span>
        <ul>
          <li>Perfect way to budget/limit discretionary spending</li>
          <li>Load spending money onto the Access Card on pay day</li>
          <li>
            Limit spending to funds on card...don't let cash burn a hole in your
            pocket
          </li>
        </ul>
        <span className="mini-header">College Student Spending</span>
        <ul>
          <li>
            Great way to provide budgeted spending money to students away at
            school
          </li>
          <li>Load funds for student when needed</li>
          <li>Avoid credit cards that can build a burden of debt</li>
        </ul>
        <span className="mini-header">Teen Card</span>
        <ul>
          <li>
            An ideal way for responsible teens to learn the basics of a banking
            relationship
          </li>
          <li>
            Because the Access Card is prepaid, there is no risk of overspending
          </li>
          <li>
            Teaches responsible spending and avoids overdraft fees and damaging
            credit
          </li>
        </ul>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Using the Convenient Access Visa Card</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loading</td>
              <td>
                Load the card at the financial instiution or transfer from your
                bank account up to $5,000 per month. Load via direct deposit up
                to the maximum card balance of $10,000.
              </td>
            </tr>
            <tr>
              <td>Purchases</td>
              <td>
                The Access Card can be used wherever VISA debit cards are
                accepted, around the world. It works just like any other prepaid
                card. This includes grocery stores, the mall, gas stations,
                restaurants, and more.
              </td>
            </tr>
            <tr>
              <td>Cash</td>
              <td>
                Sometimes, cash is just easier. No problem. Cardholders can
                withdraw cash at ATM machines that carry the Cirrus or Pulse
                acceptance marks, anywhere around the globe. Cardholders should
                read the Cardholder Agreement sent with the card to understand
                any fees that may apply. The owner of the ATM machine may also
                charge a fee, and that will be disclosed on the screen during
                the transaction. Cardholders can also visit participating
                financial institutions and request a cash advance from a bank
                teller.
              </td>
            </tr>
            <tr>
              <td>Online</td>
              <td>
                The Access Card can be used to make purchases online like any
                traditional credit/debit card. When asked for the CVV code,
                that's the three digit number on the back of the card.
              </td>
            </tr>
            <tr>
              <td>Bill Pay</td>
              <td>
                By creating an account at www.convenientcards.com, cardholders
                can pay all their bills from one spot. They'll set up their
                payees one time, and then pay what they want when they want.
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
