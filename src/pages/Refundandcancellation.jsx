import Subheading from "../components/UI/Subheading";

function Refundandcancellation() {
  return (
    <section>
      <Subheading subheading={"Refund and Cancellation Policy"} />
      <p className="md:mt-8 mt-4 font-inclusive">
        Path to Peace Refund and Cancellation Policy
      </p>
      <p className="mt-4 font-inclusive">Effective Date: 9-Jul-2024</p>
      <p className="md:mt-16 mt-8 font-inclusive">
        We strive to provide high-quality courses and services. Please review
        our refund and cancellation policy below:
      </p>
      <ol className="md:mt-16 mt-8">
        <li>
          <p className="font-inclusive text-2xl mb-2">1. Refund Policy</p>
          <ul>
            <li className="list-disc ml-8">
              All sales of the &quot;Path to Peace&quot; course are final. We do
              not offer refunds once the payment is processed.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">2. Cancellation Policy</p>
          <ul>
            <li className="list-disc ml-8">
              Since the course is delivered digitally, there is no cancellation
              period after the purchase is completed.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">3. Course Access Issues</p>
          <ul>
            <li className="list-disc ml-8">
            If you experience any issues accessing the course materials, please contact us at pathtopeace856@gmail.com for assistance.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            4. Exceptional Circumstances
          </p>
          <ul>
            <li className="list-disc ml-8">
            In exceptional circumstances, we may consider a refund or credit at our sole discretion. Please contact us at [contact email] to discuss your situation.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">5. Contact Us</p>
          <ul>
            <li className="list-disc ml-8">
              If you have any questions about this Policy, please
              contact us at pathtopeace856@gmail.com.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
}

export default Refundandcancellation;
