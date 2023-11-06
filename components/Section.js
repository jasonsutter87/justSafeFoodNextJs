// components/Section.js
import React from 'react';
import { BuilderComponent } from '@builder.io/react';

function Section() {
  return (
    <div className="section">
      <h1>
        <BuilderComponent
          modelName="Section"
          contentFieldName="Title"
        />
      </h1>
      <p>
        <BuilderComponent
          modelName="Section"
          contentFieldName="Content"
        />
      </p>
    </div>
  );
}

export default Section;
