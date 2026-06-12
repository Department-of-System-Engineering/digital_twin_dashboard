import { useContext } from 'react';

import Global from '../../context/global-context';
import ToggleSwitch from '../ToggleSwitch';
import Dropdown from '../Dropdown';

const Settings = () => {
    const {
        userTypes,
        processModes,
        selectedUserType,
        selectedProcessMode,
        setSelectedProcessMode,
        setSelectedUserType,
    } = useContext(Global);

    return (
        <div className="flex justify-center gap-2">
            {processModes && selectedProcessMode && (
                <ToggleSwitch
                    options={processModes}
                    value={selectedProcessMode}
                    onChange={setSelectedProcessMode}
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
    );
};

export default Settings;
