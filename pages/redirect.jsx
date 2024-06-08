import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Redirect() {
    const params = useSearchParams()
    const url = params.get("url")
    return (
        <>
            <Head>
                <meta http-equiv="refresh" content={`0;URL=${url}`} />
            </Head>
            <div>
                <a href={url}>Click here</a> if it does not redirect automatically...
            </div>
        </>
    )
}
