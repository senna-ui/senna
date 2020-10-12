

export type Color = "primary" | "secondary" | "success" | "warning" | "danger";

// From: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
export type AutocompleteTypes =
  | "on"
  | "off"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "email"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "postal-code"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-area-code"
  | "tel-local"
  | "tel-extension"
  | "impp"
  | "url"
  | "photo";

export type TextFieldTypes =
  | "date"
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url"
  | "time";

export type TypeaheadOption = {
  id: string | number;
  label: string;
  shortcut?: string | undefined | null;
};

export type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextAlign = "right" | "center" | "left";
export type TextAligns = TextAlign | "justify";
export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";
export type FontWeight = "regular" | "bold" | "light";

export interface InputChangeEventDetail {
  value: string | undefined | null;
}

export interface OptionSelectedEvent {
  option: TypeaheadOption;
}

export type TableHeaders = TableHeader[];

export type TableHeader = {
  value: string;
  textAlign?: TextAlign;
  key: string;
};

export type MenuItem = {
  label: string;
  [x: string]: unknown;
};
