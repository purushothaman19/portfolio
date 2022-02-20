import "./Works.css";
// import i1 from "./1.png";
// import i2 from "./2.png";

function Works() {

    return (

        <section id="works-section">    

            <h3 id="works-h3"> Projects </h3>

            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="true">

                <ul className="uk-slideshow-items">
                    <li>
                        <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                        </div>
                        <div className="uk-position-cover"></div>
                        <div className="uk-position-center uk-position-medium uk-text-center">

                            <div className="slide-card">
                                <div className="slide-h3"> <h2 uk-slideshow-parallax="x: 200,0,0"> Exambird </h2> </div>
                                <div className="slide-p">
                                    <p uk-slideshow-parallax="x: 400,0,0;"> Online exam creation site. </p>
                                    <p className="react" uk-slideshow-parallax="x: 400,0,0;"> react </p>

                                    <p uk-margin='true'>
                                        <a className="git-link" href="http://github.com/purushothaman19/ExamBird" target='_blank' > <img alt="" src="https://img.icons8.com/material-outlined/24/000000/github.png"/></a>
                                        <a className="forward" href="http://exam-bird.netlify.app"target='_blank' > <img alt="" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/24/000000/external-forward-arrows-kmg-design-glyph-kmg-design.png"/></a>
                                    </p>

                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                        </div>
                        <div className="uk-position-cover"></div>
                        <div className="uk-position-center uk-position-medium uk-text-center">

                        <div className="slide-card">
                                <div className="slide-h3"> <h2 uk-slideshow-parallax="x: 200,0,0"> Sweetcups </h2> </div>
                                <div className="slide-p">
                                    <p uk-slideshow-parallax="x: 400,0,0;"> Bakery profile website. </p>
                                    <p className="react" uk-slideshow-parallax="x: 400,0,0;"> react </p>

                                    <p uk-margin='true'>
                                        <a className="git-link" href="http://github.com/purushg16/sweetcups" target='_blank' > <img alt="" src="https://img.icons8.com/material-outlined/24/000000/github.png"/></a>
                                        <a className="forward" href="http://sweetcupsbangalore.netlify.app"target='_blank' > <img alt="" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/24/000000/external-forward-arrows-kmg-design-glyph-kmg-design.png"/></a>
                                    </p>

                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                        </div>
                        <div className="uk-position-cover"></div>
                        <div className="uk-position-center uk-position-medium uk-text-center">

                        <div className="slide-card">
                                <div className="slide-h3"> <h2 uk-slideshow-parallax="x: 200,0,0"> Portfolio(minor) </h2> </div>
                                <div className="slide-p">
                                    <p uk-slideshow-parallax="x: 400,0,0;"> Portfolio website. </p>
                                    <p className="react" uk-slideshow-parallax="x: 400,0,0;"> react - node </p>

                                    <p uk-margin='true'>
                                        <a className="git-link" href="https://github.com/purushothaman19/Folio" target='_blank' > <img alt="" src="https://img.icons8.com/material-outlined/24/000000/github.png"/></a>
                                        <a className="forward" href="http://purusholio.herokuapp.com"target='_blank' > <img alt="" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/24/000000/external-forward-arrows-kmg-design-glyph-kmg-design.png"/></a>
                                    </p>

                                </div>
                            </div>

                        </div>
                    </li>
                    
                </ul>

                <a className="uk-position-center-left uk-position-small slide-button" href="#" style={{ 'color': 'black' }} uk-slidenav-previous='true' uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small slide-button" href="#" style={{ 'color': 'black' }} uk-slidenav-next='true' uk-slideshow-item="next"></a>

            </div>
        </section>

    );

}


export default Works