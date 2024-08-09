import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'heroModule',
  title: 'Hero Module',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'Secondary Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
      ],
    }),
  ],
})
