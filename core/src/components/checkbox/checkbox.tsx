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

let checkboxIds = 0;
/**
 * @docsMenu { "group": "forms", "subGroup": "input" }
 */
@Component({
  tag: "sen-checkbox",
  styleUrl: "checkbox.scss",
  scoped: true,
})
export class Checkbox implements ComponentInterface {
  private nativeInput?: HTMLInputElement;
  private checkboxId = `sen-checkbox-${checkboxIds++}`;

  @State() hasFocus = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * Label for the checkbox
   */
  @Prop() label = "";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.checkboxId;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * The value of the input.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true }) value?: boolean = false;

  /**
   * Update the native input element when the value changes
   */
  @Watch("value")
  protected valueChanged() {
    const value = typeof this.value === "undefined" ? false : this.value;
    this.senChange.emit({ value });
  }

  /**
   * Emitted when input is changed
   */
  @Event() senChange!: EventEmitter<{ value: boolean }>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() senInput!: EventEmitter<MouseEvent>;

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
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
      this.value = Boolean(input.checked);
    }
    this.senInput.emit(ev as MouseEvent);
  };

  private toggle = (ev: Event) => {
    ev.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.value = !this.value;
    this.senChange.emit({ value: this.value });
  };

  render() {
    const labelClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus,
      container: true,
    };
    return (
      <Host>
        <label
          id={`${this.checkboxId}-label`}
          onClick={this.toggle}
          class={labelClass}
        >
          <input
            id={this.checkboxId}
            name={this.name}
            ref={(input) => (this.nativeInput = input)}
            onInput={this.onInput}
            disabled={this.disabled}
            readOnly={this.readonly}
            checked={this.value}
            aria-labelledby={`${this.checkboxId}-label`}
            type="checkbox"
          />
          <span class="checkmark"></span>
          {this.label ? this.label : <slot></slot>}
        </label>
      </Host>
    );
  }
}
