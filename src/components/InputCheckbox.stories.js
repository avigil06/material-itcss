/* eslint-disable */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import InputCheckbox from './InputCheckbox';

function Story (className = '', disabled = false) {
  return {
    components: { InputCheckbox },
    methods: {
      click: action('Clicked'),
    },
    template: `
      <InputCheckbox
        :disabled="${disabled}"
        class="${className}">
        Checkbox
      </InputCheckbox>
    `,
  };
}

storiesOf('Checkbox', module)
  .add('default', () => new Story())
