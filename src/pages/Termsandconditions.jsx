import Subheading from "../components/UI/Subheading";

const Termsandconditions = () => {
  return (
    <section>
      <Subheading subheading={"Terms And Conditions"} />
      <p className="md:mt-8 mt-4 font-inclusive">Path to Peace Terms and Conditions</p>
      <p className="mt-4 font-inclusive">Effective Date: 9-Jul-2024</p>
      <p className="md:mt-16 mt-8 font-inclusive">
        Welcome to Path to Peace. By purchasing our course, you agree to the
        following terms and conditions:
      </p>
      <ol className="mt-16">
        <li>
          <p className="font-inclusive text-2xl mb-2">1. Course Purchase</p>
          <ul>
            <li className="list-disc ml-8">
              The &quot;Path to Peace&quot; course is available for purchase on
              our website.
            </li>
            <li className="list-disc ml-8">
              All sales are final. Once the payment is processed, you will
              receive access to the course materials.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            2. Use of Course Materials
          </p>
          <ul>
            <li className="list-disc ml-8">
              The course materials are for your personal use only. You may not
              share, distribute, or resell the materials.
            </li>
            <li className="list-disc ml-8">
              Unauthorized use of the course materials may result in termination
              of access without a refund.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">3. Payment</p>
          <ul>
            <li className="list-disc ml-8">
              All payments are processed securely through our payment provider.
            </li>
            <li className="list-disc ml-8">
              You agree to provide accurate and complete payment information.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            4. Intellectual Property
          </p>
          <ul>
            <li className="list-disc ml-8">
              All course materials are the intellectual property of Path to
              Peace.
            </li>
            <li className="list-disc ml-8">
              You may not reproduce, distribute, or create derivative works from
              the course materials without our prior written consent.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            5. Limitation of Liability
          </p>
          <ul>
            <li className="list-disc ml-8">
              Path to Peace is not liable for any indirect, incidental, or
              consequential damages arising from your use of the course.
            </li>
            <li className="list-disc ml-8">
              Our total liability to you for any claims arising from your use of
              the course is limited to the amount you paid for the course.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            6. Changes to Terms
          </p>
          <ul>
            <li className="list-disc ml-8">
            We reserve the right to update these terms and conditions at any time. Any changes will be posted on this page with an updated effective date.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">7. Contact Us</p>
          <ul>
            <li className="list-disc ml-8">
            If you have any questions about these terms and conditions, please contact us at pathtopeace856@gmail.com.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default Termsandconditions;
