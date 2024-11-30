import React from 'react';
import customer1 from '../../assets/customer1.jpg';
import customer2 from '../../assets/customer2.jpg';
import customer3 from '../../assets/customer3.jpg';
import './CustomerReview.css';

function CustomerReview() {
    const reviews = [
        {
            img: customer1,
            title: 'Embracing Industry 4.0: Unlock...',
            description: 'In the realm of modern manufacturing, the advent of Industry 4.0 has ushered in a new era of unprecedented innovation...',
        },
        {
            img: customer2,
            title: 'Leveraging AI-Powered Digital ...',
            description: 'Companies across industries are constantly seeking ways to streamline operations and reduce costs while maintaining or...',
        },
        {
            img: customer3,
            title: 'Unlocking Customer Loyalty: Th...',
            description: 'In a marketplace flooded with choices, businesses are constantly striving to build lasting connections with their...',
        },
    ];

    return (
        <div className="customer-review-container">
            <div className="customer-review-header">
                <p>Read our latest posts on warranty management, customer satisfaction, and sustainable practices</p>
            </div>
            <div className='customer-review-footer'>
            {reviews.map((review, index) => (
                <div key={index} className="review-card">
                    <div className="review-image">
                        <img src={review.img} alt={`Customer ${index + 1}`} className="review-img" />
                    </div>
                    <div className="review-content">
                        <p className="review-title"><a href="">{review.title}</a></p>
                        <p className="review-description">{review.description}</p>
                        {/* <p><button className="review-button">Learn More</button></p> */}
                    </div>
                </div>
            ))}

            </div>

           
        </div>
    );
}

export default CustomerReview;
