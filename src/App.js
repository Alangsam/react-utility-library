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
         searchBox: 1,
         value: "default",
      };
   }
   //need to change the state of displayedfunxtions,
   //so its an actual list where the name is one with the span
   toggleFavorites(e) {
      const isFavoritesChecked = document.getElementById("viewmode-favorites")
         .checked;
      //console.log(isFavoritesChecked);
      const searchFunctionsInput = document.getElementById("search-input")
         .value;
      const allFunctions = [...this.state.allFunctions];
      if (isFavoritesChecked) {
         this.setState({ isFavoritesChecked: true });
         const filteredByFavorites = allFunctions.filter((func) => {
            return func.isFavorite === true;
         });
         console.log(filteredByFavorites);
         const filterWhatTheySearch = filteredByFavorites.filter((func) => {
            return (
               func.name
                  .toLowerCase()
                  .indexOf(searchFunctionsInput.toLowerCase()) >= 0
            );
         });
         this.setState({ displayedFunctions: filterWhatTheySearch });
      } else {
         this.setState({ isFavoritesChecked: false });
         const filterWhatTheySearch = allFunctions.filter((func) => {
            return (
               func.name
                  .toLowerCase()
                  .indexOf(searchFunctionsInput.toLowerCase()) >= 0
            );
         });
         this.setState({ displayedFunctions: filterWhatTheySearch });
      }
   }
   enterWhatSearched(e) {
      this.setState({
         searchBox: document.getElementById("search-input").value,
      });
   }

   changeTheOrderingOfFunctions(e) {
      const displayedFunctions = [...this.state.displayedFunctions];
      const orderByA = orderBy(displayedFunctions, "name", "asc");
      const orderByZ = orderBy(displayedFunctions, "name", "desc");
      const orderByRecent = orderBy(displayedFunctions, "order", "desc");
      const orderByOld = orderBy(displayedFunctions, "order", "asc");
      this.setState({ value: e.target.value });
      if (e.target.value === "alphaFirst") {
         this.setState({
            displayedFunctions: orderByA,
         });
      } else if (e.target.value === "zetaFirst") {
         this.setState({
            displayedFunctions: orderByZ,
         });
      } else if (e.target.value === "mostRecent") {
         this.setState({
            displayedFunctions: orderByRecent,
         });
      } else if (e.target.value === "oldestFirst") {
         this.setState({
            displayedFunctions: orderByOld,
         });
      } else if (e.target.value === "default") {
         this.setState({
            displayedFunctions: orderByOld,
         });
      }
      console.log(this.state.displayedFunctions);
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
                           onChange={(e) => {
                              this.toggleFavorites(e);
                              this.enterWhatSearched(e);
                           }}
                        />
                     </div>
                     <div className="col-6">
                        <form>
                           <select
                              className="form-control"
                              value={this.state.value}
                              onChange={(e) => {
                                 this.changeTheOrderingOfFunctions(e);
                              }}
                           >
                              <option value="default">Order By</option>
                              <option value="mostRecent">Most recent</option>
                              <option value="oldestFirst">Oldest</option>
                              <option value="alphaFirst">A - Z</option>
                              <option value="zetaFirst">Z - A</option>
                           </select>
                        </form>
                     </div>
                  </div>
               </div>
               {this.state.displayedFunctions.map((functionUI) => {
                  const name = functionUI.name;
                  const desc = functionUI.desc;
                  const inputs = functionUI.inputs;
                  const searched = this.state.searchBox;
                  //const { name, desc, inputs } = functionUI;

                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                        searched={searched}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
