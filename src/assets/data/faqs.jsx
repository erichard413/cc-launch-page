const questions = {
  access: [
    {
      id: 1,
      q: "Where to load the Access Card?",
      a: (
        <p>
          Cards can be loaded three ways. The quickest and easiest way is to
          load the card at the financial institution where the card was
          purchased. Alternatively the card can be loaded through direct deposit
          set up with an employer or by creating an online account at{" "}
          <a href="http://www.convenientcards.com">www.convenientcards.com</a>{" "}
          and linking a bank account.
        </p>
      ),
    },
    {
      id: 2,
      q: "Can the Access Card be used at ATMs?",
      a: (
        <p>
          The Access Card allows for cash withdrawals at any ATM bearing the
          Cirrus or Pulse acceptance marks. Cash withdrawals are limited to a
          maximum of $500 per day.
        </p>
      ),
    },
    {
      id: 3,
      q: "Does the Access Card expire?",
      a: (
        <p>
          When a card expires the card is closed and cannot be used. If the card
          is actively being used a new card replacement will be automatically
          mailed before the expiration date to the cardholder at the address
          registered to the card. If the card was not flagged for automatic card
          replacement, a cardholder will need to contact the customer service
          number at 1-800-486-0292.
        </p>
      ),
    },
    {
      id: 4,
      q: "Why would the Access Card decline?",
      a: (
        <p>
          There are a number of reasons why a card might decline. These reasons
          include but are not limited to: Not sufficient funds, address
          verification for online purchases, invalid PIN entry & incorrect card
          details such as CVV & expiration date.
        </p>
      ),
    },
    {
      id: 5,
      q: "Can the Access Card be used online?",
      a: (
        <p>
          Yes - the Access Card can be used for online purchases whereever VISA
          is accepted.
        </p>
      ),
    },
    {
      id: 6,
      q: "Can the Access Card be used internationally?",
      a: (
        <p>
          The Access Card can be used for international purchases wherever VISA
          is accepted. It is generally advised for cardholder's travelling
          outside of the country to check the United States sanctioned countries
          list & VISA's rules and policies to stay up to date.
        </p>
      ),
    },
    {
      id: 7,
      q: "How do cardholders check their balance for the Access Card?",
      a: (
        <p>
          Cardholders can create an online account following the instructions{" "}
          <a href="http://www.convenientcards.com/balance" target="_blank">
            here
          </a>{" "}
          to check their balances & transaction history. Alternatively
          cardholders can use the automated system at 1-800-486-0292 to retrieve
          balances & transaction history.
        </p>
      ),
    },
  ],
  gift: [
    {
      id: 1,
      q: "Will the Gift Card work for all online and over the phone purchases?",
      a: (
        <p>
          The Gift Card is intended for non- recurring purchase transactions and
          not for membership transactions or bill payments. VISA prohibits this
          card from processing transactions coded by a merchant as "recurring".
        </p>
      ),
    },
    {
      id: 2,
      q: "Does the Gift Card have cash access?",
      a: (
        <p>
          No, cash access is not available on the Gift Card program. As such
          ATMs and cash withdrawals are not permitted.
        </p>
      ),
    },
    {
      id: 3,
      q: "Can a Gift Card be used to purchase gas at the pump?",
      a: (
        <p>
          The Gift Card must be used as an in store purchase, meaning the card
          will not function at the pump. The solution is to have the attendant
          inside of the gas station process the transaction for the intended
          amount.
        </p>
      ),
    },
    {
      id: 4,
      q: "How does a cardholder register their card for online purchases?",
      a: (
        <p>
          The Gift Card can be used for online purchases, but must first be
          registered in the cardholder's name and address. To do this, the
          cardholder can either call the 1-800# on the back of their card or
          they can create their account online by following the instructions at{" "}
          <a href="http://www.convenientcards.com/register" target="_blank">
            www.convenientcards.com/register
          </a>{" "}
          to register the card.
        </p>
      ),
    },
    {
      id: 5,
      q: "How to use the Gift Card at restaurants & hotels?",
      a: (
        <p>
          The Gift Card can be used to make purchases at hotels and restaurants.
          However it is common for service oriented merchants to automatically
          factor in an additional 25% to cover any tip that might be left. If
          the total bill aftger adding in the additional 25% exceeds the
          available balance on the card the transaction will be declined.
        </p>
      ),
    },
    {
      id: 6,
      q: "How do cardholders receive support?",
      a: (
        <p>
          The customer support line is 1-800-486-0292 and is a 24/7 dedicated
          line for customers seeking support for their Gift Card.
        </p>
      ),
    },
    {
      id: 6,
      q: "Does the Gift Card program have fees?",
      a: (
        <p>
          Yes - the Gift Card program has two associated fees. A $15 card
          replacement fee is applied to the card balance when a card is
          lost/stolen. The inactivity fee of $2.50 is placed monthly to the card
          after a full year of inactivity. Both of these fees are located on the
          carrier that comes with the card, as well as printed directly on the
          back of the card.
        </p>
      ),
    },
    {
      id: 6,
      q: "Does the Gift Card require activation before use?",
      a: (
        <p>
          The Gift Card is "active" when the bank sells the card. There is no
          "activation" needed. Cardholders can choose to register their card and
          create their online account to check their card balances & to use the
          card online by following the instructions at{" "}
          <a href="http://www.convenientcards.com/register" target="_blank">
            www.convenientcards.com/register
          </a>
          .
        </p>
      ),
    },
  ],
  incentive: [
    {
      id: 1,
      q: "Will the Incentive Card work for all online and over the phone purchases?",
      a: (
        <p>
          The Incentive Card is intended for non- recurring purchase
          transactions and not for membership transactions or bill payments.
          VISA prohibits this card from processing transactions coded by a
          merchant as "recurring".
        </p>
      ),
    },
    {
      id: 2,
      q: "Does the Incentive Card have cash access?",
      a: (
        <p>
          No, cash access is not available on the Incentive Card program. As
          such ATMs and cash withdrawals are not permitted.
        </p>
      ),
    },
    {
      id: 3,
      q: "Can an Incentive Card be used to purchase gas at the pump?",
      a: (
        <p>
          The Incentive Card must be used as an in store purchase, meaning the
          card will not function at the pump. The solution is to have the
          attendant inside of the gas station process the transaction for the
          intended amount.
        </p>
      ),
    },
    {
      id: 4,
      q: "How does a cardholder register their card for online purchases?",
      a: (
        <p>
          The Incentive Card can be used for online purchases, but must first be
          registered in the cardholder's name and address. To do this, the
          cardholder can either call the 1-800# on the back of their card or
          they can create their account online by following the instructions at{" "}
          <a href="http://www.convenientcards.com/register" target="_blank">
            www.convenientcards.com/register
          </a>{" "}
          to register the card.
        </p>
      ),
    },
    {
      id: 5,
      q: "How to use the Incentive Card at restaurants & hotels?",
      a: (
        <p>
          The Incentive Card can be used to make purchases at hotels and
          restaurants. However it is common for service oriented merchants to
          automatically factor in an additional 25% to cover any tip that might
          be left. If the total bill aftger adding in the additional 25% exceeds
          the available balance on the card the transaction will be declined.
        </p>
      ),
    },
    {
      id: 6,
      q: "How do cardholders receive support?",
      a: (
        <p>
          The customer support line is 1-800-486-0292 and is a 24/7 dedicated
          line for customers seeking support for their Incentive Card.
        </p>
      ),
    },
    {
      id: 6,
      q: "Does the Incentive Card program have fees?",
      a: (
        <p>
          Yes - the Incentive Card program has associated fees. A $15 card
          replacement fee is applied to the card balance when a card is
          lost/stolen. A 3.5% additional fee is applied for currency conversion
          on any transaction outside of the U.S. or in a currency other than the
          currency which the card was issued. The monthly maintenence fee of
          $2.50 is placed monthly to the card beginning in the 7th month after
          the card sale. These fees are disclosed on the carrier that comes with
          the card.
        </p>
      ),
    },
    {
      id: 6,
      q: "Does the Incentive Card require activation before use?",
      a: (
        <p>
          The Incentive Card is "active" when the bank sells the card. There is
          no "activation" needed. Cardholders can choose to register their card
          and create their online account to check their card balances & to use
          the card online by following the instructions at{" "}
          <a href="http://www.convenientcards.com/register" target="_blank">
            www.convenientcards.com/register
          </a>
          .
        </p>
      ),
    },
  ],
};

export default questions;
