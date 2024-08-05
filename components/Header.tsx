import { Home } from "lucide-react";
import Link from "next/link";

export default function Header() {

    return <div style={{ display:'flex', alignItems:'center', padding:24, background:'#00000055'}}>
        <Link href={'/'}><Home/></Link>
    </div>
}