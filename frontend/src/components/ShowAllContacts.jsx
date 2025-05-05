import React, { useEffect, useState } from 'react'
import ViewCard from './Viewcard'

const ShowAllContacts = () => {
  const [allContacts, SetAllContacts] = useState([])

  useEffect(() => {

    const dataReq = new Request('http://localhost:13590/list',
      {
        // method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })


    fetch(dataReq)

      .then(resp => resp.json())

      .then(data => {
        SetAllContacts(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
    {!allContacts[0] ?
                <p className='text-9xl'>Loading...</p>
                :
      <div className='py-12'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='grid grid-cols-3 gap-8'>
            {
              allContacts.map(elem => {
                return (
                  <ViewCard  key={elem._id} firstName={elem.firstName} primaryPhoto={elem.primaryPhoto} age={elem.age} sex={elem.sex} id={elem._id} likes={elem.likes ? elem.likes : 0} />
                )
              })
            }
          </div>
        </div>
      </div>
}
    </>

  )
}

export default ShowAllContacts