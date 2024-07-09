import Subheading from "../components/UI/Subheading";

const Productandservices = () => {
  return (
    <section>
      <Subheading subheading={"Products and Services"} />
      <p className="md:mt-8 mt-4 font-inclusive">
        Path to Peace Products and Services
      </p>
      <p className="md:mt-16 mt-8 font-inclusive">
        Welcome to Path to Peace. Our mission is to provide you with valuable
        resources to help you achieve peace and tranquility in your life. We
        offer the following product:
      </p>
      <ol className="md:mt-16 mt-8">
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            1. Path to Peace Course
          </p>
          <ul>
            <li className="list-disc ml-8">
              <span>Description:</span> Our comprehensive course designed to
              guide you on a journey to inner peace. The course includes video
              lessons, guided meditations, and practical exercises.
            </li>
            <li className="list-disc ml-8">
              <span>Price:</span> Rs. 499
            </li>
            <li className="list-disc ml-8">
              <span>Delivery:</span> The course is delivered through live online
              sessions. Upon purchase, you will be added to a WhatsApp group
              where all students will receive updates and notifications. I will
              personally teach and interact with all students via Google Meet.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">2. Customer Support</p>
          <ul>
            <li className="list-disc ml-8">
              If you have any questions or need assistance with the course,
              please contact our support team at pathtopeace856@gmail.com.
            </li>
          </ul>
        </li>
      </ol>
      <p className="md:mt-16 mt-8 font-inclusive">
        Thank you for choosing Path to Peace. We are committed to helping you
        achieve a more peaceful and fulfilling life.
      </p>
    </section>
  );
};

export default Productandservices;
