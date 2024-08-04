import React from "react";
import Navbar from "./Navbar";

const Download = () => {
    return (
        <div>
            <Navbar/>
            <section className="downloads-section">
                <div className="downloads-content-container">
                    <h1>Download Anki for Free Today!</h1>
                    <select>
                        <option>--Select an Operating System--</option>
                        <option value="windows">Windows 10/11</option>
                        <option value="mac">macOS 12+</option>
                        <option value="linux">Linux (.zst)</option>
                    </select>
                </div>
            </section>
        </div>
    )
};

export default Download;