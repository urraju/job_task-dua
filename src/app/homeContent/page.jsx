
 
import { CiSearch } from "react-icons/ci";
import Setting from "./Setting/Setting";
 
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category/Category";
 
const page = ({children}) => {
  return (
    <div className="max-w-screen-2xl   mx-auto py-4 grid grid-cols-12 gap-6">
      {/* left content  */}
      <div className="col-span-3 border   rounded-md bg-white">
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
         <Category/>
      </div>

      {/* center content  */}

      <div className="col-span-6 border     shadow-xl">
        <div className="bg-white rounded-md p-2 mb-2">
            <p className="text-lg "><span className="text-lg font-semibold font-inter text-[#1FA45B]">Section : </span>The servant is dependent on his Lord</p>
        </div>
        <p className="bg-white p-4 rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quas,
          odio perferendis fugit deserunt consequuntur commodi impedit natus
          fuga repellendus a quisquam vel deleniti, molestiae ab enim amet
          recusandae quasi assumenda cum at possimus ex et? Ex, dicta odio culpa
          nam molestias vel modi saepe? Hic similique consequuntur aliquam
          laudantium eos itaque, cum natus? Error labore animi asperiores quam
          molestiae natus inventore. Voluptatibus a earum esse perspiciatis
          temporibus, nostrum enim omnis eaque nesciunt, modi quibusdam
          laboriosam culpa labore! Hic quos quo exercitationem quod repellat id,
          ullam, cum praesentium sapiente aliquid, dolores at facere? Vero
        
        </p>
        {children}
      </div>

      {/* right content  */}

      <div className="col-span-3 border rounded-2xl  p-4 items-center bg-white">
        <h1 className="font-inter font-bold text-center text-2xl py-4">Setting</h1>
        <Setting/>
      </div>

    </div>
  );
};
export default page;
