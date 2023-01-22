import FormWraper from "./formWraper";

type AccountDetailsData = {
    email: string,
    password: string
}

type FormProps = AccountDetailsData & {
    updateFields: (field: Partial<AccountDetailsData>) => void;
}

function AccountDetails({ email, password, updateFields }: FormProps) {
    function onChangeHandler(e: any) {
        updateFields({ [e.target.name]: e.target.value })
    }
    return <FormWraper title='Account Details'>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => onChangeHandler(e)} value={email} autoFocus type="email" required name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => onChangeHandler(e)} value={password} type="password" required name="password" id="password" />
    </FormWraper>
}
export default AccountDetails