import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Assets, { GET_ASSETS_DATA } from "../components/Assets";

// const mocks: any = [];

const mocks: any = [
  {
    request: {
      query: GET_ASSETS_DATA,
    },
    results: {
      data: {
        assets: {
          assetId: "142838028",
          name: "ALGO FAM TOKEN",
          available: "false",
          logo: "https://algorand-wallet-mainnet.s3.amazonaws.com/media/asset_verification_requests_logo_svg/2022/07/03/ccde31ed43814d39adea461ba1c5b1b0.svg",
        },
      },
    },
  },
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Assets />
    </MockedProvider>
  );
  expect(
    await screen.findByText(/Please Wait, Loading.../i)
  ).toBeInTheDocument();
  expect(await screen.findByText(/ALGO FAM TOKEN/i)).toBeInTheDocument();
});

it("should show error UI", async () => {
  const ErrorMock = {
    request: {
      query: GET_ASSETS_DATA,
    },
    error: new Error("Failed to fetch"),
  };
  render(
    <MockedProvider mocks={[ErrorMock]} addTypename={false}>
      <Assets />
    </MockedProvider>
  );
  expect(await screen.findByText("Failed to fetch")).toBeInTheDocument();
});
