import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
// import '@fontsource/roboto'

// components
import App from "./App"
import ColorPicker from "./components/colorPicker/colorPicker"
import Header from "./components/header/header"
//styles
import "./index.css"

ReactDOM.render(
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/colorPicker" component={ColorPicker}/>
                    </Switch>
                </BrowserRouter>
    
    ,document.getElementById("root")
)
