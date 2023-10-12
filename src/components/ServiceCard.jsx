/* eslint-disable react/prop-types */
import "../styles/ServiceCard.css";

const ServiceCard = ({
  name = "default product",
  id,
  price = 0,
  imgSrc = "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
}) => {
  return (
    <div className="service-card">
      <div className="imgBx">
        <img src={imgSrc} alt={name} />
      </div>

      <div className="contentBx">
        <h2 className="size">{name}</h2>
        <h2 className="size">₹{price}</h2>
        <button
        // onClick={() => handler({ name, id, price, quantity: 1, imgSrc })}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
