import React from 'react';

const Nav = () => {
    return (
        <div className="navcontainer">
            <nav className="nav">
                <div className="nav-upper-options">
                    <div className="nav-option option2">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="dashboard"
                        /> */}
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                        <h3>Dashboard</h3>
                    </div>

                    <div className="option1 nav-option">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="articles"
                        /> */}
                        <i class="fa fa-map" aria-hidden="true"></i>
                        <h3>Data Reliability</h3>
                    </div>

                    <div className="nav-option option3">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="report"
                        /> */}
                        <i class="fa fa-file-text" aria-hidden="true"></i>
                        <h3>Incident Management</h3>
                    </div>

                    <div className="nav-option option4">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="institution"
                        /> */}
                        <i class="fa fa-line-chart" aria-hidden="true"></i>
                        <h3>Pipeline Ops</h3>
                    </div>

                    <div className="nav-option option5">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="blog"
                        /> */}
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <h3>Alerts and Notification</h3>
                    </div>

                    <div className="nav-option option6">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="settings"
                        /> */}
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <h3>Reports</h3>
                    </div>

                    <div className="nav-option logout">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="logout"
                        /> */}
                        <i class="fa fa-window-restore" aria-hidden="true"></i>
                        <h3>iAssist</h3>
                    </div>

                    <div className="nav-option logout">
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="logout"
                        /> */}
                        <i class="fa fa-suitcase" aria-hidden="true"></i>
                        <h3>RBAC</h3>
                    </div>



                    <div className="nav-option logout" style={{marginTop:"100px"}}>
                        {/* <img
                            src=""
                            className="nav-img"
                            alt="logout"
                        /> */}
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        <h3>Settings</h3>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
