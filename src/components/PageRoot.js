import * as React from 'react'

const PageRoot = ({ title, children }) => (
    <main>
        <head>
            <title>{title}</title>
        </head>
        { children }
    </main>
)

export default PageRoot