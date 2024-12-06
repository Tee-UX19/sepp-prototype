module.exports = {
  preset: 'ts-jest',  // Use ts-jest to compile TypeScript files
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Ensure Jest uses your tsconfig
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // Use ts-jest for .ts and .tsx files
  },
};
