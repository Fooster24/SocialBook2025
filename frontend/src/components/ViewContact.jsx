import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import ViewCard from './Viewcard'

const ViewContact = () => {
  let myID = useParams();
  const newPath = "/view/" + myID.id
  const editPath = "/update/" + myID.id
  const delPath = "/remove/" + myID.id
  
  const [allcards, setCard] = useState([])
  useEffect(() => {

    const dataReq = new Request('http://localhost:13590/contact/' + myID.id,
      {
        // method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })

    fetch(dataReq)

      .then(resp => resp.json())

      .then(data => {
        setCard(data)
        console.warn(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>

      <div>
        <div className='py-24'>
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-6xl hover:bg-gray-100">
            <div className="flex flex-col items-center py-10 px-5 bg-gray-200 w-min-xl">
              <div className='relative items-start -start-1/3'>
                <a href="/list">
                  <p className='pb-6'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                  </svg>
                  </p>
                </a>
              </div>
              {/* <img className="w-96 h-auto mb-3 rounded-full shadow-lg" src={allcards.primaryPhoto} alt="" /> */}
              <img className="w-96 h-auto mb-3 rounded-full shadow-lg" src={allcards.secondaryPhoto} alt="" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">{allcards.firstName}{allcards.lastName}</h5>
              <h5 className="mb-1 text-xl font-medium text-gray-900">{allcards.email}</h5>
              <span className="text-sm text-gray-500">{allcards.job}</span>


              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
              </div>

              <div className="flex mt-4 md:mt-6">
                <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Rating 4</a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="flex-row">
                <div className="grid grid-cols-4">
                  <h5 className="col-span-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Contact Card</h5>
                  <div>
                    <p className="mb-3 font-normal text-gray-700">
                      <Link to ={editPath}>
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg> 
                      </Link>
                      <Link to ={delPath}>
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                      </svg>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-row">
                <div className='grid grid-cols-3'>
                  <p className="col-span-2 mb-3 font-normal text-gray-700">Description:</p>
                  <p className="mb-3 font-normal text-gray-700">{allcards.description}</p>
                </div>
              </div>
              <div className="flex-row">
                <div className='grid grid-cols-3'>
                  <p className="col-span-2 mb-3 font-normal text-gray-700">Age:</p>
                  <p className="mb-3 font-normal text-gray-700">{allcards.age}</p>
                </div>
              </div>
              <div className="flex-row">
                <div className='grid grid-cols-3'>
                  <p className="col-span-2 mb-3 font-normal text-gray-700">Gender:</p>
                  <p className="mb-3 font-normal text-gray-700">{allcards.sex}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ViewContact