import { useState } from "react";
import { marketingMaterials } from "../assets/data/marketing-data";

export default function MarketingSelection({ data, setData }) {
  const [selectedContentType, setSelectedContentType] = useState("");

  const handleChange = event => {
    setSelectedContentType(event.target.value);
  };

  function handleSubmit() {
    setData({ [selectedContentType]: marketingMaterials[selectedContentType] });
  }

  return (
    <div className="marketing-selector-div">
      <label htmlFor="contentType">Select Content Type:</label>
      <select
        id="contentType"
        value={selectedContentType}
        onChange={handleChange}
        defaultValue="posters"
      >
        <option value="posters">Posters</option>
        <option value="videos">Videos</option>
        <option value="socialMediaContent">Social Media Content</option>
        <option value="websiteContent">Website Content</option>
        <option value="statementStuffers">Statement Stuffers</option>
        <option value="brochures">Brochures</option>
        <option value="printReadyContent">Print Ready Content</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
