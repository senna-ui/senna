```tsx
import React from "react";
import { SenRadio } from "@senna/react";

export const RadioExample: React.FC = () => {

  const radioOptions = [
    {value: 1, label: "Option 1"},
    {value: 2, label: "Option 2"},
    {value: 3, label: "Option 3"},
  ]

  return <SenRadio options={radioOptions} />
}
```