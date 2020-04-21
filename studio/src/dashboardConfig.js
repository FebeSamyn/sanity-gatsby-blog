export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9ed0051a2df464deae9dcc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a8t43ez6',
                  apiId: 'b95709e1-7eb1-4f3b-ba8e-3332e09f843d'
                },
                {
                  buildHookId: '5e9ed0052bd9de34706b7a19',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uzv83ta9',
                  apiId: '76b4d946-1b6e-41b2-86a3-3775b8677fe0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FebeSamyn/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uzv83ta9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
