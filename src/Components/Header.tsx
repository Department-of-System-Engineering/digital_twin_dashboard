import type { OptionItem } from "../types";

import { useState } from "react";
import ToggleSwitch from "../UI/ToggleSwitch";
import Dropdown from "../UI/Dropdown";
import { IoLogOut, IoThermometerOutline, IoWaterSharp } from "react-icons/io5";

const PROCESS_MODES: OptionItem[] = [
  { id: 1, name: "Real" },
  { id: 2, name: "Simulation" },
];

const PROCESS_TYPES: OptionItem[] = [
  { id: 1, name: "Monitor" },
  { id: 2, name: "Control" },
];

const USER_TYPES: OptionItem[] = [
  { id: 1, name: "Műszakvezető" },
  { id: 2, name: "Operátor" },
  { id: 3, name: "Karbantartó" },
  { id: 4, name: "Minőségellenőr" },
];

const Header = () => {
  const [actualProcessMode, setActualProcessMode] = useState<OptionItem>(
    PROCESS_MODES[0]
  );
  const [actualProcessType, setActualProcessType] = useState<OptionItem>(
    PROCESS_TYPES[0]
  );
  const [selectedUserType, setSelectedUserType] = useState<OptionItem>(
    USER_TYPES[0]
  );
  return (
    <header className="w-full bg-violet-800 text-white px-5 py-2 h-15 flex items-center">
      <div className="flex gap-2">
        <ToggleSwitch
          options={PROCESS_MODES}
          value={actualProcessMode}
          onChange={setActualProcessMode}
        />
        <ToggleSwitch
          options={PROCESS_TYPES}
          value={actualProcessType}
          onChange={setActualProcessType}
        />
        <Dropdown
          options={USER_TYPES}
          value={selectedUserType}
          onChange={setSelectedUserType}
        />
      </div>
      <div className="ml-auto flex gap-10">
        <div className="flex gap-4">
          <div className="flex">
            <IoThermometerOutline size={28} className="text-amber-300" />
            <span className="font-semibold text-lg">{23.5} °C</span>
          </div>
          <div className="flex">
            <IoWaterSharp size={28} className="text-amber-300" />
            <span className="font-semibold text-lg">{45} %</span>
          </div>
        </div>

        <IoLogOut
          size={28}
          className="text-amber-300 hover:cursor-pointer"
          onClick={() => console.log("LOGOUT")}
        />
      </div>
    </header>
  );
};

export default Header;
