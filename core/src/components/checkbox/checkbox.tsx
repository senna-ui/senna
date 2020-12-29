/* eslint-disable react/jsx-no-bind */
import { Component, Host, h, ComponentInterface, State, Prop, EventEmitter, Event, Watch, Method } from '@stencil/core';

/**
 * @docsMenu { "group": "forms" }
 */

let checkboxIds = 0;
@Component({
  tag: 'sen-checkbox',
  styleUrl: 'checkbox.scss',
  scoped: true,
})
export class Checkbox implements ComponentInterface  {
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
    const value = typeof this.value === 'undefined' ? false : this.value;
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
    this.senChange.emit({ value: this.value })
  }

  private checkbox() {
    return (
      <svg viewBox="1 1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4zm3-1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"/>
          {this.value && this.checkMark()}
        </g>
      </svg>
    );
  }

  private checkMark() {
    return (
      <path d="M10.863 17c-.303 0-.595-.14-.786-.379l-2.873-3.614c-.336-.423-.246-1.018.191-1.342a1.013 1.013 0 0 1 1.392.184l2.008 2.543c1.28-1.883 3.872-5.563 5.522-7.121a1.03 1.03 0 0 1 1.402.01.943.943 0 0 1-.01 1.353c-2.066 1.948-5.97 7.868-6.016 7.922a.998.998 0 0 1-.796.444h-.034z"/>
    );
  }

  render() {
    const labelClass = {
      disabled: this.disabled,
      readonly: this.readonly,
      focused: this.hasFocus
    }
    return (
      <Host>
        <label
          id={`${this.checkboxId}-label`}
          onClick={this.toggle}
          class={labelClass}
        >
          {this.checkbox()}
          <span class="label-text">
            {this.label ? this.label : <slot></slot>}
          </span>
          <input
            class="native-checkbox"
            id={this.checkboxId}
            name={this.name}
            ref={(input) => (this.nativeInput = input)}
            onInput={this.onInput}
            disabled={this.disabled}
            readOnly={this.readonly}
            tabindex="-1"
            checked={this.value}
            aria-labelledby={`${this.checkboxId}-label`}
            type="checkbox"
          />
        </label>
      </Host>
    );
  }

}
