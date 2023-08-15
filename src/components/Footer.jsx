import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"
// import {    NavLink, Link } from "react-router-dom";

function Footer(){
    return (
        <>  
        <div className="footermain " >

            <div className="footflex ">
                <div className="foot"><ul>ABOUT</ul>
                    <ul><NavLink to="/contact" className="footer" >Contact Us</NavLink></ul>
                    <ul><NavLink to="/about" className="footer" >About US</NavLink></ul>
                </div>
        
                <div className="foot"><ul>HELP </ul>
                    <ul><a href="footerpayment.htm" className="footer">Payments</a></ul>
                    <ul><a href="faqs" className="footer">FAQ</a></ul>
                </div>
        
        
                <div className="foot"><ul>SOCIAL</ul>
                <ul><a className="footer" href="https://www.linkedin.com/in/kunal-garg-3a01b623b/" ><i class="fab fa-linkedin-in"></i></a></ul>
                <ul><a href="https://github.com/kunal9718/" className="footer" ><i class="fa fa-github" aria-hidden="true"></i></a></ul>
                </div>
            </div>
        
             
            
                <span className="copyright">
                <h3 > &copy;2022,CARRO</h3></span>
        </div>
        
        </>
    )
}
export default Footer;
