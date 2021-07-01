import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

// import '@fontsource/roboto'

// components
import App from "./App"
import Header from "./components/header/header"
import LoginPage from "./components/login/loginPage"

//styles
import "./index.css"

import {PersistGate} from "redux-persist/integration/react"
import {persistor,store} from "./redux/store"
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <CookiesProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/signin" component={LoginPage} />
                    </Switch>
                </BrowserRouter>
            </CookiesProvider>
        </PersistGate>
    </Provider>

    , document.getElementById("root")
)
