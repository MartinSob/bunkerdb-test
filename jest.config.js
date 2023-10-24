module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: [
    '<rootDir>/**/src/api/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/**/src/api/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/api/**/*.{js,jsx,ts,tsx}',
    '/src/api/**/*.{js,jsx,ts,tsx}',
    '!api/**/*.d.ts',
    '!dist/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/tests/setEnvVars.ts"],
  testEnvironment: "node",
};
