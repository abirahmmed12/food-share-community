import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

const contentStyle = {
  height: '500px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  maxHeight: '500px',
};

const textOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
};

const buttonStyle = {
  position: 'absolute',
  top: '120px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const mobileContentStyle = {
  height: '300px',
};

const mobileImageStyle = {
  maxHeight: '300px',
};

const mobileButtonStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const images = [
  {
    src: 'https://i.ibb.co/dBF86rz/How-Much-These-Top-Rated-Food-Subscriptions-Will-Actually-Cost-You.jpg',
    text: 'Join Our Food Sharing Community',
  },
  {
    src: 'https://i.ibb.co/PrC6b8d/How-to-prepare-a-Restaurant-or-a-Cafe-to-the-pandemic-coronavirus-outbreak.jpg',
    text: 'Share and Explore Delicious Meals',
  },
  {
    src: 'https://i.ibb.co/zsP1R30/Where-to-Pay-Zakat-Al-Fitr-About-Islam.jpg',
    text: 'Connect with Food Enthusiasts',
  },
];

const Banner = () => {
  return (
    <Carousel autoplay autoplaySpeed={1000}>
      {images.map((image, index) => (
        <div key={index}>
          <h3 style={{
            ...contentStyle,
            ...(window.innerWidth <= 768 ? mobileContentStyle : {}),
          }}>
            <img src={image.src} alt="" style={{
              ...imageStyle,
              ...(window.innerWidth <= 768 ? mobileImageStyle : {}),
            }} />
            <div style={textOverlayStyle} className="text-white text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                {image.text}
              </h2>
             <Link to={'/login'}> <Button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#446c2c] text-white" style={{
                ...buttonStyle,
                ...(window.innerWidth <= 768 ? mobileButtonStyle : {}),
              }} type="primary">Join Now</Button></Link>
            </div>
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
