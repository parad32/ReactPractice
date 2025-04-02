let data_set =[
    {id:"aaa" , pwd :"aaa" , name :"홍길동" , addr :"산골짜기"},
    {id:"bbb" , pwd :"bbb" , name :"이순신" , addr :"바다"},
    {id:"ccc" , pwd :"ccc" , name :"고길동" , addr :"마포구"},
    {id:"ddd" , pwd :"ddd" , name :"김건우" , addr :"의정부"},
]

export const getMemberList = () => {
    return data_set;
}

export const getMemberOne = (id) => {
    return data_set.find(item => item.id === id);
}

export const deleteMember = (id) => {
    data_set = data_set.filter(item => item.id !== id);
}

