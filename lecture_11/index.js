function throttle(f, ms) { 

    let isThrottling = false;
    let hasTrailingCall = false;
    let lastContext, lastArgs;

    const invokeFunc = (context, args) => {
        f.apply(context, args);
        isThrottling = true;

        setTimeout(() => {
            isThrottling = false;

            if(hasTrailingCall) {
                invokeFunc(lastContext, lastArgs);
                lastContext - undefined;
                lastArgs = undefined;
                hasTrailingCall = false;
            }
        }, ms);
    };

    return function(...args) {
       
        if(!isThrottling) {
            invokeFunc(this, args);
        } else {
            hasTrailingCall = true;
            lastContext = this;
            lastArgs = args;
        }
    }
}
const startTime = Date.now();

function work(payload){
    const timeFromStart = Date.now() - startTime;
    console.log(timeFromStart, payload);
}

const throttleUpdate = throttle(work, 1000);
addEventListener('mousemove', throttleUpdate);

function debounce(f, ms, instant) {
	var timeOut;
	return function() {
    let context = this;
    let args = arguments;
		clearTimeout(timeOut);
		timeOut = setTimeout(function() {
			timeOut = null;
      if (!instant) 
      f.apply(context, args);
		}, ms);
    if (instant && !timeOut) 
    f.apply(context, args);
	};
}


function intersect(a, b) {
  let result = [];

  for (let i of a){
    for (let j of b){
      if (i === j) {
        if (result.includes(i)){
          result.push(i);
        } else {
        result.push(i,j);
        }
      }
    }
  }
  return result;
}

function unique(array) {
    let result = [];
  
    for (let i of array) {
      if (!result.includes(i)) {
        result.push(i);
        console.log(i);
      }
    }
    return result;
}