export const Login = (username, password) => {
    let token = null
    if(username == 'huuhung' && password == '123'){
        token = username + password;
    }
    return({
        type: 'LOGIN',
        payload: token,
    })
}
export const Logout = () => {
    const token = null
    return({
        type: 'LOGOUT',
        payload: null,
    })
}