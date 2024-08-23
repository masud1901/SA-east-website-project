const WhyUsSection = () => {
  return (
    <section
      id="why-us"
      className="why-us-section py-5"
      style={{
        background: "linear-gradient(to bottom, #023E8A, #021d5e)",
      }}
    >
      <div className="container">
        {/* Increased header size and added margin for better spacing */}
        <h2 className="text-white text-center fs-1 mb-4">WHY US?</h2>
        <div className="row justify-content-center fs-2">
          <p className="text-white text-center text-md-left fs-6">
            We’ve earned our customers&apos; loyalty through years of dedicated
            service and consistent growth. Our skilled team of engineers and
            technicians ensures that we deliver on our promises, making us a
            trusted name in the industry. We strive for excellence in every
            project, fostering strong, lasting relationships with our clients.
          </p>
          <p className="text-white text-center text-md-left fs-6">
            At Al-Shams Al-Amna, customer satisfaction is our top priority. We
            are committed to offering top-quality services at competitive
            prices, without compromising on safety. Our innovative approach and
            dedication to excellence keep our clients coming back, time and time
            again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
