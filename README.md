# web-components

# Installation 

1. ```git clone git@github.com:Sampath-vi/web-components.git```
2. ```cd remote; npm install; npm run build; ``` - Copy the `build/static/js/main*.js` path.
3. Replace the path in [host](https://github.com/Sampath-vi/web-components/blob/main/host/index.html#L14).


# Directory 

- This repo consists of `host` and `remote`.
- `remote` is a react-app with a simple counter.
- `host` is a html file which imports the build from `remote` and renders it. 


# remote
- This app consists of a `Counter` component which will be reused in the `host app`.
- The `Counter` component just increments the state locally. 
- The app is made available to the `host` using [custom-elements](https://developers.google.com/web/fundamentals/web-components/customelements#reactions)
- The app is being rendered via the function https://github.com/Sampath-vi/web-components/blob/main/remote/src/index.tsx#L8.
