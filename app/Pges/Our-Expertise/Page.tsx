import Image from "next/image";
import expertise1 from "@/public/expertise-1.jpg";
import expertise2 from "@/public/expertise-2.jpg";
import expertise3 from "@/public/expertise-3.jpg";

const expertise = [
  {
    id: 1,
    title: "Modern Facade 1",
    desc: "Sleek lines meet ref1ective glass",
    img: expertise1,
  },
  {
    id: 2,
    title: "Modern Facade 2",
    desc: "Sleek lines meet ref1ective glass",
    img: expertise2,
  },
  {
    id: 3,
    title: "Modern Facade 3",
    desc: "Sleek lines meet ref1ective glass",
    img: expertise3,
  },
];

const Expertise = () => {
  return (
    <>
      <div id="expertise" className="px-[8%] lg:px-[16%] py-20 pt-30 ">
        <div className="text-center">
          <span className="text-(--text-light) text-lg uppercase Rethink">
            Our distinctive expertise
          </span>
          <h2 className="text-5xl lg:text-8xl text-white Rethink font-boldmt-5">
            Designing and shaping unique spaces
          </h2>
        </div>
        <div className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-1.5 gap-8  ">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="group border border-gray-200/20 rounded-md text-center p-6 overflow-hidden cursor-pointer "
            >
              <h3 className="text-2xl Rethink font-semibold ">{item.title}</h3>
              <p className="text-gray-500 DmSans mb-5">{item.desc}</p>
              <div className="overflow-hiden rounded mb-5">
                <Image
                  src={item.img}
                  alt="alt"
                  className="mx-auto rounded transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <button className="Rethink font-medium text-lg cursor-pointer flex justify-center items-center w-full gap-2 border py-3 border-gray-200/20 hover:bg-gray-200/10 transition-all duration-300">Learn More <i className="bi bi-arrow-right"></i></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expertise;
