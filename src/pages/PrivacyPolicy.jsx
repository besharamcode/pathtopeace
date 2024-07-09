import Subheading from "../components/UI/Subheading";

const PrivacyPolicy = () => {
  return (
    <section>
      <Subheading subheading={"Privacy Policy"} />
      <p className="md:mt-8 mt-4 font-inclusive">Path to Peace Privacy Policy</p>
      <p className="mt-4 font-inclusive">Effective Date: 9-Jul-2024</p>
      <p className="md:mt-16 mt-8 font-inclusive">
        At Path to Peace, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy outlines how we collect,
        use, and safeguard your data when you purchase our course, &quot;Path to
        Peace.&quot;
      </p>
      <ol className="md:mt-16 mt-8">
        <li>
          <p className="font-inclusive text-2xl mb-2">
            1. Information We Collect
          </p>
          <ul>
            <li className="list-disc ml-8">
              <span>Personal Information:</span> When you make a purchase, we
              collect personal information such as your name, email address, and
              payment details.
            </li>
            <li className="list-disc ml-8">
              <span>Usage Data:</span> We may collect information about how you
              interact with our website, including your IP address, browser
              type, and pages visited.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            2. How We Use Your Information
          </p>
          <ul>
            <li className="list-disc ml-8">
              To process your payment and deliver the course.
            </li>
            <li className="list-disc ml-8">
              To communicate with you regarding your purchase.
            </li>
            <li className="list-disc ml-8">
              To improve our website and services.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">3. Data Protection</p>
          <ul>
            <li className="list-disc ml-8">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            4. Sharing Your Information
          </p>
          <ul>
            <li className="list-disc ml-8">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties, except to trusted third parties
              who assist us in operating our website, conducting our business,
              or servicing you.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">5. Your Rights</p>
          <ul>
            <li className="list-disc ml-8">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at
              pathtopeace856@gmail.com.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">
            6. Changes to This Policy
          </p>
          <ul>
            <li className="list-disc ml-8">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </li>
          </ul>
        </li>
        <li className="mt-8">
          <p className="font-inclusive text-2xl mb-2">7. Contact Us</p>
          <ul>
            <li className="list-disc ml-8">
              If you have any questions about this Privacy Policy, please
              contact us at pathtopeace856@gmail.com.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicy;
