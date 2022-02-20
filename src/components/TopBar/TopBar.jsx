import react from "react";
import "./TopBar.css";
// import logo from "./logo.png";
import avatar from "./avatar.png";
// import { CSSAnimation, CSSTransition } from "react-transition-group";
import sound from "./aud1.wav";
// import scrollScript from "./script-top.js";
import $ from 'jquery';

export default class TopBar extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            skill: "MERN stack"
        };
    }

    
    query = () => {
        $.fn.moveIt = function(){
            var $window = $(window);
            var instances = [];
            
            $(this).each(function(){
              instances.push(new moveItItem($(this)));
            });
            
            window.addEventListener('scroll', function(){
              var scrollTop = $window.scrollTop();
              instances.forEach(function(inst){
                inst.update(scrollTop);
              });
            }, {passive: true});
          }
          
          var moveItItem = function(el){
            this.el = $(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
          };
          
          moveItItem.prototype.update = function(scrollTop){
            this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
          };
          
          // Initialization
          $(function(){
            $('[data-scroll-speed]').moveIt();
            // console.log('koo');
          });
    }


    componentDidMount() {
        const Ulkitscript1 = document.createElement("script");
        Ulkitscript1.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js";
        Ulkitscript1.async = true;

        const Ulkitscript2 = document.createElement("script");
        Ulkitscript2.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js";
        Ulkitscript2.async = true;

        document.body.appendChild(Ulkitscript1);
        document.body.appendChild(Ulkitscript2);

        this.query();

    }


    render(props) {

        return (


            <section id="top-section" data-scroll-speed='9'>
    
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar='true'>
    
                    <div className="uk-navbar-left">
    
                        <ul className="uk-navbar-nav">
                            <li className="uk-active uk-logo"><a href="."> <img src={avatar} alt='' /> </a> </li>
                        </ul>
    
                    </div>
    
                    <div className="uk-navbar-right">
    
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">   <a href="#works-section">   <button className="uk-button uk-button-text"> Works  </button>  </a> </li>
                            <li className="uk-active">   <a href="#profile-section">   <button className="uk-button uk-button-text"> contact  </button>  </a> </li>
                        </ul>
    
                    </div>
    
                </nav>
    
    
                <div className="info">
                    <div className="uk-card info-section uk-card-body">
                        <img id="avatar" src={avatar} alt="" />
                        <h1 id="name">
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
                        <p style={{ 'transition': 'all 1s' }}> can create beautiful things using
                            <span id="skill-text"> MERN stack </span>
                        </p>
                    </div>
                </div>
    
                <audio id="audio">
                    <source src={sound} type="audio/mp3"    />
                </audio>
    
    
    
            </section>
        )
    }

}

