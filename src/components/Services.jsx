import "../styles/Service.css";
import ServiceCard from "./ServiceCard";
import data from "../data/data.json";
const Service = () => {
  console.log(data);
  return (
    <section>
      <h1 className="service-heading">
        Our <span>Services</span>
      </h1>
      <div className="card-container">
        {data.map((i) => (
          <ServiceCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
