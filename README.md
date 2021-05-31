## ✨ React-TS-Jest

A Boilerplate for React + TypeScript + Jest + Enzyme

## 📦 Install

```bash
$ git clone git@github.com:shujer/react-jest-boilerplate.git
$ yarn install # npm install
$ yarn test # npm run test
```

## 🎨 Setup by yourself

- initial app

```bash
$ npx create-react-app <your-app> --template typescript
```

- add dependencies

```bash
$ yarn add -D ts-jest@26.5.6 enzyme @types/enzyme enzyme-to-json identity-obj-proxy
# with React 17
$ yarn add -D @wojtekmaj/enzyme-adapter-react-17
# with React 16
$ yarn add -D enzyme-adapter-react-16
```

- add `jest.config.js`

```js
module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  setupFilesAfterEnv: ["<rootDir>/tests/setupFilesAfterEnv.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  testRegex: ".*\\.test\\.(j|t)sx?$",
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  modulePaths: ["../"],
  moduleNameMapper: {
    // optional, if you use `compilerOptions.paths`
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: `<rootDir>${compilerOptions.baseUrl}`,
    }),
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    // process css
    "\\.(css|less|scss)$": "<rootDir>/tests/mock/styleMock.js",
    // process image
    "\\.(jpg|png|gif|svg)$": "<rootDir>/tests/mock/imageMock.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
```

- add `setupFilesAfterEnv.ts`

```js
import "@testing-library/jest-dom";
const Enzyme = require("enzyme");
//React 16: const Adapter = require("enzyme-adapter-react-16");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
Enzyme.configure({ adapter: new Adapter() });
```

- add test case

```tsx
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
```

- enjoy it!
