import React from "react";
import { ScrollPage } from "../shared/styles";
import { Header } from "../shared/components";

export default class ProjectOverview extends React.Component{
    public render() {
        return <div>
            <Header to="/dashboard" buttonName="HOME"/>
            <ScrollPage>

            </ScrollPage>
        </div>


    }

}