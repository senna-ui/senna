import type { ComponentInterface } from "@stencil/core";
import { Component, Host, h, Prop } from "@stencil/core";

import type {
  FontWeight,
  TextAlign,
  TextTag,
  TextTransform,
} from "../../interface";

/**
 * @docsMenu { "group": "typography" }
 */
@Component({
  tag: "sen-text",
  styleUrl: "text.scss",
  shadow: true,
})
export class Text implements ComponentInterface {
  /**
   * Element Tag
   */
  @Prop() tag: TextTag = "p";

  /**
   * Font weight
   */
  @Prop() weight: FontWeight = "regular";

  /**
   * [Text align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  @Prop() align: TextAlign | "justify" = "left";

  /**
   * [Leter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   */
  @Prop() letterSpacing = "normal";

  /**
   * [Text transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
   */
  @Prop() textTransform: TextTransform = "none";

  render() {
    const TextTag = this.tag;
    const classes = {
      [`font-weight-${this.weight}`]: true,
      [`text-align-${this.align}`]: true,
    };
    const { letterSpacing, textTransform } = this;

    return (
      <Host>
        <TextTag class={classes} style={{ letterSpacing, textTransform }}>
          <slot />
        </TextTag>
      </Host>
    );
  }
}
