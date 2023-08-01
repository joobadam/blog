import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blog with nextjs',

  projectId: '9u29wcum',
  dataset: 'production',

  plugins: [deskTool(), ],

  schema: {
    types: schemaTypes,
  },
})
