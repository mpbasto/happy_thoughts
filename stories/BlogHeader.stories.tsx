import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Container from '../components/BlogContainer'
import BlogHeader from '../components/BlogHeader'
import Layout from '../components/BlogLayout'

export default {
  title: 'Blog Header',
  component: BlogHeader,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'object',
    },
    level: {
      control: { type: 'radio' },
      options: [1, 2],
    },
  },
} as ComponentMeta<typeof BlogHeader>

const Template: ComponentStory<typeof BlogHeader> = (args) => (
  <Layout preview={false}>
    <Container>
      <BlogHeader {...args} />
    </Container>
  </Layout>
)

export const Primary = Template.bind({})

Primary.args = {
  title: 'Test title',
  description: [
    {
      _key: 'f38b582aa212',
      _type: 'block',
      children: [
        {
          _key: '2caf113f7b32',
          _type: 'span',
          marks: [],
          text: 'This is a great description.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  level: 1,
}
