import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { BsStars, BsTriangleFill } from "react-icons/bs";
// import { HeartIcon } from '@heroicons/react/solid';

const Card = ({
  id = "",
  image = "",
  title = "",
  address = "",
  sqfeet = 0,
  guests = 0,
  beds = 0,
  baths = 0,
  price = 0,
  favorite = false,
  onClickFavorite = () => null,
}) => (
  // <Link href={`/homes/${id}`}>
  //   <div className="block w-full">
  //     <div className="relative">
  //       <div className="bg-gray-200 rounded-lg shadow overflow-hidden aspect-w-16 aspect-h-9">
  //         {image ? (
  //           <Image
  //             src={image}
  //             alt={title}
  //             layout="fill"
  //             objectFit="cover"
  //             className="hover:opacity-80 transition"
  //           />
  //         ) : null}
  //       </div>
  //       <button
  //         type="button"
  //         onClick={e => {
  //           e.preventDefault();
  //           if (typeof onClickFavorite === 'function') {
  //             onClickFavorite(id);
  //           }
  //         }}
  //         className="absolute top-2 right-2"
  //       >
  //         {/* <HeartIcon
  //           className={`w-7 h-7 drop-shadow-lg transition ${
  //             favorite ? 'text-red-500' : 'text-white'
  //           }`}
  //         /> */}
  //       </button>
  //     </div>
  //     <div className="mt-2 w-full text-black font-semibold ">
  //       {title ?? ''}
  //     </div>
  //     <ol className="mt-1 inline-flex items-center space-x-1 text-gray-500">
  //     <li>
  //         <span>{address ?? ''} address</span>
  //       </li>
  //       <li>
  //         <span>{guests ?? 0} guests</span>
  //         <span aria-hidden="true"> · </span>
  //       </li>
  //       <li>
  //         <span>{beds ?? 0} beds</span>
  //         <span aria-hidden="true"> · </span>
  //       </li>
  //       <li>
  //         <span>{baths ?? 0} baths</span>
  //       </li>
  //     </ol>
  //     <p className="mt-2">
  //       {new Intl.NumberFormat('en-US', {
  //         style: 'currency',
  //         currency: 'USD',
  //       }).format(price ?? 0)}{' '}
  //       <span className="text-gray-500">/night</span>
  //     </p>
  //   </div>
  // </Link>
  <Link href={`/homes/${id}`}>
    <div className="relative max-w-sm rounded-lg shadow-md hover:shadow-xl bg-white">
      {/* <Image className="rounded-t-lg  " src="/dummyhouse.png" width={369} height={100} alt="" /> */}
     <div className=" h-56 overflow-hidden ">
     {image ? (
        <Image
          src={image}
          alt={title}
          width={369}
          height={240}
          className="hover:opacity-80 transition rounded-t-lg  "
        />
      ) : null}
     </div>

      <div className=" absolute  z-10 -mt-5 -ml-3 flex  items-center gap-x-1 rounded-tl-lg rounded-tr-md rounded-br-lg bg-purple-700 py-1 px-7 text-white ">
        {" "}
        <BsStars /> POPULAR
      </div>
      <BsTriangleFill className=" absolute  -ml-2.5 rotate-12  text-purple-900" />
      <div className="flex justify-between px-5 pt-8">
        <p className="mb-2 text-xl font-bold tracking-tight text-purple-700 ">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price ?? 0)}{" "}
          <span className=" text-sm font-normal text-gray-500">/month</span>
        </p>
        <span className=" flex h-10 w-10 items-center justify-center  rounded-full border border-purple-700 text-xl text-purple-800 ">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="space-y-4  px-5 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  line-clamp-1 ">
          {title ?? ""}
        </h5>
      </div>
      <div className="divide-y-2 px-5">
        <p className="mb-3 font-normal text-gray-700 line-clamp-1   ">
          {address ?? ""}
        </p>
        <div className="flex flex-wrap justify-between py-3">
          <p className="flex items-center py-2   ">
            <span className=" text-purple-800 ">
              <BiBed />
            </span>
            <span className="px-1 text-sm text-gray-700">{beds ?? 0} Beds</span>
          </p>
          <p className="flex items-center   ">
            <span className=" text-purple-800 ">
              <BiBath />
            </span>
            <span className="px-1 text-sm text-gray-700">
              {baths ?? 0} Bathrooms
            </span>
          </p>
          <p className=" flex items-center   ">
            <span className=" text-purple-800 ">
              <BiArea />
            </span>
            <span className="px-1 text-sm text-gray-700">
              {" "}
              {sqfeet ?? 0} Sqfeet
            </span>
          </p>
        </div>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  sqfeet: PropTypes.number,
  guests: PropTypes.number,
  beds: PropTypes.number,
  baths: PropTypes.number,
  price: PropTypes.number,
  favorite: PropTypes.bool,
  onClickFavorite: PropTypes.func,
};

export default Card;
