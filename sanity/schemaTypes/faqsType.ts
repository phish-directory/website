import { defineField, defineType } from 'sanity'

export const faqsType = defineType({
    name: 'faqsModule',
    title: 'FAQs Module',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        }),
        {
        name: 'faqs',
        title: 'FAQs',
        type: 'array',
        of: [
            {
            type: 'object',
            fields: [
                {
                name: 'question',
                title: 'Question',
                type: 'string',
                },
                {
                name: 'answer',
                title: 'Answer',
                type: 'text',
                },
            ],
            },
        ],
        },
    ],
    })