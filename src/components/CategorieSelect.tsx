import { items } from "@/helpers/categories";
import capitalizeFirstLetter from "@/helpers/FirstToUpperCase";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 w-full text-white rounded"
        type="button"
      >
        {selectedItem || "Select an option"}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full border rounded shadow-md">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item.name)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {capitalizeFirstLetter(item.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
