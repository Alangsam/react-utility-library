import React from "react";
import utils from "../utils/utils.tsx";
import helpers from "../utils/helpers";

export default class FunctionUi extends React.Component {
   constructor() {
      super();
      this.state = {
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "You did something Wrong",
      };
   }

   toggleCodeDisplay() {
      this.setState({ isCodeDisplayed: !this.state.isCodeDisplayed });
   }
   getUserInput() {
      const props = this.props;
      const listOfInputsAsObjects = [];
      for (let i = 0; i < props.inputs; i += 1) {
         const element = helpers.convertDataType(
            document.getElementById(`input-${props.name}-${i}`).value
         );
         listOfInputsAsObjects.push(element);
      }
      //console.log(listOfInputsAsObjects);
      const resultOfValuesInFunctions = utils[props.name](
         ...listOfInputsAsObjects
      );
      this.setState({ isResultDisplayed: true });
      if (resultOfValuesInFunctions === "") {
         return this.setState({
            result: "You did something Wrong",
         });
      } else {
         return this.setState({
            result: JSON.stringify(resultOfValuesInFunctions),
         });
      }
   }

   render() {
      //When converting state-less Class to Stateful in React,
      //must change every instance of props to this.props
      const props = this.props;

      //This function, for every input passed in by props, renders
      //an Input element with an unique ID and KEY
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

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <p
               className="name"
               onClick={() => {
                  this.toggleCodeDisplay();
               }}
            >
               <b>
                  {utils.highlightSearchedText(
                     props.searched,
                     props.name,
                     {
                        color: "red",
                     },
                     "orange"
                  )}
               </b>
               {props.desc}
            </p>
            {this.state.isCodeDisplayed && (
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )}

            <div className="actions float-right">
               {renderInputs(props.inputs)}
               <button
                  className="btn btn-primary inline-action"
                  onClick={() => {
                     this.getUserInput();
                  }}
               >
                  Run
               </button>
            </div>
            <div className="clearfix mb-3"></div>
            {this.state.isResultDisplayed && (
               <div className="alert alert-primary">{this.state.result}</div>
            )}
         </div>
      );
   }
}
