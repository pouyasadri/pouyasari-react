import React, {Component, lazy, Suspense} from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Button from "../../components/button/Button";

const Skills = lazy(() => import("../../containers/skills/Skills"));
const Footer = lazy(() => import('../../components/footer/Footer'));
const TopButton = lazy(() => import("../../components/topButton/TopButton"));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow: true
        }
    }
    render() {
        return (
            <div>
                {(/^fr\b/.test(navigator.language)) || Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/Paris" ?
                    <div className="alert" style={{display: this.state.isShow ? 'block' : "none"}}>
                        <span className="closebtn"
                              onClick={() => this.setState({isShow:false})}>&times;</span>
                        <Button
                            className="change-language-btn"
                            text="Continuez en Français 🇫🇷"
                            href="https://fr.pouyasadri.com"
                            theme={this.props.theme}
                        />
                    </div>
                    : null}
                <Header theme={this.props.theme}/>
                <Greeting theme={this.props.theme}/>
                <Suspense fallback={<div></div>}>
                    <Skills theme={this.props.theme}/>
                </Suspense>
                <Suspense fallback={<div></div>}>
                    <Footer theme={this.props.theme}/>
                </Suspense>
                <Suspense fallback={<div></div>}>
                    <TopButton theme={this.props.theme}/>
                </Suspense>
            </div>
        );
    }
}

export default Home;
