import { aboutItems } from "../../constant";

function About() {
  return (
    <section
      id="about"
      className=" w-full h-[100vh] flex flex-col-reverse items-center md:flex-row md:px-28 px-6 gap-10"
    >
      <div className="md:w-1/2 bg-red-00">
        <img
          className="rounded-3xl md:w-[640px] md:h-[410px]"
          src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
          alt="img"
        />
      </div>
      <div className="md:w-1/2 bg-gray-00 p-4">
        <span className="border mt-20 text-textColor border-textColor rounded-md text-sm px-2 py-1 md:text-base md:px-3 md:py-1.5">
          About Us
        </span>
        <h1 className="text-3xl text-orange-600 font-semibold mt-7">
          Who We Are?
        </h1>
        <p className="text-base md:mt-4 tracking-wide font-light mt-5">
          At TechEnchant, we’re a team of digital marketing experts <br /> who
          turn ideas into revenue-generating strategies. With years <br /> of
          experience in SEO, PPC, content, and branding, we help <br />{" "}
          businesses thrive in a competitive online world.
        </p>

        <div className="flex justify-around flex-wrap md:mt-7 mt-7">
          {aboutItems.map((item) => (
            <div
              key={item.id}
              className="stamp flex flex-col gap-1 justify-center text-center p-1"
            >
              <h1 className="text-3xl font-bold text-orange-600">
                {item.count}
              </h1>

              <h1 className="text-base  whitespace-pre-line font-medium text-orange-600">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
