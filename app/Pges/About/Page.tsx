import Image from "next/image";
import about1 from "@/public/About-1.jpg";
import about2 from "@/public/About-2.jpg";
import about3 from "@/public/About-3.jpg";

const About = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20" id="about">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full lg:w-2/3 text-center">
            <span className="text-lg Rethink font-semibold uppercase text-(--text-light)">
              Designing spaces for living
            </span>
            <h1 className="text-5xl md:text-7xl Rethink font-semibold">
              we craft spaces with intention and care
            </h1>
          </div>
        </div>
        <div className="mt-20 about-wrap">
          <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full ">
            <div className="w-full lg:w-1/2 ">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about1}
                  alt="about1"
                  className="w-full h-fll rounded-md object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Transforming spaces with vision
                </h1>
                <p className="text-(--text-light) mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto ducimus illo molestias modi laboriosam temporibus
                  aspernatur obcaecati ipsum delectus hic vero, aut aliquam id
                  nesciunt. Totam enim iste itaque beatae.
                </p>
              </div>
            </div>
          </div>

          <div className="about-content flex flex-col-reverse lg:flex-row gap-10 justify-between items-center w-full mt-20 ">
            <div className="w-full lg:w-1/2 ">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Transforming spaces with vision
                </h1>
                <p className="text-(--text-light) mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto ducimus illo molestias modi laboriosam temporibus
                  aspernatur obcaecati ipsum delectus hic vero, aut aliquam id
                  nesciunt. Totam enim iste itaque beatae.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-end ">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about2}
                  alt="about1"
                  className="w-full h-fll rounded-md object-cover"
                />
              </div>
            </div>
          </div>

           <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full mt-20 ">
            <div className="w-full lg:w-1/2 ">
              <div className="w-full lg:w-[90%]">
                <Image
                  src={about3}
                  alt="about1"
                  className="w-full h-fll rounded-md object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-5xl Rethink font-semibold">
                  Transforming spaces with vision
                </h1>
                <p className="text-(--text-light) mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto ducimus illo molestias modi laboriosam temporibus
                  aspernatur obcaecati ipsum delectus hic vero, aut aliquam id
                  nesciunt. Totam enim iste itaque beatae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
