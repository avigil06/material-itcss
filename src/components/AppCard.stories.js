/* eslint-disable */

import { storiesOf } from '@storybook/vue';

import AppCard from './AppCard';
import InputCheckbox from './InputCheckbox';

function Story (text, className = '') {
  return {
    components: { AppCard, InputCheckbox },
    template: `<AppCard class="${className}">${text}</AppCard>`,
  };
}

storiesOf('Card', module)
  .add('text', () => new Story(
    '<div class="u-padding-small">This is a test of a card</div>',
    'u-margin',
  ))
  .add('list', () => new Story(
    `
      <ul class="o-list">
        <li><InputCheckbox>One</InputCheckbox></li>
        <li><InputCheckbox>Two</InputCheckbox></li>
        <li><InputCheckbox>Three</InputCheckbox></li>
        <li><InputCheckbox>Four</InputCheckbox></li>
        <li><InputCheckbox>Five</InputCheckbox></li>
        <li><InputCheckbox>Six</InputCheckbox></li>
      </ul>
    `,
    'u-margin u-1/3 c-form',
  ))
