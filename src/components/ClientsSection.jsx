import Slider from "react-infinite-logo-slider";
import client1 from "../../public/assets/client/client1-Photoroom.png";
import client2 from "../../public/assets/client/client2-Photoroom.png";
import client3 from "../../public/assets/client/client3-Photoroom.png";
import client4 from "../../public/assets/client/client4-Photoroom.png";
import client5 from "../../public/assets/client/client5-Photoroom.png";
import client6 from "../../public/assets/client/client6-Photoroom.png";
import client7 from "../../public/assets/client/client7-Photoroom.png";
import client8 from "../../public/assets/client/client8-Photoroom.png";
import client9 from "../../public/assets/client/client9-Photoroom.png";

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
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugit aut harum labore facere, eveniet pariatur, earum aliquam debitis error non unde sapiente tempora minus impedit repellat itaque saepe? Perspiciatis quos sit temporibus veniam libero reiciendis quia commodi vero sed quaerat rerum fuga nisi, alias expedita optio atque quae cupiditate minima dignissimos consequatur labore officia. Ea doloribus ipsum tempore vero doloremque officiis, reprehenderit itaque delectus autem voluptate ullam consequuntur culpa labore ipsa id corrupti laudantium fuga rem quasi, cupiditate sequi quae voluptates. Ipsam placeat dicta, tenetur temporibus, explicabo qui ullam, eaque fuga rerum illo iste repellat itaque? Sed, ut aliquam!</div>
          <Slider.Slide>
            <img
              src={client1}
              alt="any"
              style={{ width: "300px", height: "70px" }}
            />
          </Slider.Slide>
          <Slider.Slide></Slider.Slide>
          <Slider.Slide>
            <img
              src={client2}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client3}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client4}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client5}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client6}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client7}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client8}
              alt="any"
              style={{ width: "100px", height: "100px" }}
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={client9}
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
