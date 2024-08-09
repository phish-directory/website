// sanity/schemas/callToAction.ts
import { defineField, defineType } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
    },
    {
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'url',
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
    },
    {
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'url',
    },
  ],
})
