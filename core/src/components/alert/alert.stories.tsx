export default {
  title: "Alert",
};

export const Default = () => `
  <sen-alert color="info">
    Info alert
  </sen-alert>
  <sen-alert color="warning">
    Warning alert
  </sen-alert>
  <sen-alert color="danger">
    Danger alert
  </sen-alert>
`;

export const WithTitle = () => `
  <sen-alert color="info">
    <div slot="title">Hello title</div>
    Info alert
  </sen-alert>
`;
