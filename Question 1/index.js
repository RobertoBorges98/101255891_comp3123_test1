const lowerCaseWords = (mixedArray) => {
    
    return new Promise((resolve, reject) => {
      
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
       
        const onlyStrArray = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
        const lowerStrArray = onlyStrArray.map((eachItemOfFilterArr) =>
          eachItemOfFilterArr.toLowerCase()
        );
        resolve(lowerStrArray);
      } else {
        reject("Invalid array");
      }
    });
  };
  
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

  lowerCaseWords(mixedArray)
    .then((value) =>

      console.log(value)
    )
    .catch((error) =>
      console.log(error)
    );
