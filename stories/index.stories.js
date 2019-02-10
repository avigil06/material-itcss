/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import Colors from './Colors.vue';
import Typography from './Typography';

storiesOf('Welcome', module)
  .add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') },
  }))
  .add('Colors', () => ({
    components: { Colors },
    template: '<Colors />',
  }))
  .add('Typography', () => ({
    components: { Typography },
    template: '<Typography />',
  }));
