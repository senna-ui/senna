import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "sen-col",
  styleUrl: "col.scss",
  shadow: false,
})
export class Col implements ComponentInterface {
  /**
   * X-small column width
   */
  @Prop() xs?: string | number;
  /**
   * Small column width
   */
  @Prop() sm?: string | number;
  /**
   * Medium column width
   */
  @Prop() md?: string | number;
  /**
   * Large column width
   */
  @Prop() lg?: string | number;
  /**
   * X-Large column width
   */
  @Prop() xl?: string | number;

  render() {
    const classes = {
      col: true,
      [`col-xs-${this.xs}`]: Boolean(this.xs),
      [`col-sm-${this.sm}`]: Boolean(this.sm),
      [`col-md-${this.md}`]: Boolean(this.md),
      [`col-lg-${this.lg}`]: Boolean(this.lg),
      [`col-xl-${this.xl}`]: Boolean(this.xl),
    };
    return (
      <Host class={classes}>
        <slot></slot>
      </Host>
    );
  }
}
