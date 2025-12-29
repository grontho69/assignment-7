import bannerImg from "../assets/vector1.png";
import Container from "./Container";

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <Container>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* In Progress Card */}
        <div className="relative h-48 rounded-md overflow-hidden
          bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]
  text-white">

          {/* Decorative Images */}
          <img
            src={bannerImg}
            alt=""
            className=" absolute left-0 top-0 h-full "
          />
          <img
            src={bannerImg}
            alt=""
            className=" absolute right-0 top-0 h-full scale-x-[-1] "
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <p className="text-sm tracking-wide">In-Progress</p>
            <h2 className="text-5xl font-bold mt-2">{inProgress}</h2>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="relative h-48 rounded-md overflow-hidden
       bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1))] text-white">

          {/* Decorative Images */}
          <img
            src={bannerImg}
            alt=""
            className=" absolute left-0 top-0 h-full "
          />
          <img
            src={bannerImg}
            alt=""
            className=" absolute right-0 top-0 h-full scale-x-[-1] "
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <p className="text-sm tracking-wide">Resolved</p>
            <h2 className="text-5xl font-bold mt-2">{resolved}</h2>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Banner;
