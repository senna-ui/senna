export default {
  title: "Forms/Field",
};

export const Default = () => `
  <sen-form-field label="First name">
    <sen-input type="text"></sen-input>
  </sen-form-field>
  <sen-form-field label="Last name">
    <sen-input type="text"></sen-input>
  </sen-form-field>
`;

export const FullForm = () => `
  <form>
    <sen-fieldset legend="Contact Information">
      <sen-form-field label="First name">
        <sen-input type="text"></sen-input>
      </sen-form-field>
      <sen-form-field label="Last name">
        <sen-input type="text"></sen-input>
      </sen-form-field>
      <sen-form-field label="Option">
        <label>
          <sen-input type="radio" name="radio" value="1"></sen-input>Radio 1
        </label><br>
        <label>
          <sen-input type="radio" name="radio" value="2"></sen-input>Radio 2
        </label><br>
        <label>
          <sen-input type="radio" name="radio" value="3"></sen-input>Radio 3
        </label>
      </sen-form-field>
      <sen-form-field>
        <sen-button type="submit">Submit</sen-button>
        <sen-button color="secondary" type="button">Abort</sen-button>
      </sen-form-field>
    </sen-fieldset>
  </form>
`;
