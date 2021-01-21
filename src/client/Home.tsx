import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type IHomeProps = RouteComponentProps;

interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
    public constructor(props: IHomeProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <div>Hello, world.</div>;
    }
}

export default withRouter(Home);
