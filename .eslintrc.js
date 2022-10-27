module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.ts', '.tsx', '.d.ts'],
			},
		},
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:jsx-a11y/recommended',
		"adjunct"
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'fp-ts', 'jsx-a11y', 'no-secrets'],
	rules: {
		"no-secrets/no-secrets": "error",
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'react/jsx-props-no-spreading': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': 'off',
		'no-redeclare': 'off', // Needed for type declarations
		'react/prop-types': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'react/require-default-props': 'off',
		'no-nested-ternary': 'off',
		'no-underscore-dangle': 'off',
		'fp-ts/no-lib-imports': 'error',
		'react-hooks/rules-of-hooks': 'off',
		'no-param-reassign': 'off',
		'import/no-unresolved': 'off',
		"import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.test.{ts,tsx,js,jsx}"] }],
		"react/function-component-definition": ["error", {
			namedComponents: "arrow-function",
			unnamedComponents: "arrow-function",
		}],
		'no-unused-expressions': 'off',
		'react/react-in-jsx-scope': "off",
		"unicorn/prefer-top-level-await": "warn",
		"promise/always-return": "warn",
	},
}
