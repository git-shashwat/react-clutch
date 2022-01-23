import React from "react";

const SloganMaker: React.FC = () => {
  const [searchText, setSearchText] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className='px-40'>
      <div className='flex flex-col px-48 py-16 bg-black-100 -mt-36 shadow-inner rounded-lg text-left shadow-black-95'>
        <h1 className='font-semibold text-4xl tracking-tighter text-black-12 mb-4'>
          Free slogan maker
        </h1>
        <p className='text-black-30 text-xl'>
          Simply enter a term that describes your business, and get up to 1,000
          <br /> relevant slogans for free.
        </p>
        <div className='mt-12 flex flex-col gap-2 w-1/3'>
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
            <div className='flex justify-between'>
              <h5 className='text-xl text-black-12'>
                We have generated 1,023 slogans for “{searchTerm}”
              </h5>
              <button className='text-primary-blue px-6 py-2 text-sm border border-primary-blue rounded'>
                Download all
              </button>
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
