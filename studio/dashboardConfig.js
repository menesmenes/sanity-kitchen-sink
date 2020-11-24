export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbd3da811f18e362745dd00',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-e26t4mv2',
                  apiId: '594cf325-4e0a-41ca-9b6b-1a39bc0662ca'
                },
                {
                  buildHookId: '5fbd3da85c23453fc1c21b7b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eem7i7pq',
                  apiId: 'ba2fcf00-025d-47ad-8b8e-9cce14da7871'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/menesmenes/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eem7i7pq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
