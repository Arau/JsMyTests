
function f(x) {
   ++fs;
   return x*x;
}

function get(x) {
   ++gets;
   if (x in cache) {
      return cache[x];
   }
   cache[x] = f(x);
   return cache[x];
}

var cache = {};
var fs   = 0;
var gets = 0;
var p1 = get(2);
var p2 = get(2);
var p3 = get(2);

process.stdout.write("Times f(x) have run: " + fs + "\n");
process.stdout.write("Times get(x) have run: " + gets + "\n");
