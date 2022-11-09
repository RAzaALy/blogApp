import React from "react";

const Banner = () => {
  return (
    <>
      <section class="home homeSection mb-24" id="home">
        <img src="./images/Image.png" alt='bannerImg'/>

        <div class="content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-center text-6xl text-white ">Our Blog</h1>
          <h4 className="text-center text-4xl text-white mb-8">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </h4>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
