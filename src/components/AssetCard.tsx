import React from "react";
import Algorand from "../images/bitcoinIc1.png";
import "../styles/AssetCard.css";

interface AssetProps {
  asset: any;
}

const AssetCard: React.FC<AssetProps> = ({ asset }) => {
  return (
    <div className="asset__card__container">
      <img
        alt={asset.name}
        src={!asset.logo ? Algorand : asset.logo}
        style={{ height: "100px" }}
      />
      <h2>{asset.name}</h2>
      <p className={`${asset.available ? "available" : "unavailable"}`}>
        {asset.available ? "Available" : "Unavailable"}
      </p>
    </div>
  );
};

export default AssetCard;
