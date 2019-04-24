d3.csv('ma.csv', function(error, data) {
  if (error) {
      console.error('Error getting or parsing the data.');
      throw error;
  }
  var chart = bubbleChart().width(900).height(900);
  // selection.datum() returns the bound datum for the first element in the selection and doesn't join the specified array of data with the selected elements
  d3.select('#chart').datum(data).call(chart);
});
