import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';

import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AtlasAddressInput from '..';
import { SectionHelper } from '../..';

// We've set up a mock Atlas api in Storybook middleware file
const BASE_URL = '/api/atlas/';
const MockAtlasAddressInput = (props) => (
  <AtlasAddressInput baseUrl={BASE_URL} {...props} />
);
const MockWixAtlasServiceWeb = WixAtlasServiceWeb.bind(null, BASE_URL);

const example = (config) =>
  baseExample({
    components: {
      ...allComponents,
      AtlasAddressInput: MockAtlasAddressInput,
      WixAtlasServiceWeb: MockWixAtlasServiceWeb,
    },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AtlasAddressInput,
  componentPath: '..',

  componentProps: {
    clearButton: true,
    roundInput: true,
    disabled: false,
    size: 'medium',
    placeholder: 'Placeholder text...',
    noResultsText: 'No results...',
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AtlasAddressInput.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'An address search component, requires an address provider.',
          }),

          importExample(),

          divider(),

          description({
            text: (
              <SectionHelper title="Dependencies">
                <p>
                  To use this component please install the `@wix/ambassador` and
                  `@wix/ambassador-wix-atlas-service-web` peer dependencies.
                </p>
                <p>
                  <h5>Using NPM:</h5>
                  <code>
                    npm install @wix/ambassador
                    @wix/ambassador-wix-atlas-service-web
                  </code>
                </p>
                <p>
                  <h5>Using Yarn:</h5>
                  <code>
                    yard add @wix/ambassador
                    @wix/ambassador-wix-atlas-service-web
                  </code>
                </p>
              </SectionHelper>
            ),
          }),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example.',
            source: examples.simple,
          }),

          example({
            title: 'Controlled',
            text: `You can pass a \`value\` prop to control the value of input.\n
Using the \`onSelect\` prop, we can fetch additional data based on selected place\n
and set custom value on selection.`,
            source: examples.controlled,
          }),

          example({
            title: 'Sizes',
            text:
              'You can set the size of the input to be `small`, `medium` or `large` (default: `medium`)',
            source: examples.sizes,
          }),

          example({
            title: 'Shape',
            text:
              'AtlasAddressInput can be either round or square depending on the `roundInput` prop (default: `true`).',
            source: examples.shape,
          }),

          example({
            title: 'Clear button',
            text:
              'A clear button can be displayed using the `clearButton` prop (default: `true`).',
            source: examples.clearButton,
          }),

          example({
            title: 'Disabled input',
            text:
              'AtlasAddressInput can be disabled using the `disabled` prop.',
            source: examples.disabled,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
