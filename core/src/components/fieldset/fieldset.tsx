import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

/**
 * @docsCodePen { "user": "senna-ui", "id": "qBapaVj" }
 * @docsMenu { "group": "forms", subGroup: "fieldset" }
 */
@Component({
  tag: "sen-fieldset",
  styleUrl: "fieldset.scss",
  shadow: true,
})
export class Fieldset implements ComponentInterface {
  /**
   * Legend describing the fieldset
   */
  @Prop() legend?: string;
  render() {
    return (
      <Host>
        {this.legend && <legend>{this.legend}</legend>}
        <sen-grid>
          <slot />
        </sen-grid>
      </Host>
    );
  }
}
