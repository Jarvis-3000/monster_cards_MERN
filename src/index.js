import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

// import '@fontsource/roboto'

// components
import App from "./App"
import Header from "./components/header/header"
import LoginPage from "./components/login/loginPage"
import CloseAlert from "./components/closeAlert/closeAlert"
import AlertBox from "./components/alertBox/alertBox"

//styles
import "./index.css"

//service worker development file
import swDev from "./swDev"

import store from "./redux/store"
import { CookiesProvider } from "react-cookie";

console.log("offline working")

ReactDOM.render(
    <Provider store={store}>
            <CookiesProvider>
                <BrowserRouter>
                {
                    (!navigator.onLine)?
                        <CloseAlert/>
                    :
                    <></>
                }
                    <Header />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/signin" component={LoginPage} />
                    </Switch>
                </BrowserRouter>
            </CookiesProvider>
    </Provider>

    , document.getElementById("root")
)

swDev()