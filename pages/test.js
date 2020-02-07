import { useEffect, useState } from 'react'
import Head from 'next/head'
import FaunaConnection from './api/FaunaConnection'
import SimpleTableRow from '../components/SimpleTableRow'

const secret = process.env.FAUNADB_SECRET_KEY
const fauna = new FaunaConnection({secret: secret})


export default () => {
  const [ data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const { data } = await fauna.getAllDocsByIndex('all_People')
      console.log('newData: ', data);
      console.log('newData[0]: ', data[0]);
      setData(data)
    }
    getData()
  }, [])

  return(
    <React.Fragment>
      <h2>This is a test </h2>
      <p>Some test content goes here</p>
      <div className={'name_table'}>
        {data.length > 0 ? (
          data.map((row, index) => (
            <SimpleTableRow
              key={index}
              firstName={row.data.first}
              lastName={row.data.last}
            />
          ))
        ) : (
          <React.Fragment>
            <SimpleTableRow loading />
            <SimpleTableRow loading />
            <SimpleTableRow loading />
          </React.Fragment>
        )}
      </div>
    <style jsx>{`
      .name_table {
        border: 1px solid #eaeaea;
        border-radius: 4px;
        min-width: 512px;
        overflow: scroll;
        padding-top: 24px;
      }
    `}
    </style>
    </React.Fragment>
  )
}