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