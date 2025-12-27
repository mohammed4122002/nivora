import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-8 ">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <Link
              href="/"
              className={`text-4xl lg:text-5xl font-bold Audiowide text-white`}
            >
              Liv<span className="text-(--prim-dark)">ora</span>
            </Link>
            <p className="text-(--text-light) DmSans my-5 ">
              Elevate your digital experience with Nivora - your ultimate
              platform for managing and optimizing all things digital.
            </p>
            <div className="flex gap-2 ">
              <i className="bi bi-facebook  border border-gray-500 rounded-full px-2 py-1 text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-colors duration-300 cursor-pointer "></i>
              <i className="bi bi-behance  border border-gray-500 rounded-full px-2 py-1 text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-colors duration-300 cursor-pointer "></i>
              <i className="bi bi-instagram  border border-gray-500 rounded-full px-2 py-1 text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-colors duration-300 cursor-pointer "></i>
              <i className="bi bi-twitter  border border-gray-500 rounded-full px-2 py-1 text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-colors duration-300 cursor-pointer "></i>
              <i className="bi bi-linkedin  border border-gray-500 rounded-full px-2 py-1 text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-colors duration-300 cursor-pointer "></i>
              <i className="bi bi-github  border border-gray-500 rounded-full px-2 py-1 text-(--text-light) hover:text-(--prim) hover:border-(--prim) transition-colors duration-300 cursor-pointer "></i>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
           <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
                <h3 className="text-white font-bold Rethink text-2xl mb-5">
                    Links
                </h3>
                <div className="flex flex-col space-y-2">
                    <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300 ">Home</Link>
                    <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300 ">About</Link>
                    <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300 ">Gallery</Link>
                </div>
                 


            </div>
            <div>
                <h3 className="text-white font-bold Rethink text-2xl mb-5">
                    Services
                </h3>
                <div className="flex flex-col space-y-2">
                    <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300 ">App Development</Link>
                    <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300 ">Web Development</Link>
                    <Link href="#" className="text-(--text-light) DmSans hover:text-(--prim) transition-colors duration-300 ">UI/UX Design</Link>
                </div>
            </div>
            <div>
                <h3 className="text-white font-bold Rethink text-2xl mb-5">
                    Contact
                </h3>
                <div className="flex flex-col space-y-2">
                    <span className="text-(--text-light) DmSans ">
                        Email: info@nivora.com
                    </span>
                </div>
                </div>

            </div>
            </div>
            </div>
      </div>
    </>
  );
};

export default Footer;
