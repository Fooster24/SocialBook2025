import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'

const AddContact = () => {
    const goBack = useNavigate()
    const [formData, setFormData] = useState({})
    const [formErrorData, setFormErrorData] = useState({})
    const ERRORSTYLE = "border-red-700 border-2 " 

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.firstName) {
            setFormErrorData({
                ...formErrorData,
                firstName: ERRORSTYLE
            })
            return
        }
        if (!formData.lastName) {
            setFormErrorData({
                ...formErrorData,
                lastName: ERRORSTYLE
            })
            return
        }
        if (!formData.primaryPhoto) {
            setFormErrorData({
                ...formErrorData,
                primaryPhoto: ERRORSTYLE
            })
            return
        }
        if (!formData.secondaryPhoto) {
          setFormErrorData({
              ...formErrorData,
              secondarPhoto: ERRORSTYLE
          })
          return
      }
      if (!formData.age) {
        setFormErrorData({
            ...formErrorData,
            age: ERRORSTYLE
        })
        return
    }
    if (!formData.sex) {
      setFormErrorData({
          ...formErrorData,
          sex: ERRORSTYLE
      })
      return
  }
  if (!formData.description) {
            setFormErrorData({
                ...formErrorData,
                description: ERRORSTYLE
            })
            return
        }
        if (!formData.email) {
          setFormErrorData({
              ...formErrorData,
              email: ERRORSTYLE
          })
          return
      }
      if (!formData.job) {
        setFormErrorData({
            ...formErrorData,
            job: ERRORSTYLE
        })
        return
    }
        const dataReq = new Request(
            'http://localhost:13590/new/contact/',
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formData)
            })
        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                data.error && alert(data.error)
                goBack("/list")
            })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        setFormErrorData({
            ...formErrorData,
            [e.target.id]: ""
        })
    }

    const handleGoBack = () => {
        goBack("/list")
        
    }


    return (
        <>
            <div className='w-md mt-5 p-8 border-2 border-indigo-600 rounded-lg'>
                <form method='POST'>
                    <div className='my-4'>
                        <label htmlFor="firstName" className="relative">
                            <input
                                type="text"
                                id="firstName"
                                placeholder=""
                                className={formErrorData.firstName ? formErrorData.firstName + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                First Name
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="lastName" className="relative">
                            <input
                                type="text"
                                id="lastName"
                                placeholder=""
                                className={formErrorData.lastName ? formErrorData.lastName + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Last Name
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="primaryPhoto" className="relative">
                            <input
                                type="text"
                                id="primaryPhoto"
                                placeholder=""
                                className={formErrorData.primaryPhoto ? formErrorData.primaryPhoto + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Primary Photo
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="secondaryPhoto" className="relative">
                            <input
                                type="text"
                                id="secondaryPhoto"
                                placeholder=""
                                className={formErrorData.secondaryPhoto ? formErrorData.secondaryPhoto + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Secondary Photo
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="age" className="relative">
                            <input
                                type="text"
                                id="age"
                                placeholder=""
                                className={formErrorData.age ? formErrorData.age + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Age
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="sex" className="relative">
                            <input
                                type="text"
                                id="sex"
                                placeholder=""
                                className={formErrorData.sex ? formErrorData.sex + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Sex
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="description" className="relative">
                            <input
                                type="text"
                                id="description"
                                placeholder=""
                                className={formErrorData.description ? formErrorData.description + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Description
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="email" className="relative">
                            <input
                                type="text"
                                id="email"
                                placeholder=""
                                className={formErrorData.email ? formErrorData.email + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Email
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="job" className="relative">
                            <input
                                type="text"
                                id="job"
                                placeholder=""
                                className={formErrorData.job ? formErrorData.job + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Job Title
                            </span>
                        </label>
                    </div>
                    <div className='grid grid-cols-2'>
                        <button className="group inline-block rounded-sm bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden" type='reset' onClick={handleGoBack}>
                            <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Cancel</span>
                        </button>
                        <button className="group inline-block rounded-sm bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden" type='submit' onClick={handleSubmit}>
                            <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Add a New Contact</span>
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default AddContact