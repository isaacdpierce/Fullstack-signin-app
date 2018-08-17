# Redux Thunk

- Allows return of a different value type from the action creator
- Can return **either:** 1) an action object -> { type: AUTH_USER, payload: payload} 2) a function called with (dispatch)

## Action creators

- Action creators are a javascript function stored in a constant
- All action creators must have a type and a payload

## dispatch function ('The Funnel')

- dispatch() is a function tied to Redux
- Automatically dispatches an action to the middleware and reducers
- can return as many actions as wanted from a single action creator

- **It initiates change within the Application:**
  - responsible for "funneling" actions:
    1. taking in the action that is returned from the initial action creator
    2. sending it to the middleware
    3. then to the reducers
    4. then updates application state

## CORS

- Cross Origin Resource Sharing
- **Browser** implemented security feature
- makes sure there are no malicious redirects behind the scenes to another url
- the browser checks to see if the domain, the sub-domain or the port are different
- If any of the above are different the browser stops the action and sends a warning

  **SOLUTION TO CORS**

  - server configuration
  -
