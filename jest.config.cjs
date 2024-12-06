module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',  // This will transform both .ts and .tsx files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!<module_to_transform>)',  // Transform specific node_modules, if needed
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    // This is useful if you need to mock some non-JS files, like styles or assets
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
