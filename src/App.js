import "./styles.css";

import React from "react";
import DataCapture from "./data-capture";
import PdfPreview from "./pdf-preview";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <DataCapture />
        </div>
        <div className="col-6">
          <PdfPreview />
        </div>
      </div>
    </div>
  );
}
