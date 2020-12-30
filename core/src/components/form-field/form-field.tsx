import type { ComponentInterface } from "@stencil/core";
import { Component, Host, Prop, h } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "qBapaVj" }
 * @docsMenu { "group": "forms", "subGroup": "formField" }
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
  @Prop() label = "";

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
