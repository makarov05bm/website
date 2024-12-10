import React from 'react'
import Head from 'next/head'

const Meta = ({ title, description }) => {
  return (
    <Head>
        <meta name="viewport" content="height=device-height, width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" />
        <title>{title}</title>
        <meta name='description' content={description} />
    </Head>
  )
}

export default Meta