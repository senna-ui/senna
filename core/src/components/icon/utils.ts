import { getAssetPath } from "@stencil/core";

export const getUrl = (iconName : string) : string => {
  iconName = iconName.toLowerCase();

  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|_|\d/gi, "");
  if (invalidChars !== "") {
    throw new Error("Invalid characeters in icon name: " + iconName);
  }

  return getAssetPath(`svg/ic_${iconName}_24px.svg`);
};


export const isStr = (val: any): val is string => typeof val === "string";
