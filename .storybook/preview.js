export const parameters = {
  options: {
    storySort: {
      order: ['Introduction', 'Changelog']
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
