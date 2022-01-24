import React from "react";
import Pagination from "../Pagination/Pagination";
import Slogan from "../Slogan/Slogan";

const SloganMaker: React.FC = () => {
  const [searchText, setSearchText] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const slogans = [
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
  ];

  return (
    <div className='px-40 pb-20 w-full table bg-black-98'>
      <div className='flex flex-col px-48 py-16 bg-black-100 -mt-36 shadow-inner rounded-lg text-left shadow-black-95'>
        <h1 className='font-semibold text-4xl tracking-tight text-black-12 mb-4'>
          Free slogan maker
        </h1>
        <p className='text-black-30 text-xl'>
          Simply enter a term that describes your business, and get up to 1,000
          <br /> relevant slogans for free.
        </p>
        <div className='mt-12 flex flex-col gap-2 lg:w-1/3'>
          <label className='text-black-30'>Word for your slogan</label>
          <input
            type='search'
            className='bg-black-100 text-black-12 border border-[#D9D9D9] px-4 py-2 rounded focus:outline-none focus:border-primary-blue'
            placeholder='Enter a term'
            results={5}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className='mt-11 bg-primary-blue w-max px-6 py-3 rounded text-black-100'
            onClick={() => setSearchTerm(searchText)}
          >
            Generate slogans
          </button>
        </div>
        {/* horizontal divider */}
        <div className='mt-11 w-full border-t border-black-85' />
        {/* List of results */}
        <div className='mt-14'>
          {searchTerm ? (
            <div className='flex-col gap-9'>
              <div className='flex justify-between items-start'>
                <h5 className='text-xl text-black-12'>
                  We have generated 1,023 slogans for “{searchTerm}”
                </h5>
                <a
                  className='text-primary-blue px-6 py-2 text-sm border border-primary-blue rounded'
                  href='results.json'
                  download={`slogans_for_${searchTerm}.json`}
                >
                  Download all
                </a>
              </div>
              {/* two column list of items */}
              <div className='grid grid-cols-2 gap-x-8 mt-9 gap-y-5'>
                {/* render Slogan 12 times */}
                {Array(18)
                  .fill(0)
                  .map((_, i) => (
                    <Slogan key={i} slogan={slogans[i % 3]} />
                  ))}
              </div>
              <div className='mt-11 w-full border-t border-black-85' />
              {/* pagination */}
              <div className='flex justify-between mt-7'>
                <Pagination />
              </div>
            </div>
          ) : (
            <h5 className='text-xl text-black-12'>
              Please enter a term to generate slogans...
            </h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default SloganMaker;
