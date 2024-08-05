import { Search } from "lucide-react";
import { PropsWithChildren } from "react";

export default function ArticleFeed(props: PropsWithChildren) {
    return <div>
        <div style={{ paddingTop: 24, paddingBottom: 24, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
                0 Coding Adventures
            </div>
            <div style={{ position: 'relative' }}>
                <Search size={20} style={{position:'absolute', left:6, top:6}} />
                <input style={{ background: 'center', border: '1px solid white', borderRadius: 8, padding: 8, color: 'var(--text)', width: 200, paddingLeft: 30 }} />
            </div>
        </div>
        <div className="article-grid">{props.children}</div>
    </div>
}