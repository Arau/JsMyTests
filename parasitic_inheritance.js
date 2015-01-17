function foo(id) {
   return {
      test: function() {
         return "test " + id;
      }
   };
}

function bar(id) {
   var that = foo(id);
   that.secondTest = function (testid) {
      return testid === id;
   };
   return that;
}

var b = bar(1);
process.stdout.write(b.secondTest(1) + "\n");
// results true =)
