//Create your function below this line.




/* If my weight is 108Kg and my height is 3m, I should be able to call your function like this:

var bmi = bmiCalculator(108, 3); 

bmi should equal around 15 in this case.

*/
function bmiCalculator(weight, height) {
    const bmi = weight / (height * height)
    return bmi;
}



function bmiCalculator(weight, height) {
    //TODO
    const bmi = weight / Math.pow(height, 2);
    return bmi;
}


describe('bmiCalculator()', function() {
    
    it('should work for the example given', function() {
        expect(bmiCalculator(108, 3)).toEqual(12);
    });
});

// load jasmine htmlReporter
(function() {
  var env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
}());