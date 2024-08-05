import { PropsWithChildren } from "react";
import { Instrument_Sans } from "next/font/google";
import Header from "./Header";

const instrumentSans = Instrument_Sans({subsets:['latin', 'latin-ext']});

export default function PageLayout (props: PropsWithChildren) {

    return <div className={instrumentSans.className}>
        <Header/>
        <div style={{padding:24}}>
            {props.children}
        </div>
    </div>
}