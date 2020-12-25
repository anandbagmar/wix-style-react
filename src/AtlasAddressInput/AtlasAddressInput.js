import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AddressInput from '../AddressInput';
import { addressInputItemBuilder } from '../AddressInputItem';
import usePlacesAutocomplete from '../providers/usePlacesAutocomplete';
import useAtlasClient from '../providers/useAtlasClient';
import { dataHooks } from './constants';

const AtlasAddressInput = ({
  baseUrl,
  debounceMs,
  debounceFn,
  onChange,
  onClear,
  optionLayout,
  optionPrefix,
  optionSuffix,
  ...props
}) => {
  const client = useAtlasClient({ baseUrl });
  const {
    predictions,
    updatePredictions,
    clearPredictions,
    loading,
  } = usePlacesAutocomplete({ client, debounceMs, debounceFn });

  const status = loading ? 'loading' : undefined;

  const options = useMemo(
    () =>
      predictions.map((prediction) =>
        addressInputItemBuilder({
          id: prediction.searchId,
          mainLabel: prediction.textStructure.mainText,
          secondaryLabel: prediction.textStructure.secondaryText,
          displayLabel: prediction.description,
          optionLayout,
          prefix: optionPrefix,
          suffix: optionSuffix,
          dataHook: dataHooks.item,
        }),
      ),
    [predictions, optionLayout, optionPrefix, optionSuffix],
  );

  const _onChange = useCallback(
    (event) => {
      updatePredictions(event.target.value);
      onChange && onChange(event);
    },
    [updatePredictions, onChange],
  );

  const _onClear = useCallback(() => {
    clearPredictions();
    onClear && onClear();
  }, [clearPredictions, onClear]);

  return (
    <AddressInput
      {...props}
      options={options}
      onChange={_onChange}
      onClear={_onClear}
      status={status}
    />
  );
};

AtlasAddressInput.propTypes = {
  /** Custom domain for WixAtlasServiceWeb to retreive predictions from  */
  baseUrl: PropTypes.string,

  /** Fetch predictions debounce in milliseconds (default: 200) */
  debounceMs: PropTypes.number,

  /** (callback: Function, debounceMs: number) => Function
   * allow passing a custom debounce function (default: lodash debounce) */
  debounceFn: PropTypes.func,

  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Displays clear button (X) on a non-empty input */
  clearButton: PropTypes.bool,

  /** The initial input value */
  initialValue: PropTypes.string,

  /** Controlled mode - value to display */
  value: PropTypes.string,

  /** When set to true this component is disabled */
  disabled: PropTypes.bool,

  /** Handler for address selection changes */
  onSelect: PropTypes.func,

  /** Handler for input changes */
  onChange: PropTypes.func,

  /** Handler for getting notified upon a clear event, will show the clear button in the component input when passed. */
  onClear: PropTypes.func,

  /** The shape of the component input */
  roundInput: PropTypes.bool,

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Text to show in dropdown when no results found */
  noResultsText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Option: Sets the layout of `mainLabel` and `secondaryLabel`. The possible options can be either side by side: `single-line` or double lined: `double-line`*/
  optionLayout: PropTypes.oneOf(['single-line', 'double-line']),

  /** Will show the provided node as the option prefix. */
  optionPrefix: PropTypes.node,

  /**  Will show the provided node as the option suffix. */
  optionSuffix: PropTypes.node,
};

export default AtlasAddressInput;
