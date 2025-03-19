import "../../../styles/modals/ComparingProductsModal.css";

export default function CompareGiftIncentiveModal({ handleClose }) {
  return (
    <div className="modal-body CompareGiftIncentiveModal ComparingProductsModal">
      <h3>
        Comparing Convenient Visa Gift Card to Convenient Visa Incentive Card
      </h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Gift Card</th>
            <th>Incentive Card</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold-text">Activating & Loading</td>
            <td>Load $10 - $500</td>
            <td>Load $10 - $750</td>
          </tr>
          <tr>
            <td className="bold-text">Reloading</td>
            <td>Not Reloadable</td>
            <td>Not Reloadable</td>
          </tr>
          <tr>
            <td className="bold-text">Intended Use</td>
            <td>Consumer-funded gifts</td>
            <td>Corporate-funded incentives and rewards</td>
          </tr>
        </tbody>
      </table>
      <div className="modal-btns">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
