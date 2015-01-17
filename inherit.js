
// also called in prototyping world as
// object( obj )
function inherit(obj) {
   if (obj == null) throw TypeError();

   function f() {}
   f.prototype = obj;
   return new f();
}

/*
    f has f.prototype
    f.prototype points to obj contructor
    new f() creates object that points
    to f.prototype, so new object inherits
    from oldObj.prototype
 */
