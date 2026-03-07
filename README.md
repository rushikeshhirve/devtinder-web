# Dev Tinder

Language: Javascript
Library : React 
Build tool: Vite
CSS framework : tailwind (Daisy UI : component library)

**TODO Things in this application**
- In userCard when user hover on the +more then it should show remaining his skills
- Add Skip for now functionality
- Add Number of connection in user List
- In Profile Update, add a feature of add/remove skills

**Fixes needed**
- Show the * if the field is required.
- When user accepted the connection reqest then it should reflect in connected without refresh

## Notes ##

React is a JavaScript library (not a framework) used to build user interfaces—especially web apps.
React only for the view layer (UI)
React Does not include routing, state management, or backend login by default, for that u need to install external modules like react-router-dom, redux, etc

What react acutally does: 
    Creates UI Components
    Efficiently update DOM using a virtual DOM
    Manages component States

Whereas, Anguler is framework which includes everything like http client, routing, state handling, forms, CLI, Templates
------------------------
CORS ? what is Redux ?
Redux : Create store(configureStore) => Provider => create the slice(createSlice) => add the reducers in store => dispatch to use action => useSelector to get the value
------------------------
{withCredentials: true} tells the browser:

“Include cookies (and other credentials) in this HTTP request,
and accept cookies from the response.”

Without it, the browser will not send cookies for cross-origin requests.