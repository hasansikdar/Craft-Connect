import React from "react";
import groupimage1 from "../../../assets/jinnahGroupPic/group image1.jpg";
import groupimage2 from "../../../assets/jinnahGroupPic/group image2.jpg";
import groupimage3 from "../../../assets/jinnahGroupPic/group image3.jpg";
import groupimage4 from "../../../assets/jinnahGroupPic/group image4.jpg";
import groupimage5 from "../../../assets/jinnahGroupPic/group image5.jpg";
import groupimage6 from "../../../assets/jinnahGroupPic/group image6.jpg";
import groupimage7 from "../../../assets/jinnahGroupPic/group image7.jpg";

const DiscoverCard = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="card card-compact w-[300px] text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img
            className="rounded h-[200px] w-[300px]"
            src={groupimage1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Just Craftin' Around</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-[300px]  text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img
            className="rounded h-[200px] w-[300px]"
            src={groupimage2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Out of the Box Crafts</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-[300px]  text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img src={groupimage3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Handy Mandy</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-[300px]  text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img src={groupimage4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Craftastic</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-[300px]  text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img src={groupimage5} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Blue Ribbon Crafters</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-[300px]  text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img src={groupimage6} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Knotty Knitters</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-[300px]  text-black dark:text-white bg-gray-100 dark:bg-gray-900 shadow-xl">
        <figure>
          <img src={groupimage7} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">CraftWorks</h2>
          <p>14k members . 10+ post per day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
