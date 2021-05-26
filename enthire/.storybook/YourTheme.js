import { create } from '@storybook/theming';
import Logo from '../src/stories/assets/logo.jpg';

export default create({
    base: 'light',
    brandTitle: 'Enthire',
    brandUrl: 'https://enthire.co/',
    brandImage: `/${Logo}`
})