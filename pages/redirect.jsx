import { useRouter } from 'next/router'
import React from 'react'

export default function Redirect() {
    const router = useRouter()
    const { l } = router.query
    window.location = l
    return (
        <div>
            Please wait while redirecting...
        </div>
    )
}
