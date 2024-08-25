import js from '@eslint/js'
import globals from 'globals'
import prettier from "eslint-plugin-prettier"
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "prettier": prettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleAttributePerLine: true
        }
      ],
      curly: "error",
      camelcase: "error",
      eqeqeq: "error",
      "no-undef": "off",
      "no-useless-escape": "off",
      "object-curly-newline": [
        "error",
        {
          ObjectExpression: "always",
          ObjectPattern: {
            multiline: true,
          },
        },
      ]
    },
  },
)
