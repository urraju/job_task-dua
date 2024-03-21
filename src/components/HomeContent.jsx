import { CiSearch } from "react-icons/ci";
import Setting from "./Setting/Setting";
import Image from "next/image";
import logo from "/public/assets/duacard.png";

const HomeContent = async ({ dataDua }) => {
  console.log(dataDua);
  return (
    <div className="max-w-screen-2xl   mx-auto py-4 grid grid-cols-12 gap-6">
      {/* left content  */}
      <div className="col-span-3 border   rounded bg-white">
        <div className="bg-[#1FA45B] text-center rounded-t-md py-2 font-inter">
          <p className="text-lg text-white">Categories</p>
        </div>
        {/* search bar  */}
        <div className="px-2">
          <div className="flex items-center   gap-3 mt-3  border w-full px-2 py-2 bg-white rounded-md">
            <CiSearch className="bg-gray-100 text-gray-600 text-xl rounded-lg " />
            <input
              className="outline-none border-none font-light placeholder:text-sm"
              type="text"
              placeholder="Search by Dua Name"
            />
          </div>
        </div>
        <div className="px-4 ">
          {dataDua.map((item) => (
            <p
              key={item._id}
              className="border-l-2 border-green-500 border-dashed text-sm px-4 mb-3 "
            >
              <a href={`#category_${item._id}`}>{item.category}</a>
            </p>
          ))}
        </div>
      </div>

      {/* center content  */}

      <div className="col-span-6 border h-[100vh] overflow-y-scroll scroll-smooth  shadow-xl">
        <div className="bg-white rounded-md p-2 mb-2">
          <p className="text-lg ">
            <span className="text-lg font-semibold font-inter text-[#1FA45B]">
              Section :{" "}
            </span>
            The servant is dependent on his Lord
          </p>
        </div>

        {dataDua.map((item, index) => (
          <div
            key={item._id}
            className="mb-4  rounded-lg font-inter bg-white p-5"
          >
            <div
              id={`category_${item._id}`}
              className="flex gap-4 mb-2 items-center"
            >
              <Image src={logo} />
              <p className="text-lg text-[#1FA45B] font-bold">
                {index + 1}.{item.title}
              </p>
            </div>
            <p className="py-4 font-medium text-lg text-gray-500">
              {item.description}
            </p>
            <p className="py-4 font-medium text-lg ">{item.category}</p>
            <p>
              <span>Transliteration</span>
              {item.transliteration}
            </p>
            <p>{item.translation}</p>
            <p>{item.reference}</p>
          </div>
        ))}
      </div>

      {/* right content  */}

      <div className="col-span-3 border h-max rounded-2xl  p-4 items-center bg-white">
        <h1 className="font-inter font-bold text-center text-2xl py-4">
          Setting
        </h1>
        <Setting />
      </div>
    </div>
  );
};
export default HomeContent;
