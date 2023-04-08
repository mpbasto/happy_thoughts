import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import HeroPost from '../components/HeroPost'

export default {
  title: 'Hero Post',
  component: HeroPost,
  argTypes: {
    title: {
      control: 'text',
    },
    coverImage: {
      control: 'text',
    },
    date: {
      control: 'text',
    },
    excerpt: {
      control: 'text',
    },
    author: {
      control: 'text',
    },
    slug: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof HeroPost>

const Template: ComponentStory<typeof HeroPost> = (args) => (
  <HeroPost {...args} />
)

export const Primary = Template.bind({})

// https://cdn.sanity.io/images/96tcnw0k/production/ee79cc38fc7c487786ca8fa7442ee92d2d6403c6-3895x2597.jpg
