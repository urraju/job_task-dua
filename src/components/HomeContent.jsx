import { CiSearch } from "react-icons/ci";

const HomeContent = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-4 grid grid-cols-12 gap-6">
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
      </div>

      {/* center content  */}

      <div className="col-span-6 border border-cyan-500 bg-white shadow-xl">
        <p>
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
          dolorem perspiciatis eum similique, eaque magni, saepe rem sit ipsum
          labore blanditiis esse praesentium laboriosam? Quaerat a sit ex! Quia
          itaque facilis non impedit dolorum delectus reprehenderit quos,
          laborum sapiente, libero labore doloremque laudantium. Quam numquam
          consequuntur placeat soluta. Odit a autem assumenda delectus ducimus
          suscipit, ipsam nulla exercitationem quidem ipsum voluptatum repellat
          cupiditate saepe soluta voluptatibus officiis in optio fugiat eveniet
          fugit possimus, voluptatem ad culpa pariatur! Exercitationem voluptas
          eligendi mollitia cumque doloremque error, veniam nemo tempora dolore,
          quos aut. Nemo, corrupti fuga inventore optio, facilis error soluta
          hic, velit vel dignissimos ullam. Necessitatibus corporis aspernatur,
          voluptatum ut cumque debitis assumenda veritatis sint iste iusto.
        </p>
      </div>

      {/* right content  */}

      <div className="col-span-3 border border-cyan-500 bg-white"></div>
    </div>
  );
};
export default HomeContent;
