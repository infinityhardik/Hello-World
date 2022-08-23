// import the Components using 'import' keyword
// export the New Component and then import and use it in App.js 
// This exports the Final App which gets rendered using index.js


// Arrow Function
const App = () => {
    return (
        <div>
            <label htmlFor="username">Username: </label> <br />
            <input id="username" type="text" /><br /><br />
            <label htmlFor="password">Password: </label><br />
            <input id="password" type="password" /><br /><br />
        </div>
    );
}

export default App;


// Example for adding to App.js in src Folder of react-basics