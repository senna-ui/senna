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

export type RadioOption = {
  label: string;
  value: RadioValue;
};

export type RadioValue = string | number | undefined | null;

/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
let radioIds = 0;
@Component({
  tag: "sen-radio",
  styleUrl: "radio.scss",
  scoped: true,
})
export class Radio implements ComponentInterface {
  private nativeInput?: HTMLInputElement;
  private radioId = `sen-radio-${radioIds++}`;

  @State() hasFocus = false;

  /**
   * If `true`, the user cannot interact with the radio.
   */
  @Prop() disabled = false;

  /**
   * Label for the radio
   */
  @Prop() label = "";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.radioId;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * The value of the input.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true }) value?: RadioValue;

  /**
   * Radio options to display
   */
  @Prop() options: RadioOption[] = [];

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
  @Event() senChange!: EventEmitter<{ value: RadioValue }>;

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
      "radio-group": true,
    };
    return (
      <Host>
        <div class={elementClass}>
          <span class="label-text">
            {this.label ? this.label : <slot></slot>}
          </span>
          {this.options.map((option) => (
            <label
              class={{
                container: true,
                checked: this.value === option.value?.toString(),
              }}
            >
              <input
                type="radio"
                class="native-radio"
                name={this.name}
                value={option.value?.toString()}
                disabled={this.disabled}
                readOnly={this.readonly}
                onInput={(e) => this.onInput(e)}
                checked={this.value === option.value?.toString()}
              />
              <span class="checkmark"></span>
              {option.label}
            </label>
          ))}
        </div>
      </Host>
    );
  }
}
