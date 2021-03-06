import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { SyntheticEventData, Simulate } from 'react-dom/test-utils';
import { StatusIndications } from '../common';

export interface InputAreaDriver<T> extends BaseDriver {
  trigger: (trigger: keyof typeof Simulate, event: SyntheticEventData) => void;
  focus: () => void;
  enterText: (text: string) => void;
  getValue: () => string;
  getName: () => string;
  getPlaceholder: () => string;
  getDefaultValue: () => string;
  getRowsCount: () => number;
  getMaxLength: () => number;
  getTabIndex: () => number;
  getReadOnly: () => boolean;
  getResizable: () => boolean;
  getDisabled: () => boolean;
  getRequired: () => boolean;
  getHasCounter: () => boolean;
  getCounterValue: () => string;
  hasExclamation: () => boolean;
  isFocusedStyle: () => boolean;
  isSizeSmall: () => boolean;
  isHoveredStyle: () => boolean;
  isFocus: () => boolean;
  getStyle: () => CSSStyleDeclaration;
  getAriaLabel: () => string;
  getAriaControls: () => string;
  getAriaDescribedby: () => string;
  getTooltipDataHook: () => string;
  getTooltipElement: () => T;

  // Status
  hasStatus: (status: StatusIndications) => boolean;
  getStatusMessage: () => string | null;
}
