// Code your solution here
findMatching = (drivers,_strings)=>{
return drivers.filter(
  (possibleMatch)=> possibleMatch.toLowerCase() === _strings.toLowerCase()
);
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0 
  );
}

function matchName(drivers, soughtName) {
  return drivers.filter((record) => record.name === soughtName);
}
