import * as React from 'react';
import { AddressInputProps } from '../AddressInput';
import { OmitPolyfill } from '../common';
import { AtlasInitOptions } from '../providers/useAtlasClient';

export interface AtlasAddressInputProps
  extends OmitPolyfill<AddressInputProps, 'options' | 'status'>,
    AtlasInitOptions {
  debounceMs?: number;
  debounceFn?: (callback: Function, debounceMs: number) => Function;
  optionLayout?: 'single-line' | 'double-line';
  optionPrefix?: React.ReactNode;
  optionSuffix?: React.ReactNode;
}

declare const AtlasAddressInput: React.FC<AtlasAddressInputProps>;
export default AtlasAddressInput;
