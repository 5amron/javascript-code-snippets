  var prompt = require('prompt');  /////////*****************> first you must install prompt module

  var answer_1,answer_2,answer_3;


  var a,b,c;
  var sum = function(a,b) {
    //console.log('%d hello %d',a,b);
    a=Number(a);
    b=Number(b);
    c=a+b;
    return c;
  };
     
  var sub = function(a,b) {
    return Math.abs(a-b);
  };

  var div = function(a,b){
    c=a/b;
    return c;
  };

  var mult = function(a,b){
    c=a*b;
    return c;
  };


 exports.mainFuncOfThisMudule = function(){

    // 
    // Start the prompt 
    // 
    prompt.start();

    // 
    // Get two properties from the user: username and email 
    // 
    prompt.get(['answer_1', 'answer_2', 'answer_3'], function (err, result_1) {
      // 
      // Log the results. 
      // 
      console.log('Command-line input received:');
      console.log('  answer_1:' + result_1.answer_1);
      answer_1 = result_1.answer_1;
      console.log('  answer_2:' + result_1.answer_2);
      answer_2 = result_1.answer_2;
      console.log('  answer_3:' + result_1.answer_3);
      answer_3 = result_1.answer_3;

      switch (answer_3){
        case '1': console.log('result is: %d',sum(answer_1,answer_2));
        break;
        case '2': console.log('result is: %d',sub(answer_1,answer_2));
        break;
        case '3': console.log('result is: %d',div(answer_1,answer_2));
        break;
        case '4': console.log('result is: %d',mult(answer_1,answer_2));
        break;

        default: console.log('wrong choice!!!');

        }



    });



};


// var ex = {
//   myEx: mainFuncOfThisMudule
// }

// module.exports = ex;

