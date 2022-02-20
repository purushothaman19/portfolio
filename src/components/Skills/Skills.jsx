import React, {useState} from "react";
// import { useEffect } from "react";
import "./skills.css";
import CountUp from 'react-countup';
// import purush from "./purush.png";


function Skills() {

    // node : https://img.icons8.com/color/30/26e07f/nodejs.png
    // three : https://bachasoftware.com/wp-content/uploads/2020/07/icon_2-1.png
    //  mongoDB : https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png
    //  sqlLite : https://www.victoryinfotech.com/wp-content/uploads/2021/09/Untitled-design-41.png
    //  firebase : https://img.icons8.com/color/30/000000/google-firebase-console.png
    //  python : https://img.icons8.com/color-glass/30/000000/python.png
    // flutter : https://img.icons8.com/fluency/30/000000/flutter.png
    // vc : https://img.icons8.com/ios-filled/30/26e07f/git.png

    return (
        <section id="skills-section">

            <h3 id="skills-h3">

                <a style={{ 'color': '#222222', 'textDecoration': 'none' }} href="#skills-section" alt=''> Skills </a>

            </h3>


            <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500" className="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-text-center skills-list" uk-grid='true' style={{ 'marginLeft': '0px' }}>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={60} delay={1} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/ios-glyphs/30/26e07f/react.png" alt="" /> reactJs </h3>
                        </div>
                    </div>
                    <p className='level' > Intermediate </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={90} delay={1} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/color/30/26e07f/nodejs.png" alt="" /> nodeJs </h3>
                        </div>
                    </div>
                    <p className='level' > Professional </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={20} delay={1} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img width={'30px'} src="https://bachasoftware.com/wp-content/uploads/2020/07/icon_2-1.png" alt="" /> threeJs </h3>
                        </div>
                    </div>
                    <p className='level' > Amateur </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={80} delay={2} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="" /> mongoDB </h3>
                        </div>
                    </div>
                    <p className='level' > Intermediate </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={70} delay={2} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img width={'30px'} src="https://www.victoryinfotech.com/wp-content/uploads/2021/09/Untitled-design-41.png" alt="" /> SQLite </h3>
                        </div>
                    </div>
                    <p className='level' > Intermediate </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={60} delay={2} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/color/30/000000/google-firebase-console.png" alt="" /> firebase </h3>
                        </div>
                    </div>
                    <p className='level' > Amateur </p>

                    </div>
                </div>


                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={95} delay={3} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/color-glass/30/000000/python.png" alt="" /> python </h3>
                        </div>
                    </div>
                    <p className='level' > Professional </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={90} delay={3} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/fluency/30/000000/flutter.png" alt="" /> flutter </h3>
                        </div>
                    </div>
                    <p className='level' > Professional </p>

                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-child-width-1-1@s uk-child-width-1-1@m uk-child-width-1-2@l uk-text-center" uk-grid='true'>

                        <div>
                            <h3 className="score" > <CountUp end={70} delay={3} suffix='%' duration={5} /> </h3>
                        </div>


                        <div>
                            <h3 className="uk-card-title"><img src="https://img.icons8.com/ios-filled/30/26e07f/git.png" alt="" /> github </h3>
                        </div>
                    </div>
                    <p className='level' > Intermediate </p>

                    </div>
                </div>

            </div>


        </section>
    )

}

export default Skills