export default class helpers {
   static convertDataType = (str) => {
      function parseTheJSON(json) {
         try {
            JSON.parse(json);
         } catch (error) {
            return json;
         }

         return JSON.parse(json);
      }
      if (str === "undefined") {
         return undefined;
      } else {
         return parseTheJSON(str);
      }
   };
}
