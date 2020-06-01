import React from "react";

export default function FunctionUi(props) {
   const renderInputs = (num) => {
      const inputs = [];
      for (let i = 0; i < num; i += 1) {
         const id = `input-${props.name}-${i}`;

         inputs.push(
            <input
               type="text"
               className="form-control inline-action"
               key={id}
               id={id}
            />
         );
      }
      //console.log(inputs);
      return inputs;
   };
   console.log(props.searched);
   // const matchedPart = (props) => {
   //    if (props.name.includes(props.searched)) {
   //       return <span style={{ color: "red" }}>{props.searched}</span>;
   //    }
   // };
   const fuckYeahBitch = (props) => {
      const propsNameLowerCase = props.name.toLowerCase();
      const propsSearchedLowerCase = String(props.searched).toLowerCase();
      if (propsNameLowerCase.includes(propsSearchedLowerCase)) {
         const regName = props.name;
         const newRegEx = new RegExp(props.searched, "gi");
         const nonGlobalRegEx = new RegExp(props.searched, "i");
         const wheresTheMatch = props.name.match(newRegEx);
         const indexAllMatches = newRegEx.exec(regName);

         const splitIt = regName.split(newRegEx);
         const getItinThere = splitIt.flatMap((value, index, array) => {
            if (array.length - 1 !== index) {
               return [value, wheresTheMatch[0]];
            } else return value;
         });
         const makeObjects = [];
         for (let wow = 0; wow < getItinThere.length; wow += 1) {
            if (getItinThere[wow] === wheresTheMatch[0]) {
               makeObjects.push({
                  string: getItinThere[wow],
                  partOfSentence: false,
                  isMatch: true,
               });
            } else {
               makeObjects.push({
                  string: getItinThere[wow],
                  partOfSentence: true,
                  isMatch: false,
               });
            }
         }
         const newArr = [];
         for (let things = 0; things < makeObjects.length; things += 1) {
            if (makeObjects[things].isMatch === true) {
               newArr.push(
                  <span
                     style={{ color: "red" }}
                     key={props.name + Math.random()}
                  >
                     {makeObjects[things].string}
                  </span>
               );
            } else {
               newArr.push(makeObjects[things].string);
            }
         }
         console.log(wheresTheMatch);
         return newArr;
      } else {
         return props.name;
      }
   };
   return (
      <div className="col-12 col-lg-8 offset-lg-2 mb-5">
         <p className="name">
            <b>{fuckYeahBitch(props)}</b>
            {props.desc}
         </p>
         <pre style={{ display: "none" }}>
            <code></code>
         </pre>
         <div className="actions float-right">
            {renderInputs(props.inputs)}
            <button className="btn btn-primary inline-action">Run</button>
         </div>
         <div className="clearfix mb-3"></div>
         <div className="alert alert-primary" style={{ display: "none" }}></div>
         <div className="alert alert-danger" style={{ display: "none" }}></div>
      </div>
   );
}
