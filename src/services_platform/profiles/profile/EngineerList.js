import React from "react";
import "../style_profile/EngineerList.css";

const people = [
  {
    name: "D.R.N.Weerakoon",
    email: "drdweerakoon123.gmail.com",
    role: "Civil/Structural/Estimation Engineer|Real Estate Land Development| ",
    imageUrl:
      "https://findit-resources.s3.amazonaws.com/forums/1657517719517.jpg",

    // lastSeen: "3h ago",
    // lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "[name]",
    email: "[email]",
    role: "[role]",
    imageUrl: "#",
    // lastSeen: "3h ago",
    // lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "[name]",
    email: "[email]",
    role: "[role]",
    imageUrl: "#",
    // lastSeen: null,
  },
  {
    name: "[name]",
    email: "[email]",
    role: "[role]",
    imageUrl: "#",
    // lastSeen: "3h ago",
    // lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "[name]",
    email: "[email]",
    role: "[role]",
    imageUrl: "#",
    // lastSeen: "3h ago",
    // lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "",
    email: "[email]",
    role: "[role]",
    imageUrl: "#",
    // lastSeen: null,
  },
];

export default function EngineerList() {
  return (
    <div className="page_e">
      <div className="background_img_e"></div>
      <div className="topic_a">
        Let Our <br /> <span className="main_e">CIVIL ENGINEERS</span>
        <br /> Show you the Way
      </div>
      <div className="engineerlist">
        <ul role="list" className="divide-y divide-black">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-white"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-black">
                   <a href="/about-engineer"> {person.name}</a>
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-black">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-orange-500">
                  {person.role}
                </p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-black">
                    Last seen{" "}
                    <time dateTime={person.lastSeenDateTime}>
                      {person.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    {/* <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-white">Online</p> */}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
