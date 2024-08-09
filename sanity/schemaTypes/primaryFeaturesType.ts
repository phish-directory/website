// sanity/schemas/primaryFeatures.ts
import { defineField, defineType } from 'sanity'

const iconOptions = [
  { title: 'Cloud Arrow Up', value: 'CloudArrowUpIcon' },
  { title: 'Lock Closed', value: 'LockClosedIcon' },
  { title: 'Server', value: 'ServerIcon' },
  // Add more icons as needed
]

export const feature = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: iconOptions,
      },
    }),
  ],
})

export const primaryFeatures = defineType({
  name: 'primaryFeatures',
  title: 'Primary Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'feature' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
})
