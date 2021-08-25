import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact form component", () => {
    // baseline test
    it('renders', () => {
      render(<ContactForm/>);
    })

    // snapshot test
    it("matches snapshot", () => {
      const { asFragment } =   render(<ContactForm/>);
      expect(asFragment()).toMatchSnapshot();
    });

    // use data-testId to match Contact Me
    it("matches text Contact me", () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('contact-me')).toHaveTextContent('Contact me')
    })

     // use data-testId to match Submit button
     it("matches text Submit", () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })

  });