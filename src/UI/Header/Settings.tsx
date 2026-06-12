import { useContext } from 'react';

import ToggleSwitch from '../ToggleSwitch';
import Dropdown from '../Dropdown';
import Global from '../../context/global-context';
import Role from '../../context/role-provider';

const Settings = () => {
    const { toggleSwitch } = useContext(Role);
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
            {processModes && selectedProcessMode && toggleSwitch && (
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
                    onChange={(user) => setSelectedUserType(user)}
                />
            )}
        </div>
    );
};

export default Settings;
