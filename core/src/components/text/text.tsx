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


  /**
   * The text alignment
   *
   * Default is left
   */
  @Prop() align: "left" | "right" | "center" | "justify" = "left";

  render() {
    const TextTag = this.kind;
    const classes = {
      [`font-weight-${this.weight}`]: true,
      [`text-align-${this.align}`]: true
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
