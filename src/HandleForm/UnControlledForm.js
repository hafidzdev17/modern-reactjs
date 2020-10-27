import React from 'react'

const UnControlledForm = () => {
    // mendefiniskan variabel input dengan useRef
    const inputName = React.useRef(null)
    const inputPhoto = React.useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        // kirim data form
        alert(inputName.current.value)
        // File API untuk dapat nama file
        alert(inputPhoto.current.files[0].name)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Name : <input type="text" ref={inputName} defaultValue='hafidz' />
                </label>
                <label>
                    Photo: <input type='file' ref={inputPhoto} />
                </label>

                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}

export default UnControlledForm
