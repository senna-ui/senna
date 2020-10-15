import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "casaper", "id": "ExyPZBx" }
 * @docsMenu { "group": "forms" }
 */
@Component({
  tag: "sen-form-field",
  styleUrl: "form-field.scss",
  shadow: true,
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
          <sen-col size="2">
            <label class="form-label">{this.label}</label>
          </sen-col>
          <sen-col>
            <slot />
          </sen-col>
        </sen-row>
      </Host>
    );
  }
}
