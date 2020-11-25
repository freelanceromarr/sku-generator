import React from 'react';
import './Header.css';


const Header = () => {


    return (
        <div>
            <div className="row">
                <div className="col-12 col-lg-2">
                    <div class="p-2 bd-highlight">
                        <a href="http://candealonline.com.au/">
                            <img src="https://www.candealonline.com.au/wp-content/uploads/2020/04/CAN-DEAL-ONLINE-LOGO.png" width="200" alt="candeal logo" />
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-10">
                    <div class="p-2 bd-highlight text-center">
                        <span className="to-des-title"> Now is a good time to learn how to develope your business.</span>
                        <a href="https://candealonline.us4.list-manage.com/subscribe?u=c74743aabe707948b2092d37b&id=ba6894efd1&fbclid=IwAR3TP8iYSJZheYMCIMWjr9oiBfAVRyRbh7uxEMEsezH8hVQug3gsnolNrSg"
                            class="btn btn-danger mx-3" target="blank">SIGN UP FOR FREE</a>
                    </div>
                </div>

            </div>

            {/* <div class="d-flex justify-content-between px-4">
               
                
                <div class="p-2 bd-highlight"></div>
            </div> */}

        </div>
    );
};

export default Header;