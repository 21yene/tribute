import React from 'react'

function navbar() {
  return (
    <div>               
        <header id="site-header" className="fixed-top">
    <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
            <h1>
                <a className="navbar-brand mr-lg-5" href="index.html">
                    <img
                        src="assets/images/logo.png"
                        alt="AMB"
                        title="AMB"
                    />
                    የወንጌላዊ አለምነህ ጀንበሩ ማስታወሻ
                </a>
            </h1>

            <button
                className="navbar-toggler  collapsed bg-gradient"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav w-100">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item @@about__active">
                        <a className="nav-link" href="/about">
                            About
                        </a>
                    </li>
                    <li className="nav-item @@causes__active">
                        <a className="nav-link" href="/photos">
                            Photos
                        </a>
                    </li>
                    <li className="nav-item @@contact__active">
                        <a className="nav-link" href="/contact">
                            Contact
                        </a>
                    </li>
                    <li className="ml-lg-auto mr-lg-0 m-auto">
                        <div className="search-right">
                            <a href="#search" title="search">
                                <span className="fa fa-search" aria-hidden="true"></span>
                            </a>

                            <div id="search" className="pop-overlay">
                                <div className="popup">
                                    <h4 className="mb-3">Search here</h4>
                                    <form
                                        action="error.html"
                                        method="GET"
                                        className="search-box"
                                    >
                                        <input
                                            type="search"
                                            placeholder="Enter Keyword"
                                            name="search"
                                            required="required"
                                            autoFocus=""
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-style btn-primary"
                                        >
                                            Search
                                        </button>
                                    </form>
                                </div>
                                <a className="close" href="#close">
                                    ×
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="align-self">
                        <a
                            href="#donate"
                            className="btn btn-style btn-primary ml-lg-3 mr-lg-2"
                        >
                            <span className="fa fa-heart mr-1"></span> Donate
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mobile-position">
                <nav className="navigation">
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div className="mode-container">
                                <i className="gg-sun"></i>
                                <i className="gg-moon"></i>
                            </div>
                        </label>
                    </div>
                </nav>
            </div>
        </nav>
    </div>
</header>
</div>
  )
}

export default navbar