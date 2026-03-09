import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest', // Use ts-jest for TypeScript
	testEnvironment: 'jsdom', // For React DOM testing
	roots: ['<rootDir>/src'], // Only look inside src folder
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // optional, for testing-library setup
	collectCoverage: true,
	coverageDirectory: 'coverage',
};

export default config;
