export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6177588ce2d4e2654338c06b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j89hf3fv',
                  apiId: '87850e2c-d7a6-45ed-adf9-7663cc619337'
                },
                {
                  buildHookId: '6177588c387f6337dd056ffc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fhz2yes3',
                  apiId: '8147a25f-6d9d-42c1-b9f0-6b1bc22a2427'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/biliryc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fhz2yes3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
