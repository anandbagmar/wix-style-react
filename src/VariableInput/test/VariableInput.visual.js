import React from 'react';
import { storiesOf } from '@storybook/react';
import VariableInput from '../VariableInput';
import { sizeTypes } from '../constants';
import Box from '../../Box';

const commonProps = {
  variableParser: variable => (variable === 'page.name' ? 'Page name' : false),
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'text only',
        props: {
          initialValue: 'hello',
        },
      },
      {
        it: 'One variable',
        props: {
          initialValue: 'Welcome to my {{page.name}} ',
        },
      },
      {
        it: '3 Row',
        props: {
          initialValue: 'Welcome to my {{page.name}} ',
          rows: 3,
        },
      },
      {
        it: 'Disabled',
        props: {
          initialValue: 'Welcome to my {{page.name}} ',
          disabled: true,
        },
      },
      {
        it: 'placeholder',
        props: {
          placeholder: 'This is a placeholder',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`VariableInput/${describe}`, module).add(it, () => (
      <Box direction={'vertical'}>
        {Object.values(sizeTypes).map(size => (
          <Box margin={1} width="330px">
            <VariableInput {...commonProps} {...props} size={size} />
          </Box>
        ))}
      </Box>
    ));
  });
});