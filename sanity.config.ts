'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schema'
import { apiVersion, dataset, projectId } from './sanity/env'

const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page Sections')
            .items([
              S.listItem()
                .title('Hero Module')
                .child(
                  S.document()
                    .schemaType('heroModule')
                    .documentId('heroModule')
                ),
              S.listItem()
                .title('Primary Features')
                .child(
                  S.document()
                    .schemaType('primaryFeatures')
                    .documentId('primaryFeatures')
                ),
              S.listItem()
                .title('Secondary Features')
                .child(
                  S.document()
                    .schemaType('secondaryFeatures')
                    .documentId('secondaryFeatures')
                ),
              S.listItem()
                .title('Call to Action')
                .child(
                  S.document()
                    .schemaType('cta')
                    .documentId('cta')
                ),
              // Add more sections as needed
              S.listItem()
                .title('Stats Module')
                .child(
                  S.document()
                    .schemaType('statsModule')
                    .documentId('statsModule')
                ),
                S.listItem()
                .title('FAQs Module')
                .child(
                  S.document()
                    .schemaType('faqsModule')
                    .documentId('faqsModule')
                ),

            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem: { getId: () => string }) =>
          !['heroModule', 'primaryFeatures', 'secondaryFeatures', 'cta','statsModule','faqsModule'].includes(listItem.getId())
      ),
    ])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
