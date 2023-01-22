import FormWraper from "./formWraper"
type UserData = {
    fName: string,
    lName: string,
    age: string
}
type UserFormProp = UserData & {
    updateFields: (fields: Partial<UserData>) => void,
}



const UserForm = ({ fName, lName, age, updateFields }: UserFormProp) => {
    function onChangeHandler(e: any) {
        updateFields({ [e.target.name]: e.target.value })
    }
    return (<FormWraper title="User Details" >
        <label htmlFor="fname">First Name</label>
        <input value={fName} autoFocus required type="text" name="fName" id="fName" onChange={(e) => onChangeHandler(e)} />
        <label htmlFor="lname">Last Name</label>
        <input value={lName} required type="text" name="lName" id="lName" onChange={(e) => onChangeHandler(e)} />
        <label htmlFor="age">Age</label>
        <input value={age} required type="number" min={1} name="age" id="age" onChange={(e) => onChangeHandler(e)} />
    </FormWraper>)
}

export default UserForm