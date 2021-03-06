import React from 'react';

import { Box, Button, ModalMobileLayout, Text } from 'wix-style-react';

const style = {
  width: '375px',
  height: '640px',
  backgroundColor: 'rgba(22, 45, 61, 0.66)',
};

const MobileModalFooter = () => (
  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>
);

export default () => (
  <div style={style}>
    <ModalMobileLayout
      title={<Text weight="bold">Enter VAT ID</Text>}
      content={
        <Text weight="thin" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={<MobileModalFooter />}
      onCloseButtonClick={() => {}}
    />
  </div>
);
