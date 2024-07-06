// class ValidationHelper {
//     static isLogin() {
//         return true;
//     }
// }
// export default ValidationHelper;

const ValidationHelper = {
    isLogin: () => {
        return false;
    },

    isEntry:(value) => {
        return value.length === 0
    },

    API_BASE: () => {
        return "https://cart-api.teamrabbil.com/api"
        // return "https://jsonplaceholder.typicode.com/posts"
    }
    // // Other validation functions can be added here
    // isEmailValid: (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }
};


export default ValidationHelper;
//
//
//
// static API_BASE = 'https://cart-api.teamrabbil.com/api';
// // static API_BASE() {
// // 	return "https://cart-api.teamrabbil.com/api";
// // }
// static API_BASE = 'https://cart-api.teamrabbil.com/api';




// static API_BASE() {
//     return "https://cart-api.teamrabbil.com/api";
// }