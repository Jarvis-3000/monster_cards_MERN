import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
// import '@fontsource/roboto'

// components
import App from "./App"
import Header from "./components/header/header"
import LoginPage from "./components/login/loginPage"
//styles
import "./index.css"

ReactDOM.render(
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/signin" component={LoginPage}/>
                    </Switch>
                </BrowserRouter>
    
    ,document.getElementById("root")
)
