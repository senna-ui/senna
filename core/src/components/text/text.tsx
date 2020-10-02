import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";
import { TextKind } from "../../interface";


@Component({
  tag: "sen-text",
  styleUrl: "text.scss",
  shadow: true,
})
export class Text implements ComponentInterface {
  /**
   * The text block type
   *
   * One of `p`, `h1`, `h2`, `h3`, `h4`, `h5`
   */
  @Prop() kind: TextKind = 'p';

  /**
   * The font weight
   *
   * One of `regular`, `bold`, `light`
   */
  @Prop() weight: "regular" | "bold" | "light" = "regular";

  render() {
    const TextTag = this.kind;
    const classes = {
      [`font-weight-${this.weight}`]: true
    };

    return (
      <Host>
        <TextTag class={classes}>
          <slot />
        </TextTag>
      </Host>
    );
  }
}
