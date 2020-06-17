import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "sen-form-field",
  styleUrl: "form-field.scss",
  shadow: false,
})
export class FormField implements ComponentInterface {
  /**
   * Label of the form field
   */
  @Prop() label: string = "";

  render() {
    return (
      <Host>
        <sen-row>
          <sen-col xs="6" md="2">
            <label class="col-form-label">{this.label}</label>
          </sen-col>
          <sen-col xs="6" md="10">
            <slot />
          </sen-col>
        </sen-row>
      </Host>
    );
  }
}
