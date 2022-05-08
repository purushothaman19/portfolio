import React from 'react';
import './SubProjects.css';

class SubProjects extends React.Component {

    constructor(props) {
        super(props);
        this.state = { props: props.data };
        this.Projects = this.Projects.bind(this);
        this.Projects();
    }

    Projects() {

        if (this.state.props !== null) {
            const data = this.state.props;

            if (data !== undefined) {

                const mappedProjects = data.map((project, key) =>

                    <div className='subProjects'>
                        <div class="uk-card uk-card-secondary uk-card-body">
                            <h3 class="uk-card-title"> {project.title} </h3>
                            <p> {project.desc} </p>
                            <div className='project-btn'> 
                                <a target='_blank' href={ project.url || project.google_colab || project.CSurl }> <button class="uk-button uk-button-rm"> Peek </button> </a>
                            </div>
                        </div>
                    </div>
                );

                return (
                    <div className="uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-small uk-grid-match" uk-grid='true'>
                        {mappedProjects}
                    </div>
                )

            } else {
                return (<div> <p id='pro-spin'> getting things up.... Please wait! </p> </div>)
            }

        }

    }


    render() {

        return (
            <section id='subProject-section' >
                <this.Projects />
            </section>
        )

    }

}

export default SubProjects;