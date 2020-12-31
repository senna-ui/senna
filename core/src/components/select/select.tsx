/* eslint-disable react/jsx-no-bind */
import type { ComponentInterface, EventEmitter } from "@stencil/core";
import {
  Component,
  Host,
  h,
  State,
  Prop,
  Event,
  Watch,
  Method,
} from "@stencil/core";

export type SelectOption = {
  label: string;
  value: SelectValue;
};

export type SelectValue = string | number | undefined | null;

/**
 * @docsMenu { "group": "forms" }
 */
let selectIds = 0;
@Component({
  tag: "sen-select",
  styleUrl: "select.scss",
  scoped: true,
})
export class Select implements ComponentInterface {
  private nativeInput?: HTMLInputElement;
  private selectId = `sen-select-${selectIds++}`;

  @State() hasFocus = false;

  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled = false;

  /**
   * Label for the select
   */
  @Prop() label = "";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.selectId;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * Set to true to disallow empty selections
   */
  @Prop() required = false;

  /**
   * Label of empty option
   */
  @Prop() emptyLabel = "-";

  /**
   * The value of the input.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true }) value?: SelectValue;

  /**
   * Select options to display
   */
  @Prop() options: SelectOption[] = [];

  /**
   * Update the native input element when the value changes
   */
  @Watch("value")
  protected valueChanged() {
    this.senChange.emit({ value: this.value });
  }

  /**
   * Emitted when input is changed
   */
  @Event() senChange!: EventEmitter<{ value: SelectValue }>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() senInput!: EventEmitter<MouseEvent>;

  /**
   * Sets focus on the specified input. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || null;
    }
    this.senInput.emit(ev as MouseEvent);
  };

  render() {
    const elementClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
    };
    return (
      <Host>
        <div class="select-wrapper">
          <select
            onInput={this.onInput}
            class={elementClass}
            name={this.name}
            disabled={this.disabled}
          >
            <option disabled={this.required}>{this.emptyLabel}</option>
            {this.options.map((option) => (
              <option
                value={option.value?.toString()}
                selected={option?.value?.toString() === this.value?.toString()}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </Host>
    );
  }
}
