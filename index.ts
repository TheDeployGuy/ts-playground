const message: string = 'hello world';
console.log(message);

// Generic Type needs to be given at the defination of the function
type TestDef<T>  = (arg: T) => void;
const test: TestDef<number> = (arg) => {
    console.log(arg)
}

test(1);
// This will not work because we provided number at runtime.
test({
    blah: 2
})

// Generic Type is given when the function is called.
type TestRuntime = <T>(arg:T) => void
const testRun: TestRuntime = (arg) => {
    console.log(arg)
}

// Typescript figure outs what the generic type is when you call it e.g if you call it with a number
// typescript replace T with a number.
testRun(2);
testRun({
    blah: 2
})

// Multiple generic types
type TestMultiple = <T, U>(arg1: T, arg2: U) => void;

const testMultiple: TestMultiple = (arg1, arg2) => {
    console.log(arg1, arg2)
}

testMultiple(1, "Generics are crazy...");
testMultiple(false, {
    blah: 'wow'
});

// Filter type
type Filter = <T>(item: T[], fn: (item: T) => boolean) => T[]

const filter: Filter = (array, fn) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (fn(item)) {
      result.push(item)
    }
  }

  return result;

//   Cannot use foreach for some reason...

//   let result2 = [];

//   array.forEach(item => {
//       if(fn(item)) result2.push(item);
//   })
 
//   return result2;
}

filter(['1st', '2nd', 'findme'], (item) => item.includes('findme'))
filter([100, 90, 150], (item) => item > 100)
filter(['123'], (val) => val.includes('2'))
filter([1, 2])

