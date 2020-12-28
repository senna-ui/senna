import { Component, ComponentInterface, Host, h, Prop, State, Watch  } from "@stencil/core";

import { getSvgContent, senIconContent } from './request';
import { getUrl } from './utils';

@Component({
  tag: "sen-icon",
  styleUrl: "icon.scss",
  shadow: true,
  assetsDirs: ["svg"],
})
export class Icon implements ComponentInterface {
  /**
   * Icon to display.
   */
  @Prop() name: string = "";
 /**
   * The color to use for the background of the icon.
   */
  @Prop() color?: string;;

  /**
   * When set to `false`, SVG content that is HTTP fetched will not be checked
   * if the response SVG content has any `<script>` elements, or any attributes
   * that start with `on`, such as `onclick`.
   * @default true
   */
  @Prop() sanitize = true;

  @State() private svgContent?: string;

  componentWillRender() {
    this.loadIcon()
  }

  @Watch('name')
  loadIcon() {
    const url = getUrl(this.name);
    if (!url) return

    if (senIconContent.has(url)) {
      // sync if it's already loaded
      this.svgContent = senIconContent.get(url);
    } else {
      // async if it hasn't been loaded
      getSvgContent(url, this.sanitize).then(() => (this.svgContent = senIconContent.get(url)));
    }

  }


  render() {
    return (
      <Host
        role="img"
        class={{
          "sen-icon": true,
          ...createColorClasses(this.color),
        }}
      >
        <div class="icon-inner" innerHTML={this.svgContent}></div>
      </Host>
    );
  }
}

const createColorClasses = (color: string | undefined) => {
  return color
    ? {
        'ion-color': true,
        [`ion-color-${color}`]: true,
      }
    : null;
};
