UPDATER FUNCTIONS

- updater function is a fucntion that is passed as an arguement to setState().

- eg: if we want to pass 3 setState() functions in one function then:
  function addCount(){
  setCount(count+1);
  setCount(count+1);
  setCount(count+1);
  }
  here if we want to directly increase by three we can use updater functions..

  function addCount(){
  setCount((c)=> (c+1));
  setCount((c)=> (c+1));
  setCount((c)=> (c+1));
  }

- c is the previous value of count.

- allow for safe updates on the previous state

SPREAD OPERATOR

- used to spread the properties of javascript so that we dont lose it.
