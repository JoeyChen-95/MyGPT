import { memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
import "../../styles/markdown.css"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"
// Import additional languages if needed

function Markdown({ children, className = "", ...props }: Options) {
    return (
        <ReactMarkdown
            components={{
                code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    //If it contains spaces, it might be code, should be highlight
                    const shouldHighlight = match || String(children).includes(" ");
                    return shouldHighlight ? (
                        <SyntaxHighlighter
                            style={a11yDark}
                            language={match?.[1] ?? ""}
                            PreTag='div'
                        >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code
                            {...props}
                            className={className}
                        >
                            {children}
                        </code>
                    );
                }
            }}
            remarkPlugins={[remarkGfm]}
            className={`markdown prose dark:prose-invert ${className}`}
            {...props}
        >
            {children}
        </ReactMarkdown>
    )
}

//prevent repeated render(parent component render=>child components render)
//using memo=>the child componment will render only when the inputs to component change 
export default memo(Markdown)