import { defineField, defineType } from 'sanity'

export const statsType = defineType({
  name: 'statsModule',
  title: 'Stats Module',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
          ],
        },
      ],
    }),
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
    name:'subDescription',
    title:'Sub Description',
    type:'text',
    }),
  ],
})
