// ./schemas/myDocumentType.ts

import { SchemaType } from '@sanity/types';
import marqueeModule from './marquee';

const myDocumentType: SchemaType = {
  name: 'myDocumentType',
  title: 'My Document Type',
  type: 'document',
  fields: [
    // other fields...
    {
      name: 'marquee',
      title: 'Marquee',
      type: 'marqueeModule',
      description: 'Add a marquee component to your document.',
    },
  ],
};

export default myDocumentType;
