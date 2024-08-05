import Link from "next/link";
import { useState } from "react";

type ArticleButtonProps = {
    img: string,
    name: string,
    href: string,
    date: string,
  }
  
 export default function ArticleButton(props: ArticleButtonProps) {
  
    const [isHovering, setIsHovering] = useState(false);
    const date = new Date(props.date)
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    }
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    }
  
    return <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={props.href} style={{ textDecorationLine: 'none' }}>
      <div style={{ background: "black", color: 'white', borderRadius: 8, overflow: 'hidden', position:'relative'}}>
        <div style={{ height: 300, background: `url("${props.img}")`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
          <div style={{ width: '80%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:32, transition: 'transform 0.5s', textShadow: "#000 1px 0 10px", textAlign:'center', background:'green', transform: isHovering ? "scale(1.1)" : "scale(1)" }}>
            {props.name}
          </div>
        </div>
        <div style={{position:'absolute', right:0, bottom:0, padding:24}}>{date.toLocaleDateString()}</div>
      </div>
    </Link>
  
  }