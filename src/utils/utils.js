import React from "react";

export default class utils {
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   }

   //subract
   static subract(input1, input2) {
      var total = input1 - input2;
      return total;
   }

   //multiply
   static multiply(input1, input2) {
      var total = input1 * input2;
      return total;
   }

   // //divide
   static divide(input1, input2) {
      var total = input1 / input2;
      return total;
   }

   // //increment
   static increment(input) {
      var increased = ++input;
      return increased;
   }

   // //decrement
   static decrement(input) {
      var decreased = --input;
      return decreased;
   }

   // //multiply decimals
   static multDec(input1, input2) {
      var decResult = input1 * input2;
      return decResult;
   }

   // //divide decimals
   static divDec(input1, input2) {
      var divResult = input1 / input2;
      return divResult;
   }

   // //Concatenating Strings with Plus Operator
   static stringCon(string1, string2) {
      var bothstrings = string1 + " " + string2;
      return bothstrings;
   }

   // //Concatenating Strings with the Plus Equals Operator
   static stringConEq(string1, string2) {
      string1 += " " + string2;
      return string1;
   }

   // //Constructing Strings with Variables
   static mySentence(name) {
      var sentence = "Hey you're " + name;
      return sentence;
   }

   // //Find the Length of a String
   static findLength(string) {
      var lengthIs = string.length;
      return lengthIs;
   }

   // //Use Bracket Notation to Find the First Character in a String
   static firstGuy(string) {
      var firstLetter = string[0];
      return firstLetter;
   }

   // //Use Bracket Notation to Find the Nth Character in a String
   static nthGuy(string, n) {
      var anyThingGoes = string[n - 1];
      return anyThingGoes;
   }

   // //Use Bracket Notation to Find the Last Character in a String
   static lastGuy(string) {
      var num = string.length - 1;
      var newString = string[num];
      return newString;
   }

   // //Use Bracket Notation to Find the Nth-to-Last Character in a String
   static nthToLast(string, n) {
      var whateverWorks = string[string.length - n];
      return whateverWorks;
   }

   // //Manipulate Arrays With push()
   static pushIt(array, string) {
      array.push(string);
      return array;
   }

   // //Manipulate Arrays With pop()
   static popIt(array) {
      array.pop();
      return array;
   }

   // //Manipulate Arrays With shift()
   static shiftIt(array) {
      var hmmmmm = array.shift();
      return hmmmmm;
   }

   // //Manipulate Arrays With unshift()
   static unShiftIt(array, string) {
      array.unshift(string);
      return array;
   }

   // //Shopping List
   static shopping(input1, input2, input3, input4) {
      var theShopList =
         "I need to get " +
         input1 +
         ", " +
         input2 +
         ", " +
         input3 +
         ", and " +
         input4 +
         ".";
      return theShopList;
   }

   // //Stand in Line
   static movinOverOne(arr, item) {
      arr.push(item);
      arr.shift();

      return arr;
   }

   // Counting cards

   static countingCards(card) {
      var count = 0;

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

   // //Recorrd Collection

   // var collection = {
   //     2548: {
   //       album: "Slippery When Wet",
   //       artist: "Bon Jovi",
   //       tracks: [
   //         "Let It Rock",
   //         "You Give Love a Bad Name"
   //       ]
   //     },
   //     2468: {
   //       album: "1999",
   //       artist: "Prince",
   //       tracks: [
   //         "1999",
   //         "Little Red Corvette"
   //       ]
   //     },
   //     1245: {
   //       artist: "Robert Palmer",
   //       tracks: [ ]
   //     },
   //     5439: {
   //       album: "ABBA Gold"
   //     }
   //   };

   //   static updateRecords(id, prop, value) {
   //     if (prop !== "tracks" && value !== "") {
   //       collection[id][prop] = value;
   //     } else if (collection[id].hasOwnProperty("tracks") == false ) {
   //       collection[id][prop] = [];
   //       collection[id][prop].push(value);
   //     } else if (value == "") {
   //       delete collection[id][prop];
   //     } else {
   //       collection[id][prop].push(value)
   //     }

   //     return collection;
   //   }

   //   updateRecords(5439, "artist", "ABBA");

   // // Iterate odd numbers with a for loop
   // var myArray = [];
   // for (var nums = 1; nums < 10; nums += 2) {
   //   myArray.push(nums);
   // }

   //profile lookup
   // Setup

   static lookUpProfile(name, prop) {
      var contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];
      // Only change code below this line
      for (var nums = 0; nums < contacts.length; nums += 1) {
         if (
            contacts[nums].firstName === name ||
            contacts[nums].lastName === name
         ) {
            if (contacts[nums].hasOwnProperty(prop)) {
               return contacts[nums][prop];
            } else return "No such property";
         }
      }
      return "No such contact";
   }

   //generate random whole numbers within range
   static randomRange(myMin, myMax) {
      // Only change code below this line
      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
      // Only change code above this line
   }

   //  Remove Items Using splice() (gets rid of first and last)
   static splicin(anArray) {
      anArray.splice(0, 1);
      anArray.splice(-1, 1);
      return anArray;
   }

   //Add Items Using splice()  (adds "halfway" halfway through the array)

   static kindOfSplicin(myArray) {
      myArray.splice((myArray.length + 1) / 2, 0, "Halfway");
      return myArray;
   }

   //Check For The Presence of an Element With indexOf()
   static checking(theArray, searchForThis) {
      if (theArray.indexOf(searchForThis) !== -1) {
         return "It's in there all right";
      } else return "Oh no I can't find it";
   }

   //Use typeof to Check the Type of a Variable
   static gettinTheType(someVar) {
      return typeof someVar;
   }
   // Your statics go here!
   //Implement the filter Method on a Prototype

   static myFilter(Array) {
      // Only change code below this line
      var newArray = [];
      Array.forEach(function (x) {
         if (x % 2 === 1) {
            newArray.push(x);
         }
      });
      // Only change code above this line
      return newArray;
   }

   // let input1 = input2.myFilter(static (item) {
   //    return item % 2 === 1;
   // });

   //Return Part of an Array Using the slice Method
   static sliceArray(anim, beginSlice, endSlice) {
      // Only change code below this line
      var newArr = anim.slice(beginSlice, endSlice);
      return newArr;

      // Only change code above this line
   }
   // var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
   // sliceArray(inputAnim, 1, 3);

   //  Remove Elements from an Array Using slice Instead of splice
   static nonMutatingSplice(cities) {
      // Only change code below this line
      return cities.slice(0, 3);

      // Only change code above this line
   }
   // var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
   // nonMutatingSplice(inputCities);

   //Combine Two Arrays Using the concat Method
   static nonMutatingConcat(original, attach) {
      // Only change code below this line
      return original.concat(attach);

      // Only change code above this line
   }
   // var first = [1, 2, 3];
   // var second = [4, 5];
   // nonMutatingConcat(first, second);

   //Add Elements to the End of an Array Using concat Instead of push

   static nonMutatingPush(original, newItem) {
      // Only change code below this line
      return original.concat(newItem);

      // Only change code above this line
   }
   // var first = [1, 2, 3];
   // var second = [4, 5];
   // nonMutatingPush(first, second);

   static squaring(arr) {
      var onlyPositive = arr.filter((num) => num > 0 && Number.isInteger(num));
      var onlysquared = onlyPositive.map((nums) => nums * nums);
      return onlysquared;
   }

   //Sort an Array Alphabetically using the sort Method

   static alphabeticalOrder(arr) {
      // Only change code below this line
      return arr.sort(function (a, b) {
         return a === b ? 0 : a < b ? -1 : 1;
      });

      // Only change code above this line
   }

   //Split a String into an Array Using the split Method

   static splitify(str) {
      // Only change code below this line
      var newGuy = str.split("");
      return newGuy;
      // Only change code above this line
   }

   //Combine an Array into a String Using the join Method

   static sentensify(str) {
      // Only change code below this line
      return str.split("").join(" ");

      // Only change code above this line
   }

   //Apply statical Programming to Convert Strings to URL Slugs

   static urlSlug(title) {
      return title.toLowerCase().trim().split(/\s+/).join("-");
   }

   //Use the every Method to Check that Every Element in an Array Meets a Criteria

   static checkPositive(arr) {
      // Only change code below this line
      return arr.every((currentValue) => currentValue > 0);

      // Only change code above this line
   }

   //  Use the some Method to Check that AANNYY Elements in an Array Meet a Criteria

   static checkSomePositive(arr) {
      // Only change code below this line

      return arr.some((oneVal) => oneVal > 0);

      // Only change code above this line
   }

   // Your statics go here!
   //Convert Celsius to Fahrenheit
   static convertToF(celsius) {
      let fahrenheit = (celsius * 9) / 5 + 32;
      return fahrenheit;
   }

   //Reverse a String
   static reverseString(str) {
      let arr = str.split("");
      let newArr = arr.reverse();

      return newArr.join("");
   }

   //Factorialize a Number

   static factorialize(num) {
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

   static findLongestWordLength(str) {
      let arr = str.split(" ");
      let newStr = arr.reduce((a, b) => {
         return a.length > b.length ? a : b;
      });

      return newStr;
   }

   //Return Largest Numbers in Arrays

   static largestOfFour(arr) {
      let newThing = [];
      newThing = arr.reduce((a, b) => {
         return a > b ? a : b;
      });
      return newThing;
   }

   //Confirm the Ending

   static confirmEnding(str, target) {
      return str.slice(str.length - target.length) === target;
   }

   //Repeat a String Repeat a String

   static repeatStringNumTimes(str, num) {
      let newStr = "";
      while (num > 0) {
         newStr += str;
         num -= 1;
      }
      return newStr;
   }

   //Truncate a String

   static truncateString(str, num) {
      if (str.length > num) {
         return str.slice(0, num) + "...";
      }
      return str;
   }

   //Finders Keepers

   static findElement(arr) {
      let num = 0;
      for (var i = 0; i < arr.length; i++) {
         num = arr[i];
         if (num % 2 === 0) {
            return num;
         }
      }
   }

   //Boo who

   static booWho(bool) {
      if (typeof bool == "boolean") {
         return true;
      }
      return false;
   }

   // Title Case a Sentence

   static titleCase(str) {
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

   //Slice and Splice

   static frankenSplice(arr1, arr2, n) {
      let arr = arr2.slice();
      arr.splice(n, 0, ...arr1);
      return arr;
   }

   //Falsy Bouncer

   static bouncer(arr) {
      return arr.filter((value) => {
         return Boolean(value);
      });
   }

   //Where do I Belong

   static getIndexToIns(arr, num) {
      let newArr = arr.sort((a, b) => a - b);
      for (let nums = 0; nums < arr.length; nums += 1) {
         if (arr[nums] >= num) return nums;
      }
      return newArr.length;
   }

   //Mutations

   static mutation(arr) {
      let firstWord = arr[0].toLowerCase();
      let secondWord = arr[1].toLowerCase();
      for (let nums = 0; nums < secondWord.length; nums += 1) {
         if (firstWord.indexOf(secondWord[nums]) === -1) return false;
      }
      return true;
   }

   //Chunky Monkey

   static chunkArrayInGroups(arr, size) {
      var tempArray = [];
      for (var nums = 0; nums < arr.length; nums += size) {
         tempArray.push(arr.slice(nums, nums + size));
      }
      return console.log(tempArray);
   }

   // Your statics go here!

   // + ==== one or more characters
   // * ==== zero or more characters

   //Match Literal Strings
   static wheresWaldo(string) {
      let waldoRegex = /Waldo/;
      console.log(waldoRegex.test(string));
      return waldoRegex.test(string);
   }

   //Match Single Character with Multiple Possibilities
   static matchVowels(string) {
      let vowelRegex = /[aeiou]/gi;
      return string.match(vowelRegex);
   }
   // let quoteSample =
   // "Beware of bugs in the above code; I have only proved it correct, not tried it.";

   // //Match Single Characters Not Specified
   static matchNotVowels(string) {
      let myRegex = /[^0-9aeiou]/gi;
      return string.match(myRegex);
   }

   //let quoteSample = "3 blind mice.";

   // //Match Characters that Occur One or More Times
   static moreThanOnce(string) {
      let myRegex = /s+/g;
      return string.match(myRegex);
   }
   // let difficultSpelling = "Mississippi";

   // //Find One or More Criminals in a Hunt
   static findOneOrMore(string) {
      let reCriminals = /c+/gi;
      return string.match(reCriminals);
   }

   // // Match Beginning String Patterns
   static beginningOf(string) {
      let calRegex = /^The/; // Change this line
      return calRegex.test(string);
   }

   // // Match Ending String Patterns
   static endingOf(string) {
      let lastRegex = /end$/;
      return lastRegex.test(string);
   }
   // let caboose = "The last car on a train is the caboose";

   // // Match All Letters and Numbers
   static matchAlphaNums(string) {
      let alphabetRegexV2 = /\w/g;
      return string.match(alphabetRegexV2);
   }
   // let quoteSample = "The five boxing wizards jump quickly.";

   // // Match Everything But Letters and Numbers
   static matchNonAlphaNums(string) {
      let nonAlphabetRegex = /\W/g;
      return string.match(nonAlphabetRegex);
   }
   // let quoteSample = "The five boxing wizards jump quickly.";

   // // Match All Numbers
   static matchNums(string) {
      let numRegex = /\d/g; // Change this line
      return string.match(numRegex);
   }
   // let movieName = "2001: A Space Odyssey";

   // // Match All Non-Numbers
   static matchNonNums(string) {
      let noNumRegex = /\D/g;
      return string.match(noNumRegex);
   }
   // let movieName = "2001: A Space Odyssey";

   // // Match Non-Whitespace Characters
   static matchNoWhite(string) {
      let countNonWhiteSpace = /\S/g;
      return string.match(countNonWhiteSpace);
   }
   // let sample = "Whitespace is important in separating words";

   // // Positive and Negative Lookahead
   static posNegLookahead(string) {
      let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2,})/; // Change this line
      return pwRegex.test(string);
   }
   // let sampleWord = "astronaut";

   // // Check For Mixed Grouping of Characters
   static mixedGrouping(string) {
      let myRegex = /(Eleanor|Franklin).*Roosevelt/;
      return myRegex.test(string);
   }
   // let myString = "Eleanor Roosevelt";

   // // Use Capture Groups to Search and Replace
   static captureGroupsReplace(string) {
      let fixRegex = /^(\w+)\s(\w+)\s(\w+)/;
      let replaceText = "$3 $2 $1";
      return string.replace(fixRegex, replaceText);
   }
   // let str = "one two three";

   // // Remove Whitespace from Start and End
   static iHateWhiteSpace(string) {
      let wsRegex = /^\s+|\s+$/g;
      return string.replace(wsRegex, "");
   }

   //
   //This function takes in a Searched term and a Function name, a style object,
   //and a key because it's meant to render a React component. It's order of operations
   //are: finds where the match between the two, then returns an array
   //which consists of the original function name string, split into an array,
   //with span Elements around the characters which matched the Searched term.
   //it is then returned, and rendered.
   static highlightSearchedText = (searchTerm, miscTerm, styleObj, key) => {
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
            miscTerm.replace(newRegEx, function (match, index) {
               arrOfIndexes.push(index);
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
