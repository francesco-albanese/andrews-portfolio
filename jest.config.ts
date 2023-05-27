import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
	testEnvironment: "node",
	preset: "ts-jest"
};

export default config;
