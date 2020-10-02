export default {
  title: "Text",
};


export const HtmlElements = () => `
  <sen-app>
    <sen-text>Element default</sen-text>
    <sen-text kind="p">Element p</sen-text>
    <sen-text kind="h1">Element h1</sen-text>
    <sen-text kind="h2">Element h2</sen-text>
    <sen-text kind="h3">Element h3</sen-text>
    <sen-text kind="h4">Element h4</sen-text>
    <sen-text kind="h5">Element h5</sen-text>
    <sen-text kind="h6">Element h6</sen-text>
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
