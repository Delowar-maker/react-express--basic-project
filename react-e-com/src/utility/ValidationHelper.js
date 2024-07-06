// class ValidationHelper {
//     static isLogin() {
//         return true;
//     }
// }
// export default ValidationHelper;

const ValidationHelper = {
    isLogin: () => {
        let token = sessionStorage.getItem("token");
        // lage code 
        // if (token === null) {
        //     return false;
        // }
        // else {
        //     return true;
        // }

        //simplefy code
        return token !== null

    },

    isEntry: (value) => {
        return value.length === 0
    },
    tokenHeader: () => {
        return {
            "token": sessionStorage.getItem("token")
        }
    },

    Unauthorized: (code) => {
        if (code === 401) {
            sessionStorage.clear();
            window.location.href = "/";
        }
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