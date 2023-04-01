
export default {
    name: 'marquee',
    type: 'object',
    fields: [
      {
        name: 'text',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'speed',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'direction',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' },
          ],
          layout: 'radio',
        },
        defaultValue: 'left',
      },
    ],
  };
  