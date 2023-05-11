import React from "react";
import { ajax } from "jquery";
import "./Works.css";
import SubProjects from "./subProjects/SubProjects";
// import i1 from "./1.png";
// import i2 from "./2.png";

export default class Works extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
        };

    }

    componentDidMount() {
        const context = this;

        ajax({
            url: 'https://folio-liu2.onrender.com/api',
            method: 'GET',
            success: function (response) {
                console.log(response);
                response = response['docs'];
                context.setState({
                    isLoaded: true,
                    items: response,
                    game: response.filter((a) => a.tag === 'python' && a.type === 'game'),
                    turtle: response.filter((a) => a.tag === 'python' && a.type === 'turtle'),
                    selenium: response.filter((a) => a.tag === 'python' && a.type === 'selenium'),
                    ds: response.filter((a) => a.tag === 'python' && a.type === 'ds'),
                    web: response.filter((a) => a.tag === 'python' && a.type === 'web'),
                    flutter: response.filter((a) => a.tag === 'flutter'),
                    node: response.filter((a) => a.tag === 'node'),
                    react: response.filter((a) => a.tag === 'react' ),
                });


            }
        });

    }

    render() {

        const loadingStyle = {
            'textAlign': 'center',
            'display': 'block',
            'color': 'black'
        }
        // const t = true

        // console.log(this.state.items);


        return (
            <section id="works-section">

                <h3 id="works-h3"> Projects </h3>

                {this.state.isLoaded === false && this.state.items === null ? <div style={loadingStyle} uk-spinner='true '> </div> :

                    <ul uk-accordion='true'>
                        <li>
                            <a className="uk-accordion-title" href="/#"> Node </a>
                            <div className="uk-accordion-content">
                                <SubProjects data={this.state.node} />
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="/#"> React </a>
                            <div className="uk-accordion-content">
                                <SubProjects data={this.state.react} />
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="/#"> Python </a>
                            <div className="uk-accordion-content" style={{ 'padding': '1% 3%' }}>

                                <ul uk-accordion='true'>
                                    <li className="uk-open">
                                        <a className="uk-accordion-title" href="/#"> Selenium </a>

                                        <div className="uk-accordion-content">
                                            <SubProjects data={this.state.selenium} />
                                        </div>

                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="/#"> Data Science </a>
                                        <div className="uk-accordion-content">
                                            <SubProjects data={this.state.ds} />
                                        </div>

                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="/#"> Turtle </a>

                                        <div className="uk-accordion-content">
                                            <SubProjects data={this.state.turtle} />
                                        </div>

                                    </li>
                                    <li>

                                        <a className="uk-accordion-title" href="/#"> Games </a>

                                        <div className="uk-accordion-content">
                                            <SubProjects data={this.state.game} />
                                        </div>

                                    </li>
                                    <li className="uk-open">
                                        <a className="uk-accordion-title" href="/#"> Web </a>

                                        <div className="uk-accordion-content">
                                            <SubProjects data={this.state.web} />
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        </li>

                        <li>
                            <a className="uk-accordion-title" href="/#"> Flutter </a>
                            <div className="uk-accordion-content">
                                <SubProjects data={this.state.flutter} />
                            </div>
                        </li>
                    </ul>

                }

            </section>

        )
    }
}
