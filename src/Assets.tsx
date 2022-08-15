import AssetCard from "./AssetCard";
import "./Assets.css";
import { useQuery, gql } from "@apollo/client";

export const GET_ASSETS_DATA = gql`
  query MyQuery {
    asalist {
      results {
        assetId
        available
        logo
        name
      }
    }
  }
`;

const Assets = () => {
  const { data, loading, error } = useQuery(GET_ASSETS_DATA);

  if (loading) {
    return (
      <>
        <div className="lds-dual-ring align"></div>
        <p className="align-text">Please Wait, Loading...</p>
      </>
    );
  }

  if (error) {
    return <div className="align-text error">{error.message}</div>;
  }

  return (
    <section className="container assets__container">
      {data.asalist.results.map((asset: any) => (
        <AssetCard key={asset.assetId} asset={asset} />
      ))}
    </section>
  );
};

export default Assets;
