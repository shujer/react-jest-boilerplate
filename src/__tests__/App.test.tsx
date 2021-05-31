import { render } from "@testing-library/react";
import { mount } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders learn react link", () => {
    const wrapper = render(<App />);
    const linkElement = wrapper.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const wrapper = mount(<App />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
