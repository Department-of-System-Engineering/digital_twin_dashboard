import { useContext } from 'react';
import ToggleSwitch from '../UI/ToggleSwitch';
import Dropdown from '../UI/Dropdown';
import { IoLogOut, IoThermometerOutline, IoWaterSharp } from 'react-icons/io5';
import Global from '../context/global-context';

const Header = () => {
    const {
        processModes,
        selectedProcessMode,
        setSelectedProcessMode,
        processTypes,
        selectedProcessType,
        setSelectedProcessType,
        userTypes,
        selectedUserType,
        setSelectedUserType,
        globalTemperature,
        globalHumidity,
        logout,
    } = useContext(Global);

    return (
        <header className="w-full bg-violet-800 text-white px-5 py-2 h-15 flex items-center">
            <div className="flex gap-2">
                {processModes && selectedProcessMode && (
                    <ToggleSwitch
                        options={processModes}
                        value={selectedProcessMode}
                        onChange={setSelectedProcessMode}
                    />
                )}
                {processTypes && selectedProcessType && (
                    <ToggleSwitch
                        options={processTypes}
                        value={selectedProcessType}
                        onChange={setSelectedProcessType}
                    />
                )}
                {userTypes && selectedUserType && (
                    <Dropdown
                        options={userTypes}
                        value={selectedUserType}
                        onChange={setSelectedUserType}
                    />
                )}
            </div>
            <div className="ml-auto flex gap-10">
                <div className="flex gap-4">
                    <div className="flex">
                        <IoThermometerOutline size={28} className="text-amber-300" />
                        <span className="font-semibold text-lg">
                            {globalTemperature ? `${globalTemperature} °C` : 'N/A'}
                        </span>
                    </div>
                    <div className="flex">
                        <IoWaterSharp size={28} className="text-amber-300" />
                        <span className="font-semibold text-lg">
                            {' '}
                            {globalHumidity ? `${globalHumidity} %` : 'N/A'}
                        </span>
                    </div>
                </div>

                <IoLogOut
                    size={28}
                    className="text-amber-300 hover:cursor-pointer"
                    onClick={logout}
                />
            </div>
        </header>
    );
};

export default Header;
