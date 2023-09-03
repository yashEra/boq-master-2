import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

// images
import WallsImg from './Assets/wall.jpg'
import StairsImg from './Assets/stairs.jpg'
import SlabImg from './Assets/slab.jpg'
import ColumnImg from './Assets/coloumn.jpg'
import TiebeamImg from './Assets/tie beam.jpeg'
import RoofImg from './Assets/roof.jpg'
import WindowsImg from './Assets/window.jpg'

const callouts = [
  {
    name: "Walls",
    description: "",
    imageSrc:WallsImg,
    imageAlt:
      "",
    href: "boq-walls",
  },
  {
    name: "Stairs",
    description: "",
    imageSrc:StairsImg,
    imageAlt:
      "",
    href: "boq-stairs",
  },
  {
    name: "Slabs",
    description: "",
    imageSrc:SlabImg,
    imageAlt: "",
    href: "boq-slab",
  },
  {
    name: "Columns",
    description: "",
    imageSrc:ColumnImg,
    imageAlt: "",
    href: "boq-columns",
  },
  {
    name: "Tiebeams",
    description: "",
    imageSrc:TiebeamImg,
    imageAlt: "",
    href: "boq-tiebeam",
  },
  {
    name: "Roofs",
    description: "",
    imageSrc:RoofImg,
    imageAlt: "",
    href: "boq-tiebeam",
  },
  {
    name: "windows",
    description: "",
    imageSrc:WindowsImg,
    imageAlt: "",
    href: "boq-tiebeam",
  },
  
];

const SingleUnitCalculator = () => {
  return (
    <div>
        <NavBar />
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Unit Calculators</h1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h2 className="text-2xl mt-6 text-sm text-gray-500 text-center">
                  <a href={callout.href} className="text-2xl font-bold">
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h2>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SingleUnitCalculator;
