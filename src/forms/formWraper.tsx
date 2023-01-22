import { ReactNode } from "react";
import './formWraper.css'

type FormWraper = {
    title: String,
    children: ReactNode
}

export default function FormWraper({ title, children }: FormWraper) {
    return <>
        <h2 className={'titleStyle'}>{title}</h2>
        <div className="inputField">
            {children}
        </div>
    </>
}