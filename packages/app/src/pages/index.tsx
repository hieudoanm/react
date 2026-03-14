import {
	LandingContent,
	LandingTemplate,
} from '@json/templates/LandingTemplate';
import { NextPage } from 'next';

const content: LandingContent = {
	navbar: {
		title: 'JSONEditor',
		buttonText: 'Open Editor',
		buttonHref: '/app',
	},
	hero: {
		title: 'Edit, Validate, and Format JSON Instantly',
		tagline:
			'A fast, privacy-first JSON editor for creating, validating, and managing JSON data directly in your browser.',
		buttonText: 'Start Editing',
		buttonHref: '/app',
	},
	features: {
		title: 'Features',
		items: [
			{
				id: 'real-time-editing',
				emoji: '⚡',
				title: 'Real-Time Editing',
				description:
					'Edit JSON objects instantly with live syntax validation and auto-formatting.',
			},
			{
				id: 'tree-view',
				emoji: '🌳',
				title: 'Tree & Code Views',
				description:
					'Visualize your JSON data in a tree view or switch to raw code mode for advanced editing.',
			},
			{
				id: 'syntax-validation',
				emoji: '✅',
				title: 'Syntax Validation',
				description:
					'Detect errors and inconsistencies in your JSON immediately with built-in validation.',
			},
			{
				id: 'privacy-first',
				emoji: '🔒',
				title: 'Privacy First',
				description:
					'All JSON data stays in your browser. Nothing is uploaded or stored remotely.',
			},
			{
				id: 'multi-device',
				emoji: '📱',
				title: 'Multi-Device Ready',
				description:
					'Edit and preview JSON on desktops, tablets, or phones with a responsive design.',
			},
			{
				id: 'export-import',
				emoji: '💾',
				title: 'Export & Import',
				description:
					'Save your JSON files locally or import external JSON to edit without leaving your browser.',
			},
		],
	},
	cta: {
		title: 'Start Editing JSON Today',
		description:
			'Create, validate, and manage JSON data securely and efficiently. No signup required.',
		buttonText: 'Open JSONEditor',
		buttonHref: '/app',
	},
	footer: {
		name: 'JSONEditor',
	},
};

const HomePage: NextPage = () => {
	return <LandingTemplate content={content} />;
};

export default HomePage;
