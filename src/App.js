import React from "react";
import "./style/master.scss"; //import my custom bootstrap
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUi";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   //constructor happens before page is constructed
   constructor() {
      super();
      console.log(uiData);
      this.state = {
         isFavoritesChecked: false,
         allFunctions: uiData,
         displayedFunctions: uiData,
      };
   }

   toggleFavorites(e) {
      this.setState({ isFavoritesChecked: !this.state.isFavoritesChecked });
      const userInput = e.target.id;
      console.log(userInput);
      const allFunctions = [...this.state.allFunctions];
      if (userInput == "viewmode-favorites") {
         const filteredByFavorites = allFunctions.filter((func) => {
            return func.isFavoritem === true;
         });
         console.log(filteredByFavorites);
         this.setState({ displayedFunctions: filteredByFavorites });
      } else {
         this.setState({ displayedFunctions: allFunctions });
      }
   }

   //render happens after the page is rendered
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Utility Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {uiData.length}&nbsp;functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewmode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewmode-all"
                     >
                        Show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewmode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewmode-favorites"
                     >
                        Favorites
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search-all-functions"
                           aria-label="Search-all-functions"
                           aria-describedby="search-input"
                           id="search-input"
                        />
                     </div>
                     <div className="col-6">
                        <form>
                           <select className="form-control">
                              <option>Most recent</option>
                              <option>Oldest</option>
                              <option>A - Z</option>
                              <option>Z - A</option>
                           </select>
                        </form>
                     </div>
                  </div>
               </div>
               {this.state.displayedFunctions.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
