export default class helper {

    static userName = 'John Smith 123'
    static existingEmail = 'nastya.zkhrvvvv@gmail.com'
    static existingPassword = 'john12345!'

    static createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }


}
