// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const Enzyme = require("enzyme");
//React 17 适配器： https://github.com/enzymejs/enzyme/issues/2429
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

Enzyme.configure({ adapter: new Adapter() });
