import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 text-white bg-black">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                 
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                     
                        <ul className="list-unstyled">
                            
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                     
                        <ul className="list-unstyled">
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <Link to='/'>Recipie Forest</Link>

            </div>

        </footer>
    );
};

export default Footer;