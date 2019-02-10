import { configure } from '@storybook/vue';
import '../src/scss/main.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  require('../stories/index.stories.js');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
