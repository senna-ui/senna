```tsx
import React from "react";
import { SenSelect } from "@senna/react";

export const Example: React.FC = () => {

  const options = [
    {value: 1, label: "Option 1"},
    {value: 2, label: "Option 2"},
    {value: 3, label: "Option 3"},
  ]

  return <SenSelect options={options} />
}
```