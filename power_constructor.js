function object(obj) {
   if (obj == null) throw TypeError();

   function f() {}
   f.prototype = obj;
   return new f();
}

function powerConstructor()  {
   var that = object(oldObj),
        privateVar;

    function privateFunc(x) {
       privateVar = x
    }

    // Privileged methods
    that.firstMethod = function (a) {
       privateFunc(a);
    };

    that.secondMethod = function () {
       return privateVar;
    };

    return that;
}

// no longer needed new
var oldObj = {};
myObject = powerConstructor();

myObject.firstMethod(1);
process.stdout.write(myObject.secondMethod() + "\n");

mySecondObj = powerConstructor();

mySecondObj.firstMethod(2);
process.stdout.write(mySecondObj.secondMethod() + "\n");
