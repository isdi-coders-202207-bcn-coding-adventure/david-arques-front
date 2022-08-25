import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

const mockedCounterValues = { days: 4, hours: 3, minutes: 2, seconds: 1 };
jest.mock("../../hooks/useCounter", () => () => [
  mockedCounterValues.days,
  mockedCounterValues.hours,
  mockedCounterValues.minutes,
  mockedCounterValues.seconds,
]);

describe("Given a Counter component", () => {
  describe("When invoked and calls the useCounter hook with the keyDate", () => {
    describe("And the difference between actual date and keyDate is > 0", () => {
      test("Then it should render a count of 4 different number (4,3,2,1)", () => {});
      render(<Counter />);

      const counter = [
        screen.getByText(mockedCounterValues.days),
        screen.getByText(mockedCounterValues.hours),
        screen.getByText(mockedCounterValues.minutes),
        screen.getByText(mockedCounterValues.seconds),
      ];

      counter.forEach((number) => expect(number).toBeInTheDocument());
    });
  });
  describe("And the  actual date and keyDate is < 0", () => {
    test("Then it should render 'Sa acabat' heading", () => {});
    const expectedHeading = "Sa acabat";
    mockedCounterValues.days = 0;
    mockedCounterValues.hours = 0;
    mockedCounterValues.minutes = 0;
    mockedCounterValues.seconds = 0;
    render(<Counter />);

    const heading = screen.getByRole("heading", { name: `${expectedHeading}` });

    expect(heading).toBeInTheDocument();
  });
});
