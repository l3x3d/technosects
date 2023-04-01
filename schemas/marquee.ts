// ./schemas/marquee.ts

import { SchemaType } from '@sanity/types';
import { PortableTextFeatures } from '@sanity/portable-text-editor';

const marqueeModule: SchemaType = {
  name: 'marqueeModule',
  title: 'Marquee Module',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'The text to be scrolled.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'speed',
      title: 'Speed',
      type: 'number',
      description: 'The speed of the scroll in milliseconds.',
      validation: (Rule: any) => Rule.min(1),
      inputComponent: 'Slider',
      options: {
        // Customize the slider range and step size
        min: 1,
        max: 1000,
        step: 50,
      },
    },
    {
      name: 'direction',
      title: 'Direction',
      type: 'string',
      description: 'The direction of the scroll.',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
    },
  ],
};

export default marqueeModule;
