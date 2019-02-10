/* eslint-disable */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import AppButton from './AppButton';

function Story (className = '', disabled = false) {
  return {
    components: {
      AppButton,
    },
    methods: {
      click: action('clicked'),
    },
    template: `
      <AppButton
        :disabled="${disabled}" 
        class="${className}"
        @click.native="click">
        Button
      </AppButton>
    `,
  };
}

storiesOf('Button', module)
  .add('text', () => new Story('c-btn--text'))
  .add('text - disabled', () => new Story('c-btn--text', true))
  .add('outlined', () => new Story())
  .add('outlined - disabled', () => new Story('', true))
  .add('contained', () => new Story('c-btn--primary'))
  .add('contained - disabled', () => new Story('c-btn--primary', true))
  .add('round', () => new Story('c-btn--round'))
  .add('round - disabled', () => new Story('c-btn--round', true))
  .add('round, primary, small', () => new Story('c-btn--primary c-btn--round c-btn--small'))
