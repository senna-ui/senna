export default {
  title: "Button",
};

export const Default = () => "<sen-button>My Button</sen-button>";

export const Colors = () => `
  <sen-app>
    <sen-button color="primary">Primary</sen-button>
    <sen-button color="secondary">Secondary</sen-button>
    <sen-button color="success">Success</sen-button>
    <sen-button color="info">Info</sen-button>
    <sen-button color="warning">Warning</sen-button>
  </sen-app>
`;

export const Disabled = () => `
  <sen-app>
    <sen-button>My button</sen-button>
    <br><br>
    <sen-button disabled>My button disabled</sen-button>
    <br><hr><br>
    <sen-button color="primary">Primary</sen-button>
    <br><br>
    <sen-button color="primary" disabled>Primary disabled</sen-button>
    <br><hr><br>
    <sen-button color="secondary">Secondary</sen-button>
    <br><br>
    <sen-button color="secondary" disabled>Secondary disabled</sen-button>
    <br><hr><br>
    <sen-button color="success">Success</sen-button>
    <br><br>
    <sen-button color="success" disabled>Success disabled</sen-button>
    <br><hr><br>
    <sen-button color="info">Info</sen-button>
    <br><br>
    <sen-button color="info" disabled>Info disabled</sen-button>
    <br><hr><br>
    <sen-button color="warning">Warning</sen-button>
    <br><br>
    <sen-button color="warning" disabled>Warning disabled</sen-button>
    <br><br>
  </sen-app>
`;
