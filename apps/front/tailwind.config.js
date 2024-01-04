const path = require('path');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    path.join(path.dirname(require.resolve('@yarn-workspaces/design-system')), '**/*.js'),
  ],
    theme: {
    extend: {},
  },
  plugins: [],
}

