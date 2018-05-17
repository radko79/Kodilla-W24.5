const calculateStylePoints = ( styleNotes ) => {
  if ( styleNotes.length != 5 ) {
    return "You need five Judge's marks";
  }
  const maxResult = Math.max( ...styleNotes );
  const minResult = Math.min( ...styleNotes );
  const result = styleNotes.reduce(( sum, current ) => sum + current, 0 );
  return result - maxResult - minResult;
};

module.exports = calculateStylePoints;