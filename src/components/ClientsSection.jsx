import Slider from "react-infinite-logo-slider";

const Component = () => {
  return (
    <>
      <div className="mb-5">
        <h1
          style={{ fontWeight: "bold", color: "#023e8a" }}
          className="text-center mb-5"
        >
          Our Clients
        </h1>
        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <img
              src="/public/assets/client/client1-Photoroom.png"
              alt="any"
              style={{ width: "300px", height: "70px" }}
            />
          </Slider.Slide>
          <Slider.Slide></Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client2-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client3-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client4-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client5-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client6-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client7-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client8-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/public/assets/client/client9-Photoroom.png"
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
        </Slider>
      </div>
    </>
  );
};

export default Component;
