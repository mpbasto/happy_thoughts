import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.SANITY_REVALIDATE_SECRET
  ? false
  : process.env.NODE_ENV === 'production', 
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15', 
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})