import { useState } from "react"
import CheckBox02Com, { CheckBoxComponent } from "../../components/form/CheckBox02Com";

 
const init = [
    {key:1, value:"10대",name:"age", isChecked:false},
    {key:2, value:"20대",name:"age", isChecked:false},
    {key:3, value:"30대",name:"age", isChecked:false},
]

const CheckBox02Con = () => {
    const [hobby, setHobby] = useState(init);
    const [isChecked, setIsChecked] = useState(false);
        const onChecked = () => {
            setIsChecked(!isChecked);
        }
    const onChangeHobby = (key) => {
        // const updateHobby = hobby.map (check =>
        //     check.key === key ? {...check, isChecked : !check.isChecked } : check
        const updateHobby = hobby.map(check =>
            check.key === key ? {...check, isChecked: true} : {...check, isChecked: false}
        )
        setHobby(updateHobby)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log("submit :" , hobby)
    }
    return (
        
        <>
        <CheckBoxComponent submit={submit} onChangeHobby={onChangeHobby} hobby={hobby} /><hr />
        <CheckBox02Com isChecked={isChecked} onChecked={onChecked} />
        </>
    )
}
export default CheckBox02Con