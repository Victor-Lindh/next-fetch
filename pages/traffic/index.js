import React, { useState } from 'react'
import axios from 'axios'

const Traffic = (props) => {
  const { name, myEnv } = props
  console.log('PROPS', props)
  console.log(myEnv)
  // const myEnv = process.env.MY_ENV
  const key = process.env.NEXT_PUBLIC_AUTH_KEY
  console.log(key)
  return (
    <div>Hello, {name}, env key is {myEnv}</div>
  )
}

export async function getServerSideProps(context) {
    let trafficQuery = `
      <REQUEST>
      <LOGIN authenticationkey="4379ec3a38d9491b9509ea3f7c6aa24e" />
      <QUERY objecttype="Situation" schemaversion="1.2" limit="25" includedeletedobjects="false" orderby="Deviation.CreationTime desc">
      <FILTER>
        <WITHIN name="Deviation.Geometry.WGS84" shape="center" value="17.91 59.51" radius="10000m" />
          <AND>
            <WITHIN name="Deviation.Geometry.WGS84" shape="center" value="17.91 59.51" radius="25000m" />
          </AND>
          <NOT>
            <EQ name="Deviation.MessageCodeValue" value="ferry" />
          </NOT>
      </FILTER>
      </QUERY>
      </REQUEST>`;

    // const data = await axios({
    //   method: 'POST',
    //   url: 'https://api.trafikinfo.trafikverket.se/v2/data.json',
    //   data: trafficQuery
    // }).then(response => response.json()).then(data => console.log(data))
    // .catch(err => console.log(err))
    console.log(process.env_NEXT_PUBLIC_AUTH_KEY)
    const myEnv = process.env.MY_ENV
  return {
    props: {name: 'Victor', myEnv}, // will be passed to the page component as props
  }
}

export default Traffic