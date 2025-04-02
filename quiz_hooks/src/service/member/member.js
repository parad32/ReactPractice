let data_set = [
    {id:"aaa",pwd :"aaa", name : "홍길동", addr : '산골짜기'},
    {id:"bbb",pwd :"bbb", name:'김개똥', addr:'개똥별'},
    {id:"ccc",pwd :"ccc", name:'고길똥', addr:'마포구'},
]
export const getList = () => data_set;
export const getOne = ( id ) =>
    data_set.filter( (item) => item.id === id )[0];
export const deleteOne = ( id ) => {
    data_set = data_set.filter( (item) => item.id !== id );
    return 1;
}

export const addOne = (member) => {
    // ID 중복 체크
    if (data_set.some(item => item.id === member.id)) {
        return { success: false, message: "이미 존재하는 ID입니다." };
    }
    
    // pwd2는 제외하고 저장
    const { pwd2, ...memberData } = member;
    data_set.push(memberData);
    return { success: true, message: "회원가입이 완료되었습니다." };
}

export const updateOne = (data) => {
    const index = data_set.findIndex(item => item.id === data.id);
    if (index !== -1) {
        data_set[index] = data;
        return { success: true, message: "회원 정보가 수정되었습니다." };
    }
    return { success: false, message: "회원 정보를 찾을 수 없습니다." };
}
