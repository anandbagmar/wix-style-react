import React from 'react';
import RawText from './RawText';
import style from './Caption.st.css';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';

const CaptionWithEllipsis = ({ className, caption, ...props }) => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);
  const captionClassName = style[caption];

  return (
    <Ellipsis
      {...ellipsisProps}
      // TODO - with Stylable3 change to wrapperClassName
      wrapperClasses={{ className: captionClassName }}
      render={({ ref, ellipsisClasses }) => (
        <RawText
          {...componentProps}
          ref={ref}
          className={ellipsisClasses(className, captionClassName)}
        />
      )}
    />
  );
};

CaptionWithEllipsis.displayName = 'Caption';

CaptionWithEllipsis.propTypes = {
  ...RawText.propTypes,
  ...Ellipsis.propTypes,
};

CaptionWithEllipsis.defaultProps = {
  ...RawText.defaultProps,
  ...Ellipsis.defaultProps,
};

export default CaptionWithEllipsis;
