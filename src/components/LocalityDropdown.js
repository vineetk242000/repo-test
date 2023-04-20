import React, { useState, useContext } from "react";
// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

// import headless ui components
import { Menu } from "@headlessui/react";
// import context

const LocalityDropdown = () => {
  const [ locality, setlocality] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative  ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <CiLocationOn className="dropdown-icon-primary" />
        <div>
          <div className="text-sm text-gray-500 font-medium py-1 "> Locality</div>
          <div className="sm:text-md text-sm font-medium leading-tight"> {locality} </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu text-center ">
       <Menu.Item as="li" className="menu-item">
          <button
            onClick={() => {
              setlocality("1");
              setIsOpen(false);
            }}
            className="menu-item-btn"
          >
            Bidhannagar
          </button>
        </Menu.Item>
        <Menu.Item as="li" className="menu-item">
          <button
            onClick={() => {
              setlocality("2");
              setIsOpen(false);
            }}
            className="menu-item-btn"
          >
            Pump House
          </button>
        </Menu.Item>
        <Menu.Item as="li" className="menu-item">
          <button
            onClick={() => {
              setlocality("3");
              setIsOpen(false);
            }}
            className="menu-item-btn"
          >
            Station Road
          </button>
        </Menu.Item>
        <Menu.Item as="li" className="menu-item">
          <button
            onClick={() => {
              setlocality("4");
              setIsOpen(false);
            }}
            className="menu-item-btn"
          >
            Stell Park
          </button>
        </Menu.Item>

      </Menu.Items>
    </Menu>
  );
};

export default LocalityDropdown;