import React from "react";

export default function FunctionUi(props) {
   const renderInputs = (num) => {
      const inputs = [];
      for (let i = 0; i < num; i += 1) {
         inputs.push(
            <input type="text" className="form-control inline-action" />
         );
      }
      return inputs;
   };

   return (
      <div className="col-12 col-lg-8 offset-lg-2 mb-5">
         <p className="name">
            <b>{props.theUi.name}</b>
            {props.theUi.desc}
         </p>
         <pre style={{ display: "none" }}>
            <code></code>
         </pre>
         <div className="actions float-right">
            {renderInputs(props.theUi.inputs)}
            <button className="btn btn-primary inline-action">Run</button>
         </div>
         <div className="clearfix mb-3"></div>
         <div className="alert alert-primary" style={{ display: "none" }}></div>
         <div className="alert alert-danger" style={{ display: "none" }}></div>
      </div>
   );
}
