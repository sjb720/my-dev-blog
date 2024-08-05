
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type CodeBlockProps = {
    language: string;
    code: string;
}

export default function CodeBlock(props: CodeBlockProps) {
    return <SyntaxHighlighter
        language={props.language} style={a11yDark} showLineNumbers wrapLines lineNumberStyle={{ opacity: .2 }}>
        {props.code}
    </SyntaxHighlighter>
}