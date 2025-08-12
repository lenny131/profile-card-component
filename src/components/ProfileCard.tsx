import type User from "../models/User";
import StatElement from "./StatElement";
import './ProfileCard.scss'

interface MyProps {
    user: User;
}

function ProfileCard(props: MyProps) {
    return (
        <article className="profile-card">
            <div className="profile-card-top"></div>
            <img className="avatar" src={props.user.avatarUrl} alt={props.user.displayName} />
            <div className="user-info">
                <div className="user-detail">
                    <div className="user-heading">
                        <h1 className="user-name">{props.user.displayName}</h1>
                        <p className="user-age">{props.user.age}</p>
                    </div>
                    <p className="user-location">{props.user.location}</p>
                </div>
                <div className="stats-group">
                    <StatElement description="Followers" value={props.user.followers} precision={0} />
                    <StatElement description="Likes" value={props.user.likes} precision={0} />
                    <StatElement description="Photos" value={props.user.photos} precision={1} />
                </div>
            </div>
        </article>
    );
}

export default ProfileCard;