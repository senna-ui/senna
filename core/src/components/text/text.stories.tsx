export default {
  title: "Text",
};

export const HtmlElements = () => `
  <sen-app>
    <sen-text>Element default is a p element</sen-text>
    <sen-text tag="p">Element p</sen-text>
    <sen-text tag="h1">Element h1</sen-text>
    <sen-text tag="h2">Element h2</sen-text>
    <sen-text tag="h3">Element h3</sen-text>
    <sen-text tag="h4">Element h4</sen-text>
    <sen-text tag="h5">Element h5</sen-text>
    <sen-text tag="h6">Element h6</sen-text>
  </sen-app>
`;

export const FontWeights = () => `
  <sen-app>
    <sen-text weight="light" kind="p">Element p light</sen-text>
    <sen-text weight="regular" kind="p">Element p regular</sen-text>
    <sen-text weight="bold" kind="p">Element p bold</sen-text>

    <sen-text weight="light" kind="h1">Element h1 light</sen-text>
    <sen-text weight="regular" kind="h1">Element h1 regular</sen-text>
    <sen-text weight="bold" kind="h1">Element h1 bold</sen-text>

    <sen-text weight="light" kind="h2">Element h2 light</sen-text>
    <sen-text weight="regular" kind="h2">Element h2 regular</sen-text>
    <sen-text weight="bold" kind="h2">Element h2 bold</sen-text>

    <sen-text weight="light" kind="h3">Element h3 light</sen-text>
    <sen-text weight="regular" kind="h3">Element h3 regular</sen-text>
    <sen-text weight="bold" kind="h3">Element h3 bold</sen-text>

    <sen-text weight="light" kind="h4">Element h4 light</sen-text>
    <sen-text weight="regular" kind="h4">Element h4 regular</sen-text>
    <sen-text weight="bold" kind="h4">Element h4 bold</sen-text>

    <sen-text weight="light" kind="h5">Element h5 light</sen-text>
    <sen-text weight="regular" kind="h5">Element h5 regular</sen-text>
    <sen-text weight="bold" kind="h5">Element h5 bold</sen-text>

    <sen-text weight="light" kind="h6">Element h6 light</sen-text>
    <sen-text weight="regular" kind="h6">Element h6 regular</sen-text>
    <sen-text weight="bold" kind="h6">Element h6 bold</sen-text>
  </sen-app>
`;

export const TextAlignment = () => `
  <sen-app>
    <sen-text align="left">Left aligned text.</sen-text>
    <sen-text align="right">Right aligned text.</sen-text>
    <sen-text align="center">Center aligned text.</sen-text>
    <sen-text align="justify">Justify aligned text.</sen-text>
  </sen-app>
`;

export const LetterSpacing = () => `
  <sen-app>
    <sen-text>normal letter spacing</sen-text>
    <sen-text letter-spacing="1px">1px letter spacing</sen-text>
    <sen-text letter-spacing="2px">2px letter spacing</sen-text>
    <sen-text letter-spacing="3px">3px letter spacing</sen-text>
    <sen-text letter-spacing="4px">4px letter spacing</sen-text>
  </sen-app>
`;

export const TextTransform = () => `
  <sen-app>
    <sen-text>normal Text transform</sen-text>
    <sen-text text-transform="capitalize">capitalize Text transform</sen-text>
    <sen-text text-transform="uppercase">uppercase Text transform</sen-text>
    <sen-text text-transform="lowercase">lowercase Text transform</sen-text>
    <sen-text text-transform="full-width">full-width Text transform</sen-text>
  </sen-app>
`;
