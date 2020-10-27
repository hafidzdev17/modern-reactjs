import React from 'react'

const ControlledForm = () => {
    const [name, setName] = React.useState('')
    const [isMember, setIsMember] = React.useState(false)
    const [gender, setGender] = React.useState(0)
    const [comment, setComment] = React.useState('')
    const [category, setCategory] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        // kirim ke server
        const formData = { name, isMember, gender, comment, category }
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Member: <input type='checkbox' checked={isMember} onChange=
                        {(e) => setIsMember(e.target.checked)} />
                </label>
                <label>
                    Gender:
                <input type='radio' name='gender' checked={gender === 1}
                        onChange={(e) => setGender(1)} /> Male
                <input type='radio' name='gender' checked={gender === 0}
                        onChange={(e) => setGender(0)} /> Female
                </label>

                <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="mangga">Mangga</option>
                    <option value="apel">Apel</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledForm
