const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { defaults } = require("jest-config");
const { compilerOptions } = require("./tsconfig.extends.json");

module.exports = {
  // 测试用例失败多少个就退出程序
  bail: 1,
  // 打印当前用例执行详情
  verbose: true,
  //环境预设
  preset: "ts-jest/presets/js-with-babel",
  // 设置 Jest 的运行环境
  setupFilesAfterEnv: ["<rootDir>/tests/setupFilesAfterEnv.ts"],
  //ts 环境配置
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  // 需要执行测试的文件
  testRegex: ".*\\.test\\.(j|t)sx?$",
  //忽略执行测试的模块
  transformIgnorePatterns: ["/node_modules/"],
  // 文件名拓展
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  modulePaths: ["../"],
  moduleNameMapper: {
    // ts 设置了路径别名后需要进行映射配置,如果设置了 baseUrl 需要加到路径前缀
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: `<rootDir>${compilerOptions.baseUrl}`,
    }),
    // mock css
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    //process css
    "\\.(css|less|scss)$": "<rootDir>/tests/mock/styleMock.js",
    //process image
    "\\.(jpg|png|gif|svg)$": "<rootDir>/tests/mock/imageMock.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  // 测试覆盖率
  collectCoverage: true,
  // 在终端打印 coverage 信息
  coverageReporters: ["text"],
};
