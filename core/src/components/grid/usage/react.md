```tsx
import React from "react";
import { SenGrid, SenRow, SenCol, SenContent } from "@senic/react";

export const GridExample: React.FC = () => (
  <SenContent>
    <SenGrid>
      <SenRow>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="6">sen-col size="6"</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol>sen-col</SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="3">sen-col size="3"</SenCol>
        <SenCol>sen-col</SenCol>
        <SenCol size="3">sen-col size="3"</SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="3">sen-col size="3"</SenCol>
        <SenCol size="3" offset="3">
          sen-col size="3" offset="3"
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol>sen-col</SenCol>
        <SenCol>
          sen-col
          <br />#
        </SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol className="sen-align-self-start">sen-col start</SenCol>
        <SenCol className="sen-align-self-center">sen-col center</SenCol>
        <SenCol className="sen-align-self-end">sen-col end</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow className="sen-align-items-start">
        <SenCol>start sen-col</SenCol>
        <SenCol>start sen-col</SenCol>
        <SenCol className="sen-align-self-end">start sen-col end</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow className="sen-align-items-center">
        <SenCol>center sen-col</SenCol>
        <SenCol>center sen-col</SenCol>
        <SenCol>center sen-col</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow className="sen-align-items-end">
        <SenCol>end sen-col</SenCol>
        <SenCol className="sen-align-self-start">end sen-col start</SenCol>
        <SenCol>end sen-col</SenCol>
        <SenCol>
          sen-col
          <br />#
          <br />#
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
        <SenCol size="12" size-sm>
          sen-col size="12" size-sm
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
        <SenCol size="12" size-md>
          sen-col size="12" size-md
        </SenCol>
      </SenRow>

      <SenRow>
        <SenCol size="6" size-lg offset="3">
          sen-col size="6" size-lg offset="3"
        </SenCol>
        <SenCol size="3" size-lg>
          sen-col size="3" size-lg
        </SenCol>
      </SenRow>
    </SenGrid>
  </SenContent>
);
```
