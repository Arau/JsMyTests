
var obj = function () {
   var privateElem;

   function privFunc(x) {
        privateElem = x;
   }

   return {
      firstMethod: function (a) {
         privFunc(a);
      },

      secondMethod: function () {
         return privateElem;
      }
   };
} ();


obj.firstMethod(1);
process.stdout.write(obj.secondMethod() + "\n");


// Error by hidden value, as expected
obj.privFunc(2);
process.stdout.write(obj.secondMethod() + "\n");
