import type User from "../models/User";
import './UserSelector.scss'

interface MyProps {
    users: User[];
    onUserChange: (selectedUser: string) => void;
}

function UserSelector(props: MyProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => props.onUserChange(e.target.value);

    return (
        <div className="user-selector">
            <label htmlFor="user">Select the current user:</label>
            <select id="user" onChange={handleChange}>
                {props.users.map((user) =>
                    <option value={user.userName}>
                        {user.displayName}
                    </option>
                )}
            </select>
        </div>
    )
}

export default UserSelector;