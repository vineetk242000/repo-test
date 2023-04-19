import PropTypes from "prop-types";
import Card from "./Card";
// import { ExclamationIcon } from '@heroicons/react/outline';

const Grid = ({ homes = [] }) => {
  const isEmpty = homes.length === 0;

  return isEmpty ? (
    <p className="text-amber-700 bg-amber-100 px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
      {/* <ExclamationIcon className="shrink-0 w-5 h-5 mt-px" /> */}
      <span>Unfortunately, there is nothing to display yet.</span>
    </p>
  ) : (
    <>
      <div className="grid  gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        {homes.map(home => (
          <Card key={home.id} {...home} />
        ))}
      </div>
    </>
  );
};

export default Grid;
