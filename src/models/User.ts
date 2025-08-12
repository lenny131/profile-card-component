class User {
    userName: string;
    displayName: string;
    age: number;
    location: string;
    followers: number;
    likes: number;
    photos: number;
    avatarUrl: string;

    constructor(userName: string, displayName: string, age: number, location: string, followers: number, likes: number, photos: number, avatarUrl: string) {
        this.userName = userName;
        this.displayName = displayName;
        this.age = age;
        this.location = location;
        this.followers = followers;
        this.likes = likes;
        this.photos = photos;
        this.avatarUrl = avatarUrl;
    }
}

export default User;