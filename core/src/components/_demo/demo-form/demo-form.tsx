import { Component, Host, h } from "@stencil/core";

import type { RadioOption } from "../../radio/radio";

const genderOptions: RadioOption[] = [
  { label: "Female", value: "f" },
  { label: "Male", value: "m" },
  { label: "Other", value: "n/a" },
];

const countryOptions = [
  { value: "at", label: "Austria" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "it", label: "Italy" },
  { value: "li", label: "Lichtenstein" },
  { value: "ch", label: "Switzerland" },
];

@Component({
  tag: "demo-form",
  shadow: true,
})
export class DemoForm {
  render() {
    return (
      <Host>
        <form>
          <sen-fieldset legend="Contact Information">
            <sen-form-field label="First name">
              <sen-input type="text" />
            </sen-form-field>
            <sen-form-field label="Last name">
              <sen-input type="text" />
            </sen-form-field>
            <sen-form-field label="Email">
              <sen-input type="text" />
            </sen-form-field>
            <sen-form-field label="Gender">
              <sen-radio options={genderOptions} />
            </sen-form-field>
            <sen-form-field label="Role">
              <sen-input type="text" disabled value="admin" />
            </sen-form-field>
            <sen-form-field label="Country">
              <sen-select options={countryOptions} />
            </sen-form-field>
            <sen-form-field>
              <sen-checkbox label="Subscribe to newsletter" />
            </sen-form-field>
            <sen-form-field>
              <sen-button color="primary" type="submit">
                Submit
              </sen-button>
            </sen-form-field>
          </sen-fieldset>
        </form>
      </Host>
    );
  }
}
