import React, { useState } from "react";

export default function Footer() {
    return ( 
<footer class="footer">
        <h2>Contact Information</h2>
        <ul class="contact-list">
        <li>
            <a href="tel: +46 764524712">
                <i class="fas fa-fw fa-mobile-alt"></i>
                phone:+46 76-4524712
            </a>
            </li>
            
             <li>
                <a
                href="https://www.linkedin.com/in/megha-visveshwara-32146122/"
                target="_blank">
                <i class="fab fa-fw fa-linkedin-in"></i>
                Linkedin:Megha
            </a>
            </li>
            
        </ul>

    </footer>
     );
    } 
      