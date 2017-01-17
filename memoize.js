var cache = {};



function getElementById(id){

  for (var prop in cache){
    if (prop === id) {
      console.log('fetching from cache');
      return cache[prop];
    }
  }
 if (cache.hasOwnProperty(id) === false){
    cache[id] = document.getElementById(id);
    console.log('fetching from DOM');
    return cache[id];
  }
}
getElementById('movies');
getElementById('movies');
// getElementById('title');
// getElementById('actors');
// console.log('cache ',cache);