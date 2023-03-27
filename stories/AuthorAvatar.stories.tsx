import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

import Avatar from '../components/AuthorAvatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    name: {
        control: 'text'
    },
    picture: {
        control: 'text'
    }
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'John Doe',
  picture: 'https://cdn.sanity.io/images/96tcnw0k/production/721948d2dec91bb6e88ba351487a36d51cc67143-64x64.png',
};