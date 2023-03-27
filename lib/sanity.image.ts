import imageUrlBuilder from '@sanity/image-url'
import React from 'react'

import {client} from './sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source).auto('format').fit('max')
}