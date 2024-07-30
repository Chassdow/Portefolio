import React from "react";
import '../../src/App.css'
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'
import cv from '../img/user-regular.svg'

function Contact({ }) {
    return (
        <div className="ContainerContact">
            <h1 id="contact" className="Contacth1">Me contacter</h1>
            <div className="backgroundlink">
                <div className="liencontact">
                    <div className="githublink">
                        <a  className="Zoom" href="https://github.com/Chassdow" target="blank"><img src={github} alt="" width={100} height={100} /> </a>
                    </div>
                    <div className="linkedinlink">
                        <a className="Zoom" href="https://www.linkedin.com/in/felix-roland-2726052a8/" target="blank"><img src={linkedin} alt="" /></a>
                    </div>
                    <div className="CV">
                        <a className="Zoom" href="/felix.roland.pdf" download="" type="application/pdf"><img src={cv} alt="" width={100} height={100}/></a>
                    </div>
                </div>
                <div className="FormContact">
                    <form action="https://submit-form.com/IaTWdqwd7">
                        <div className="form">
                            <label for="name">Name *</label>
                            <input type="text" id="name" name="name" placeholder="Name" required=" " />
                        </div>
                        <div className="form">
                            <label for="numero">Numéro de téléphone *</label>
                            <input type="tel" id="numero" name="numero" placeholder="numero" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" required />
                        </div>
                        <div className="form">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" placeholder="Email" required="@" />
                        </div>
                        <div className="form">
                            <label for="message">Message *</label>
                            <input
                                type="hidden"
                                name="_redirect"
                                // value="felix-roland-portfolio.netlify.app"
                                 />
                            <textarea
                                row="4"
                                cols="35"
                                id="message"
                                name="message"
                                placeholder="Message"
                                required=""
                            ></textarea>
                        </div>
                        <button type="submit">envoyer</button>
                    </form>
                </div>
            </div>

        </div>


    )
}
export default Contact