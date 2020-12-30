
import {  State, Prop, EventEmitter, Event, Watch, Method } from '@stencil/core';

export abstract class InputComponent<T> {
  protected nativeInput?: HTMLInputElement;

  @State() hasFocus = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * The value of the input.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true }) value?: T = this.getDefaultValue();

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
  @Event() senChange!: EventEmitter<{ value: T | undefined }>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() senInput!: EventEmitter<KeyboardEvent>;

  /**
   * Sets focus on the specified `sen-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  protected abstract getDefaultValue(): T
}
