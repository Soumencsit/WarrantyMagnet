import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-heading">
                <p>Efficient, sustainable and affordable Product</p>
                <p>Lifecycle Management</p>
            </div>

            <div className="about-stats">
                <div className="stat">
                    <p className="stat-value">80%</p>
                    <p>Efficiency Increase</p>
                </div>
                <div className="stat">
                    <p className="stat-value">60%</p>
                    <p>Cost Saving</p>
                </div>
                <div className="stat">
                    <p className="stat-value">15-25%</p>
                    <p>New Revenue Opportunities</p>
                </div>
            </div>
        </div>
    );
}

export default About;
