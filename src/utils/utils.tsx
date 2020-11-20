import React from "react";

export default class utils {
   // Counting cards
   static countingCards(card: string | number) {
      let count = 0;

      switch (card) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count += 1;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count -= 1;
            break;
         default:
            return;
      }
      if (count > 0) {
         return count + " Bet";
      } else {
         return count + " Hold";
      }
   }

   //generate random whole numbers within range
   static randomRange(myMin: number, myMax: number) {
      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
   }

   //Check For The Presence of an Element With indexOf()
   static checking(theArray: any[], searchForThis: any) {
      if (theArray.indexOf(searchForThis) !== -1) {
         return "It's in there all right";
      } else return "Oh no I can't find it";
   }

   //return the square of all integers in an array
   static squaring(arr: any[]) {
      const onlyPositive = arr.filter(
         (num) => num > 0 && Number.isInteger(num)
      );
      const onlysquared = onlyPositive.map((nums) => nums * nums);
      return onlysquared;
   }

   //Sort an Array Alphabetically using the sort Method
   static alphabeticalOrder(arr: string[]) {
      return arr.sort(function (a, b) {
         return a === b ? 0 : a < b ? -1 : 1;
      });
   }

   //Apply statical Programming to Convert Strings to URL Slugs
   static urlSlug(title: string) {
      return title.toLowerCase().trim().split(/\s+/).join("-");
   }

   //Convert Celsius to Fahrenheit
   static convertToF(celsius: number) {
      const fahrenheit = (celsius * 9) / 5 + 32;
      return fahrenheit;
   }

   //Convert Fahrenheit to Celsius
   static convertToC(fahrenheit: number) {
      const celcius = (fahrenheit * 5) / 9 - 32;
      return celcius;
   }

   //Factorialize a Number
   static factorialize(num: number) {
      if (num !== 0) {
         let arr = [num];
         for (let nums = 1; nums < num; nums += 1) {
            arr.push(nums);
         }
         return arr.reduce((a, b) => a * b);
      } else {
         return 1;
      }
   }

   //Find the Longest Word in a String
   static findLongestWordLength(str: string) {
      let arr = str.split(" ");
      let newStr = arr.reduce((a, b) => {
         return a.length > b.length ? a : b;
      });

      return newStr;
   }

   //Return Largest Numbers in Arrays
   static largestOfFour(arr: number[]) {
      let newThing: number[] | number;
      newThing = arr.reduce((a, b) => {
         return a > b ? a : b;
      });
      return newThing;
   }

   //Truncate a String
   static truncateString(str: string, num: number) {
      if (str.length > num) {
         return str.slice(0, num) + "...";
      }
      return str;
   }

   // Title Case a Sentence
   static titleCase(str: string) {
      let newList = str.toLowerCase().split(" ");
      let largeLet = [];
      for (let nums = 0; nums < newList.length; nums += 1) {
         largeLet.push(
            newList[nums].replace(
               newList[nums].charAt(0),
               newList[nums].charAt(0).toUpperCase()
            )
         );
      }
      return largeLet.join(" ");
   }

   // // Remove Whitespace from Start and End
   static iHateWhiteSpace(string: string) {
      const wsRegex = /^\s+|\s+$/g;
      return string.replace(wsRegex, "");
   }

   //
   //This function takes in a Searched term and a Function name, a style object,
   //and a key because it's meant to render a React component. It's order of operations
   //are: finds where the match between the two, then returns an array
   //which consists of the original function name string, split into an array,
   //with span Elements around the characters which matched the Searched term.
   //it is then returned, and rendered.
   static highlightSearchedText = (
      searchTerm: string,
      miscTerm: string,
      styleObj: {},
      key: string | number
   ) => {
      //turn the input-text lowercase, and the function-name to lowercase
      //so I can see where the match is
      if (searchTerm !== "") {
         const propsNameLowerCase = miscTerm.toLowerCase();
         const propsSearchedLowerCase = String(searchTerm).toLowerCase();
         //make sure the searchTerm is actually in the miscTerm
         if (propsNameLowerCase.includes(propsSearchedLowerCase)) {
            //
            const regName = miscTerm;
            const newRegEx = new RegExp(searchTerm, "gi");
            //
            // finds all matches of what was searched
            // and adds their index to arrOfIndexes
            let arrOfIndexes = [];
            miscTerm.replace(newRegEx, function (match: string, index: number) {
               arrOfIndexes.push(index);
               return match;
            });
            //
            //make new array of each matching character(s)
            const arrOfMatchingLetters = arrOfIndexes.map((index, i) => {
               return regName.slice(index, index + searchTerm.length);
            });
            //
            //split name of function at every matched character
            const arrFromSplitString = regName.split(newRegEx);
            //
            //combine every instance of not-matching, with it's adjacent matching
            //character(s), then flatten out into one array seperating all non-matching
            //character(s) with the properly ordered matching character(s)- each
            //matching character(s) with a span around it/them
            const arrWithSpannedCharacters = arrFromSplitString.flatMap(
               (string, index) => {
                  if (arrOfMatchingLetters[index]) {
                     return [
                        string,
                        <span
                           style={styleObj}
                           // eslint-disable-next-line
                           key={`${key}` + `${Math.random()}`}
                        >
                           {arrOfMatchingLetters[index]}
                        </span>,
                     ];
                  } else return [string];
               }
            );
            //
            return arrWithSpannedCharacters;
         } else {
            return miscTerm;
         }
      } else {
         return miscTerm;
      }
   };
}
