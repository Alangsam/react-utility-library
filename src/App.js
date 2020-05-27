import React from "react";
import "./style/master.scss"; //import my custom bootstrap
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUi";

export default class App extends React.Component {
   //constructor happens before page is constructed
   constructor() {
      super();
      console.log(uiData);
   }
   //render happens after the page is rendered
   render() {
      return (
         <div className="container">
            <div className="row">
               {uiData.map((functionUI) => {
                  return <FunctionUI theUi={functionUI} />;
               })}
            </div>
         </div>
      );
   }
}
