const WhyUsSection = () => {
  return (
    <section
      id="why-us"
      className="why-us-section py-5 reveal"
      style={{
        background: "linear-gradient(to bottom, #023E8A, #021d5e)",
      }}
    >
      <div className="container">
        <h1
          className="text-white text-center mb-3"
          style={{ fontWeight: "bold" }}
        >
          WHY US?
          <hr />
        </h1>
        <div className="row justify-content-center fs-2">
          <p className="text-danger text-center text-md-left fs-6 ps-5 pe-5">
            Our services have earned us customer loyalty over the years. The
            risks we took and the strength we showed have helped us grow into a
            trusted name. Our team of engineers, technicians, and laborers has
            consistently met the goals of both Al-Shams Al-Amna Company and our
            clients, fostering mutual understanding. We aim to provide excellent
            services at minimal prices without compromising on safety, which is
            a key priority for us.
          </p>
          <p className="text-danger text-center text-md-left fs-6 ps-5 pe-5 mb-4">
            At Al-Shams Al-Amna Company, we strive for 100% customer
            satisfaction. Over the years, we{"'"}ve maintained strong
            connections, even with our earliest customers. We continuously work
            to offer the best quality services and develop new ideas to meet our
            targets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
