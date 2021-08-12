import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import User from './User'


function UserLink(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <User />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserLink;