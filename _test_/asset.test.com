import { render, screen } from "@testing-library/react";
import Assets from "@/app/assets/page";
import { AppContext } from "@/app/context/app";

const MockRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>,
    renderOptions,
  )
}

const providerProps = {
    NFTData: {
        ownedNfts: [
            {
                "contract": {
                    "address": "0x3f096b21b6023995c554bbee7014c9ab8395e89f",
                    "name": "test",
                    "symbol": "test",
                    "tokenType": "ERC721",
                    "openSea": {}
                },
                "tokenId": "3",
                "tokenType": "ERC721",
                "title": "",
                "description": "",
                "timeLastUpdated": "2023-07-13T19:12:50.570Z",
                "rawMetadata": {
                    "image": "ipfs://QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6",
                    "attributes": [
                        {
                            "value": "Purple",
                            "trait_type": "Background"
                        },
                        {
                            "value": "Bored",
                            "trait_type": "Eyes"
                        },
                        {
                            "value": "Tongue Out",
                            "trait_type": "Mouth"
                        },
                        {
                            "value": "Bone Necklace",
                            "trait_type": "Clothes"
                        },
                        {
                            "value": "Cheetah",
                            "trait_type": "Fur"
                        }
                    ]
                },
                "tokenUri": {
                    "gateway": "https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/3",
                    "raw": "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/3"
                },
                "media": [
                    {
                        "gateway": "https://ipfs.io/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6",
                        "raw": "ipfs://QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6"
                    }
                ],
                "balance": 1
            },
        ]
    }
}

describe("Assets", () => {
  it("renders an nft with title Test", async () => {
    customRender(<Assets />, {providerProps})

    const nftTitle = await screen.findByTestid("title", {
      name: /Test\.js!/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it("renders a heading", async () => {
    customRender(<Assets />, {providerProps});
    const onClick = jest.fn();

    const nftItem = await screen.findByTestid("nft-item")

    nftItem.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
