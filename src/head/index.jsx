import React from 'react'
import { Helmet } from 'react-helmet'

export default function Head() {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                rel="stylesheet"
            />
            <title>TAPIN</title>
        </Helmet>
    )
}