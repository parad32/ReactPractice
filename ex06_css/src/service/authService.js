// -- service --
//service -> authService.js
let data_set = [
    {username:"aaa",password :"111", role : "USER"},
    {username:"bbb",password :"111", role : "USER"},
    {username:"ccc",password :"111", role : "USER"},
]
const login = (username, password) => {
    const result = data_set.filter( data => data.username === username );
    if( result.length !== 0 ){
        if(result[0].password === password){
            return {status : 200, data : result[0]};
        }
        return {status : 401, data : null};
    }
    return {status : 404, data : null};
}
export {login};