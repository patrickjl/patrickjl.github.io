function calculate() {
  // This is the string that contains the numbers separated by a space.
  var inputValue = document.getElementById('numberSeries').value;

  var values = inputValue.split(' ')
    .map((val) => parseInt(val))
    .filter((val) => !isNaN(val));


    //part of the code don't change
  var sum = values.reduce((currentVal, nextVal) => currentVal + nextVal, 0);
  var average = sum / values.length;


  //test starts here
xMinusXbar = [];
  for (var i = 0, len = values.length; i < len; i++)
    xMinusXbar.push(((values[i] -average)*(values[i] -average)));
    //console.log (values);
   // console.log(average);
    console.log(xMinusXbar);
    //TESTING HERE
    var sumXminusXbar = xMinusXbar
    //.map( v=> v[1] )
    .reduce( (sumXminusXbar,current) => sumXminusXbar + current, 0);
    console.log(sumXminusXbar);
    console.log(sumXminusXbar/xMinusXbar.length);
    var variance = sumXminusXbar/xMinusXbar.length;
    var stdDeviation = Math.sqrt(variance);
    console.log(stdDeviation);


  // EVERYTHING ABOVE IS GOOD EXCEPT: need to figure out a way to SUM the square of value-average

  document.getElementById('calculationSum').innerHTML = `Sum: ${sum}`;
  document.getElementById('calculationAverage').innerHTML = `Average: ${average}`;
  document.getElementById('calculationVar').innerHTML = `Variance: ${variance}`;
  document.getElementById('calculationStdDev').innerHTML = `Std Deviation: ${stdDeviation}`;
}
