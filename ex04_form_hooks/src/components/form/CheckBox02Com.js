
export const CheckBoxComponent = ({hobby, onChangeHobby, submit}) => {
    return (
        <>
        <form onSubmit={submit}>
        {hobby && hobby.map((item) => 
            <span key={item.key}>
                <label htmlFor={item.key}>{item.value}</label>
                <input id={item.key} type="radio" checked={item.isChecked} name={item.name}
                onChange={() => onChangeHobby(item.key)}/>
            </span>)}
        <button>클릭</button>
        </form>
        </>
    )
}

const CheckBox02Com = ({isChecked, onChecked}) => {
    return (
        <>
        <form>
            <label>
                확인<input type="checkbox" checked={isChecked} onChange={onChecked}/>
            </label>
        </form>
        </>
    )
}
export default CheckBox02Com