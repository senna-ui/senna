import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';

import { AutocompleteTypes, Color, InputChangeEventDetail, } from '../../interface';

let selectIds = 0;

@Component({
  tag: "sen-select",
  styleUrl: "select.scss",
  scoped: true,
})
export class Select implements ComponentInterface {
  private nativeSelect?: HTMLSelectElement;
  private selectId = `sen-select-${selectIds++}`;
  private tabindex?: string | number;

  @State() hasFocus = false;

  @Element() el!: HTMLSenInputElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: AutocompleteTypes = "off";

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
   */
  @Prop() debounce = 0;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * A hint to the browser for which enter key to display.
   * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
   * `"previous"`, `"search"`, and `"send"`.
   */
  @Prop() enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * If `true`, the user can enter more than one value.
   */
  @Prop() multiple?: boolean;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.selectId;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = "";

  /**
   * Update the native input element when the value changes
   */
  @Watch("value")
  protected valueChanged() {
    this.senChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }

  /**
   * Emitted when input is changed
   */
  @Event() senChange!: EventEmitter<InputChangeEventDetail>;

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeSelect) {
      this.nativeSelect.focus();
    }
  }

  render() {
    const labelId = this.selectId + "-lbl";

    return (
      <Host>
        <select
          class="native-select"
          ref={(input) => (this.nativeSelect = input)}
          aria-labelledby={labelId}
          disabled={this.disabled}
          autoFocus={this.autofocus}
          autoComplete={this.autocomplete}
          name={this.name}
          required={this.required}
          tabindex={this.tabindex}
        >
          {[1,2,3].map(() => <option></option>)}
        </select>
      </Host>
    );
  }
}
