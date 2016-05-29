# ATM
Fake ATM

### To run


```
> $ npm install
```

Install webpack and the development server:

```
> $ npm i webpack-dev-server webpack -g
```

Run the application with

```
> $ npm run dev
```

Open the web browser to `http://localhost:8080/`

### Implementation comments

The store/state is implemented using RxJS's Subjects, I implemented a @decorator for React components that is responsible to update the state of the component on Subjects' change.

Container components are the smart ones that have some kind of logic.
Screen components are just presentational components (this is not 100% correct, because I didnt have time to refactor)
