import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import home from './schemas/documents/home';
import master from './schemas/documents/master';

const schemaToHideFromStructure: string[] = [master.name, home.name];

export default defineConfig({
  name: 'default',
  title: 'rshackleton.co.uk',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .id('root')
          .items([
            S.listItem()
              .title(master.title ?? '')
              .icon(master.icon)
              .child(
                S.document().schemaType(master.name).documentId(master.name).views([S.view.form()]),
              ),

            S.divider(),

            S.listItem()
              .title(home.title ?? '')
              .icon(home.icon)
              .child(
                S.document().schemaType(home.name).documentId(home.name).views([S.view.form()]),
              ),

            ...S.documentTypeListItems().filter(
              (listItem) => !schemaToHideFromStructure.includes(listItem.getId() ?? ''),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
