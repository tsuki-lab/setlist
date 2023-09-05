import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.(s?css|svg)$": "<rootDir>/src/web/__mocks__/assetMock.ts",
  },
  collectCoverage: true,
  coverageReporters: ["text", "json-summary"],
};

export default config;
