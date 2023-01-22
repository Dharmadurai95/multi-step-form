import FormWraper from "./formWraper";
type formData = {
    street: string,
    city: string,
    state: string,
    pincode: string,
}
type AddressFormProp = formData & {
    updateFields: (field: Partial<formData>) => void;
}

function AddressDetails({ street, city, state, pincode, updateFields }: AddressFormProp) {
    function onChangeHandler(e: any) {
        updateFields({ [e.target.name]: e.target.value })
    }

    return (<FormWraper title="Address Details">
        <label htmlFor="street">Street</label>
        <input onChange={(e) => onChangeHandler(e)} value={street} autoFocus required type="text" name="street" id="street" />
        <label htmlFor="city">City</label>
        <input onChange={(e) => onChangeHandler(e)} value={city} required type="text" name="city" id="city" />
        <label htmlFor="state">State</label>
        <input onChange={(e) => onChangeHandler(e)} value={state} required type="text" name="state" id="state" />
        <label htmlFor="pincode">Pin Code</label>
        <input onChange={(e) => onChangeHandler(e)} value={pincode} required type="text" name="pincode" id="pincode" />
    </FormWraper>)
}
export default AddressDetails;