import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ModalPreviewLayout from '../ModalPreviewLayout';
import { modalPreviewLayoutPrivateDriverFactory } from './ModalPreviewLayout.private.uni.driver';

const requiredProps = {
  children: <div />,
  onClose: () => {},
};

describe('ModalPreviewLayout', () => {
  const render = createRendererWithUniDriver(
    modalPreviewLayoutPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<ModalPreviewLayout {...requiredProps} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should call onClose when clicking outside by default', async () => {
    const props = {
      ...requiredProps,
      onClose: jest.fn(),
    };
    const { driver } = render(<ModalPreviewLayout {...props} />);

    await driver.clickOverlay();

    expect(props.onClose).toHaveBeenCalled();
  });

  it('should not call onClose when shouldCloseOnOverlayClick set to false', async () => {
    const props = {
      ...requiredProps,
      shouldCloseOnOverlayClick: false,
      onClose: jest.fn(),
    };
    const { driver } = render(<ModalPreviewLayout {...props} />);

    await driver.clickOverlay();

    expect(props.onClose).not.toHaveBeenCalled();
  });

  it('should call onClose when clicking on the close button', async () => {
    const props = {
      ...requiredProps,
      onClose: jest.fn(),
    };
    const { driver } = render(<ModalPreviewLayout {...props} />);

    await driver.clickClose();

    expect(props.onClose).toHaveBeenCalled();
  });

  it('should render the preview content', async () => {
    const previewContent = 'preview-content';
    const props = {
      ...requiredProps,
      children: <div>{previewContent}</div>,
    };
    const { driver } = render(<ModalPreviewLayout {...props} />);

    expect(await driver.getPreviewContent().text()).toBe(previewContent);
  });

  it('should render the title', async () => {
    const previewTitle = 'Dashing Title';
    const props = {
      ...requiredProps,
      title: previewTitle,
    };
    const { driver } = render(<ModalPreviewLayout {...props} />);

    expect(await driver.getPreviewTitle().text()).toBe(previewTitle);
  });

  it('should render the actions', async () => {
    const previewActions = 'Dashing Actions';
    const props = {
      ...requiredProps,
      actions: <div>{previewActions}</div>,
    };
    const { driver } = render(<ModalPreviewLayout {...props} />);

    expect(await driver.getPreviewActions().text()).toBe(previewActions);
  });
});
