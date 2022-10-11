export default {
    name: 'society',
    type: 'document',
    title: 'society',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'name'
        },
        {
            title: 'slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            title: 'logo',
            name: 'logo',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'about',
            name: 'about',
            type: 'text'
        },
        {
            title: 'website',
            name: 'website',
            type: 'url'
        },
        {
            title: 'instagram',
            name: 'instagram',
            type: 'url'
        },
        {
            title: 'linkedin',
            name: 'linkedin',
            type: 'url'
        },
        {
            name: 'category',
            type: 'string',
            title: 'category'
        },
        {
            title: 'date',
            name: 'date',
            type: 'date'
          }

    ]
}