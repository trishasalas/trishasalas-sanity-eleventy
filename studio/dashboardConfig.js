export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5f4ad68915bbe45da89c8f00',
                  title: 'Sanity Studio',
                  name: 'trishasalas-sanity-eleventy-studio',
                  apiId: '09ac2db5-eac0-4357-8960-a37c29f31e59'
                },
                {
                  buildHookId: '5f4ad68946d5ad4d04178cce',
                  title: 'Blog Website',
                  name: 'trishasalas-sanity-eleventy',
                  apiId: 'fe30a583-c01e-4391-92c3-c6d1239ee3d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trishasalas/trishasalas-sanity-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://trishasalas-sanity-eleventy.netlify.app', category: 'apps'}
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
