import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './schemaTypes/blockContentType'
import {categoryType} from './schemaTypes/categoryType'
import {postType} from './schemaTypes/postType'
import {authorType} from './schemaTypes/authorType'
import { heroType } from './schemaTypes/heroType'
import { feature, primaryFeatures } from './schemaTypes/primaryFeaturesType'
import { secondaryFeatures } from './schemaTypes/secondFeaturesType'
import { cta } from './schemaTypes/callToActionType'
import { statsType } from './schemaTypes/statsType'
import { faqsType } from './schemaTypes/faqsType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType,heroType,feature,primaryFeatures,secondaryFeatures,cta,statsType,faqsType],
}
