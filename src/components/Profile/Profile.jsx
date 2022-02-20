import './Profile.css';
import avatar from "./avatar1.png";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';


function Profile() {

    var [copy, setCopy] = useState("title: Copy Number; delay: 100");

    function changeCopyText() {
        setCopy("title: Copied;")

        setTimeout(() => {
            setCopy("title: Copy Number; delay: 100");
        }, 5000)
    }

    return (

        <section id='profile-section'>

            <div className="bottom-info">
                <div className="uk-card profile-section uk-card-body">

                    <div className='semi-background'>
                        <img id="bottom-avatar" src={avatar} alt="" />

                        <h1 id="bottom-name">
                            <span className="name" > P </span>
                            <span className="name" > u </span>
                            <span className="name" > r </span>
                            <span className="name" > u </span>
                            <span className="name" > s </span>
                            <span className="name" > h </span>
                            <span className="name" > o </span>
                            <span className="name" > t </span>
                            <span className="name" > h </span>
                            <span className="name" > a </span>
                            <span className="name" > m </span>
                            <span className="name" > a </span>
                            <span className="name n" > n </span>
                            <span className="name" > G </span>
                        </h1>
                        <p id='b-moto' style={{ 'transition': 'all 1s' }}> ~ Maximum Efforts ~ </p>
                        <p uk-margin='true'>
                            <span className='contact-button' > <button class="uk-button uk-button-text"> <a style={{'textDecoration':'none', color : '#222'}} href='http://github.com/purushothaman19'> github </a> </button> </span>
                            
                            <span className='contact-button' > <button class="uk-button uk-button-text"> <a style={{'textDecoration':'none', color : '#222'}} href='mailto:officialpurushothaman@gmail.com'> mail </a> </button> </span>

                            <CopyToClipboard text="+919976576720">
                                <span className='contact-button' uk-tooltip={copy} > <button onClick={changeCopyText} class="uk-button uk-button-text"> Phone </button> </span>
                            </CopyToClipboard>


                        </p>

                    </div>
                </div>
            </div>

        </section>

    );

}

export default Profile