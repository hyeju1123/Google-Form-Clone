import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import {fixupPluginRules} from '@eslint/compat';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {'react-hooks': fixupPluginRules(reactHooks)},
    rules: {...reactHooks.configs.recommended.rules},
  },
);
