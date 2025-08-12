import { useState } from 'react';
import './App.scss';
import ProfileCard from './components/ProfileCard';
import UserSelector from './components/UserSelector';
import User from './models/User';

function App() {
    const users: User[] = [
        new User("vcrest", "Victor Crest", 26, "London", 80000, 803000, 1400, "./images/avatars/image-victor.jpg"),
        new User("jrandall", "Jessica Randall", 29, "London", 500, 999, 57, "./images/avatars/avatar-jessica.jpeg"),
        new User("bfranklin", "Benjamin Franklin", 319, "Philadelphia", 1234, 1234, 1234, "./images/avatars/avatar-benjamin.jpg")
    ]
    const [selectedUser, setSelectedUser] = useState(users[0]);

    const handleUserChange = (selectedUser: string) => {
        const myUser = users.find((user) => user.userName == selectedUser)
        if (myUser != undefined) {
            setSelectedUser(myUser);
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <UserSelector users={users} onUserChange={handleUserChange} />
            </header>
            <main className="app-main">
                <ProfileCard user={selectedUser} />
            </main>
            <footer className="app-footer">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.frontendmentor.io/profile/lenny131">Leonard Cohen</a>.
            </footer>
        </div>
    )
}

export default App
