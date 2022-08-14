# Component-lifecycle

- Component didMount

```
useEffect(() => {
    console.log("The useEffect ran");
  }, []);
```

When I open at the console, useEffect will run but when I click the increment button useEffect will not run and also when I click the hide button, the useEffect will not run again. This empty array will tell you, when the useEffect should run, you only want it to run when the first render is and after that because the array is empty, it will not re-run and it will not dependent on anything else happen.

- Component didUpdate

```
useEffect(() => {
    console.log("The useEffect ran");
  }, [counter]);
```

When I open at the console, useEffect will run and when I click the increment button useEffect will run again. useEffect will always run because we are passing in a variable that our useEffect depends on. It will only recall this if the variable in this array update

// Component WilllUnmount
useEffect(() => {
console.log("The useEffect ran");
return () => {
console.log("the return is run");
};
}, []);
