import React, { useState } from "react";

const SellerPro = () => {
  const [profile, setProfile] = useState(false);
  return (
    <div>
      <h1>Here is seller products</h1>
      <div className="cursor-pointer" onClick={() => setProfile(!profile)}>
        <h1>Md Hasan</h1>
      </div>

      {profile && (
        <div className="w-[80%] md:w-[30%] rounded-md absolute bottom-0 right-4 z-[999] bg-zinc-800">
          <div className="px-3 py-3">
            <div className="flex justify-between mb-2">
              <div className="flex items-center cursor-pointer hover:bg-zinc-600 w-full p-2 rounded-md ">
                <h3 className="text-xl">Md Hasan</h3>
              </div>
              <div onClick={() => setProfile(false)} className="btn btn-ghost">
                ✕
              </div>
            </div>
            <div className=" border-t border-zinc-600"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerPro;
