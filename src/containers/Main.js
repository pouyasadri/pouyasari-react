import React, {Component, lazy, Suspense} from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import {settings} from "../portfolio.js";

const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Error404 = lazy(() => import("../pages/errors/error404/Error"));
export default class Main extends Component {
    render() {
        if (settings.isSplash) {
            return (
                <div>
                    <BrowserRouter basename="/">
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={(props) => (
                                    <Home {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/home"
                                render={(props) => <Home {...props} theme={this.props.theme}/>}
                            />
                            <Route
                                path="/experience"
                                exact
                                render={(props) => (
                                    <Experience {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/education"
                                render={(props) => (
                                    <Education {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="/contact"
                                render={(props) => (
                                    <Contact {...props} theme={this.props.theme}/>
                                )}
                            />

                            {/*<Route*/}
                            {/*  path="/splash"*/}
                            {/*  render={(props) => (*/}
                            {/*    <Splash {...props} theme={this.props.theme} />*/}
                            {/*  )}*/}
                            {/*/>*/}
                            <Route
                                path="/projects"
                                render={(props) => (
                                    <Projects {...props} theme={this.props.theme}/>
                                )}
                            />
                            <Route
                                path="*"
                                render={(props) => (
                                    <Error404 {...props} theme={this.props.theme}/>
                                )}
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        } else {
            return (
                <div>
                    <BrowserRouter basename="/">
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={(props) => <Home {...props} theme={this.props.theme}/>}
                            />
                            <Route
                                path="/home"
                                render={(props) => <Home {...props} theme={this.props.theme}/>}
                            />
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route
                                    path="/experience"
                                    exact
                                    render={(props) => (
                                        <Experience {...props} theme={this.props.theme}/>
                                    )}
                                />
                                <Route
                                    path="/education"
                                    render={(props) => (
                                        <Education {...props} theme={this.props.theme}/>
                                    )}
                                />
                                <Route
                                    path="/contact"
                                    render={(props) => (
                                        <Contact {...props} theme={this.props.theme}/>
                                    )}
                                />
                                {/* <Route
							path="/splash"
							render={(props) => (
								<Splash
									{...props}
									theme={this.props.theme}
								/>
							)}
						/> */}
                                <Route
                                    path="/projects"
                                    render={(props) => (
                                        <Projects {...props} theme={this.props.theme}/>
                                    )}
                                />
                            </Suspense>
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        }
    }
}
