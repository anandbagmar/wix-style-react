import * as React from 'react';
import { OmitPolyfill } from '../common';
import { InputProps } from '../Input';
import { GoogleMapsClient } from '../clients';

export interface GoogleAddressInputProps
  extends OmitPolyfill<
    InputProps,
    'onChange' | 'onBlur' | 'onFocus' | 'onKeyDown' | 'onKeyUp' | 'onPaste'
  > {
  placeholder?: string;
  valuePrefix?: string;
  countryCode?: string;
  value?: string;
  status?: InputProps['status'];
  statusMessage?: InputProps['statusMessage'];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
  onSet?: Function;
  magnifyingGlass?: boolean;
  readOnly?: boolean;
  autoSelect?: boolean;
  clearSuggestionsOnBlur?: boolean;
  fallbackToManual?: boolean;
  poweredByGoogle?: boolean;
  footer?: string;
  types?: any[];
  filterTypes?: any[];
  placeDetailsFields?: any[];
  footerOptions?: object;
  handler?: 'geocode' | 'places';
  Client?: GoogleMapsClient;
}

export default class GoogleAddressInput extends React.Component<
  GoogleAddressInputProps
> {
  select: () => void;
  focus: () => void;
}
