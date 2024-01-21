import React, { useState, useEffect } from "react";
import jsonData from "../assets/data/info.json";

export default function Feed() {
  const [selectedOption, setSelectedOption] = useState("party");
  const [filteredObjects, setFilteredObjects] = useState([]);

  useEffect(() => {
    const filteredData = jsonData.filter((obj) => obj.type === selectedOption);
    setFilteredObjects(filteredData);
  }, [selectedOption]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="h-screen max-h-screen p-5 snap-always snap-start w-full flex justify-center">
      <div className="grid">
        <select
          className="select select-primary snap-start"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option value="party">Parties</option>
          <option value="kickback">Kickbacks</option>
          <option value="rave">Raves</option>
          <option value="concert">Concerts</option>
        </select>

        <div className="flex overflow-x-auto w-full max-w-full snap-x snap-mandatory">
          {filteredObjects.map((obj, index) => (
            <div
              key={index}
              href="#"
              class="w-full rounded-lg p-4 shadow-indigo-100 flex-shrink-0 snap-always snap-center"
            >
              <div className="flex justify-center">
                <img
                  alt="Home"
                  src={obj.img}
                  class="h-64 w-96 rounded-md object-cover"
                />
              </div>

              <div class="mt-2">
                <dl>
                  <div>
                    <dt class="sr-only">Name</dt>

                    <dd class="text-sm text-gray-500">{obj.name}</dd>
                  </div>

                  <div>
                    <dt class="sr-only">Address</dt>

                    <dd class="font-medium">{obj.location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
