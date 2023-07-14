import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Buy & Sell Digital Assets in the ZENDIA region\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Can click on a currency", () => {
    render(<Home />);

    const handleCur = jest.fn();

    const gbpButton = screen.getByTestid("gbp-button");
    const usdButton = screen.getByTestid("usd-button");
    const eurButton = screen.getByTestid("eur-button");

    expect(gbpButton).toBeInTheDocument();
    expect(usdButton).toBeInTheDocument();
    expect(eurButton).toBeInTheDocument();

    gbpButton.click();
    usdButton.click();
    eurButton.click();

    expect(handleCur).toHaveBeenCalledTimes(3);
  });

  it("Can click on a time interval", () => {
    render(<Home />);

    const handleTimeInterval = jest.fn();

    const fiveSecButton = screen.getByTestid("5s-button");
    const thritySecButton = screen.getByTestid("30s-button");
    const oneMinButton = screen.getByTestid("1m-button");

    expect(fiveSecButton).toBeInTheDocument();
    expect(thritySecButton).toBeInTheDocument();
    expect(oneMinButton).toBeInTheDocument();

    fiveSecButton.click();
    thritySecButton.click();
    oneMinButton.click();

    expect(handleTimeInterval).toHaveBeenCalledTimes(3);
  });
});
