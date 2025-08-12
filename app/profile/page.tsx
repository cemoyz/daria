import About from "../component/about";
import Contact from "../component/contact";
import Kemitraan from "../component/kemitraan";
import Layanan from "../component/layanan";
import Visi from "../component/visi";

export default function ProfilePage() {
  return (
    <div className="big_container pt-20">
      <div className="container">
        <About />
        <Visi />
        <Layanan />
        <Kemitraan />
        <Contact />
      </div>
      <hr className="w-full h-[1.5px] bg-[#FFE202]" />
      <p className="text-center text-xs font-light text-white sm:my-6 my-3">
        MOSTECH INDONESIA © 2025 DARIA.
      </p>
    </div>
  );
}
