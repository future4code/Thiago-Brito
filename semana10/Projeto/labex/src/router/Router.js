import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import ApplicationFormPage from "../screens/ApplicationFormPage"
import CreateTripPage from "../screens/CreateTripPage"
import LisTripsPage from "../screens/LisTripsPage"
import TripDetailsPage from "../screens/TripDetailsPage"



export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/application-form">
                    <ApplicationFormPage/>
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/trips/list">
                    <LisTripsPage/>
                </Route>
                <Route exact path="/trips/details">
                    <TripDetailsPage/>

                </Route>
            </Switch>
        </BrowserRouter>

    )
}