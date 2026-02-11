const user1 = {
    profile: {
        name: "Nalan",
        address: {
            city: "Tirunelveli"
        }
    }
};

console.log(user1.profile?.name);
console.log(user1.profile?.address?.city);
console.log(user1.profile?.address?.pincode);

const user2 = {};

console.log(user2.profile?.name);
console.log(user2.profile?.address?.city);
console.log(user2.profile?.address.pincode);