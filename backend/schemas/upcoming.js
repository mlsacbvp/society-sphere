export default {
    name: 'upcoming',
    type: 'document',
    title: 'upcoming',
    fields: [
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'alt',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                }
              },
              {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          }
    ]
}