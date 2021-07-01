import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

// import '@fontsource/roboto'

// components
import App from "./App"
import Header from "./components/header/header"
import LoginPage from "./components/login/loginPage"
import AlertBox from "./components/alertBox/alertBox"

//styles
import "./index.css"

import {PersistGate} from "redux-persist/integration/react"
import {persistor,store} from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Header />
                <AlertBox/>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/signin" component={LoginPage} />
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>

    , document.getElementById("root")
)
