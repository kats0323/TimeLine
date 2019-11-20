const users = [];
const addUser = ({ id, name, room }) => {
    // if user enters a room such as HELLOWORLD we need to lowercase and make it an individual word
    console.log(name.trim().toLowerCase());
    const existingUser = users.find((user) => user.room === room && user.name === name);
    if (existingUser) {
        return { error: "username is taken" }
    }
    const user = { user: { id, name, room } };
    users.push(user);
    console.log("USER", user)
    return user
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}
const getUser = (id) => users.find((user) => user.id === id);
const getUserInRoom = (room) => users.filter((user) => user.room === room);
module.exports = { addUser, removeUser, getUser, getUserInRoom }