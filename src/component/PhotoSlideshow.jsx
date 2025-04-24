import Slider from 'react-slick';

const PhotoSlideshow = () => {
  const images = [
    "/birthday-wish/photo1.jpg",
    "/birthday-wish/photo2.jpg",
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-xl overflow-hidden bg-white p-4">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`Slide ${i}`} className="rounded-xl w-full h-64 object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlideshow;
