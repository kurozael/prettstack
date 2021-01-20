import React from "react";
import { withRouter, RouteComponentProps, Switch, Route } from "react-router-dom";
import Home from "./Home";

interface IAppProps extends RouteComponentProps {

}

interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
    public constructor(props: IAppProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        );
    }
}

export default withRouter(App);
