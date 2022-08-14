# Component-lifecycle

- didMount

```
useEffect(() => {
    console.log("The useEffect ran");
  }, []);
```

When I open at the console, useEffect will run but when I click the increment button useEffect will not run and also when I click the hide button, the useEffect will not run again. This empty array will tell you, when the useEffect should run, you only want it to run when the first render is and after that because the array is empty, it will not re-run and it will not dependent on anything else happen.

- didUpdate

```
useEffect(() => {
    console.log("The useEffect ran");
  }, [counter]);
```

When I open at the console, useEffect will run and when I click the increment button useEffect will run again.
