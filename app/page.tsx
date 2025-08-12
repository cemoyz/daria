import HomeComponent from "./component/home";

export default function Home() {
  return (
    <div className="big_container">
      <div className="container">
        <HomeComponent />
      </div>
      <hr className="w-full h-[1.5px] bg-[#FFE202]" />
      <p className="text-center text-xs font-light text-white sm:my-6 my-3">
        MOSTECH INDONESIA © 2025 DARIA.
      </p>
    </div>
  );
}
