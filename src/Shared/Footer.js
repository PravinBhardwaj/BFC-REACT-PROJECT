import React from "react";
import { FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";
const Footer=()=>{
    return(
        <div className="footer">
            <div className="Waves">
                <div className="Wave" id="Wave1"></div>
                <div className="Wave" id="Wave2"></div>
                <div className="Wave" id="Wave3"></div>
                <div className="Wave" id="Wave4"></div>
            </div>
            <div className="footer-section-padding">
                <div className="footer-links">
                    <div className="footer-link-div">
                        <h4>JSW Bengaluru Football Club Pvt. Ltd.</h4>
                       
                            <p>Raheja Towers (East),</p>
                            <p>6th floor, # 26-26</p>
                            <p>M.G Road, Bangalore,</p>
                            <p>Karnataka, India</p>
                            <p>PIN: 560001</p>
                            <p>CONTACT US: media@bengalurufc.com</p>
                        
                        
                    </div>
                    <div className="footer-link-div">
                        <h4>Fans</h4>
                        <a href="/players">
                            <p>Fan Clubs</p>
                        </a>
                        <a href="/bfcb">
                            <p>BFC Cares</p>
                        </a>
                        
                    </div>
                    <div className="footer-link-div">
                        <h4>Grassroots</h4>
                        <a href="/players">
                            <p>BFC B</p>
                        </a>
                        <a href="/players">
                            <p>BFC Academy</p>
                        </a>
                        <a href="/players">
                            <p>BFC Soccer Schools</p>
                        </a>
                    </div>
                    <div className="footer-link-div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><FaFacebookF/></p>
                            <p><FaInstagram/></p>
                            <p><FaTwitter/></p>
                        </div>
                       
                    </div>
                </div>
                <hr></hr>
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                            @{new Date().getFullYear()} bfc all right reserved.
                        </p>
                    </div>
                    <div className="footer-below-link">
                        <a href="/terms"><div><p>Privacy Policy</p></div></a>
                        <a href="/terms"><div><p>Feedback</p></div></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;