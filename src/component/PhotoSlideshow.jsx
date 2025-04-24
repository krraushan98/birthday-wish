import Slider from "react-slick";

const PhotoSlideshow = () => {
  const images = [
    "/birthday-wish/photo1.jpg",
    "/birthday-wish/photo3.jpg",
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
    <div className="w-full max-w-4xl lg:h-[85vh] mx-auto shadow-2xl rounded-xl overflow-hidden bg-white p-6">

      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`Slide ${i}`}
              className="rounded-xl w-full h-95 sm:h-85 lg:h-[78vh] object-cover sm:object-cover object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlideshow;
