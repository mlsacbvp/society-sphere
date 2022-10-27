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
        },
        {
            name: 'facultyHead',
            type: 'string',
            title: 'facultyHead'
        },
        {
            name: 'chairperson',
            type: 'string',
            title: 'chairperson'
        },
        {
            name: 'viceChairperson',
            type: 'string',
            title: 'viceChairperson'
        },
        {
            name: 'recentEvent1_title',
            type: 'string',
            title: 'recentEvent1_title'
        },
        {
            title: 'recentEvent1_img',
            name: 'recentEvent1_img',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'recentEvent1_desc',
            name: 'recentEvent1_desc',
            type: 'text'
        },
        {
            name: 'recentEvent2_title',
            type: 'string',
            title: 'recentEvent2_title'
        },
        {
            title: 'recentEvent2_img',
            name: 'recentEvent2_img',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'recentEvent2_desc',
            name: 'recentEvent2_desc',
            type: 'text'
        },
        {
            name: 'recentEvent3_title',
            type: 'string',
            title: 'recentEvent3_title'
        },
        {
            title: 'recentEvent3_img',
            name: 'recentEvent3_img',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'recentEvent3_desc',
            name: 'recentEvent3_desc',
            type: 'text'
        },
    ]
}