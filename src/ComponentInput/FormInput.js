import React from 'react'
import InputText from './InputText'
import TextArea from './TextArea'
import Select from './Select'
import EmailInput from './EmailInput'

const FormInput = () => {
    // const [name, setName] = React.useState('')
    // const [alamat, setAlamat] = React.useState('')
    // const [jurusan, setJurusan] = React.useState('')
    // teknik cepat
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        alamat: '',
        jurusan: ''
    })

    const handleSubmit = event => {
        event.preventDefault()
        // sent to server
        alert(
            JSON.stringify((form))
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputText label='name' value={form.name} onChange={(e) =>
                    setForm({ ...form, name: e.target.value })} />
                <EmailInput label='email' value={form.email} onChange={(e) =>
                    setForm({ ...form, email: e.target.value })} />
                <TextArea label="alamat" value={form.alamat} onChange={(e) =>
                    setForm({ ...form, alamat: e.target.value })} />
                <Select label="jurusan" value={form.jurusan} onChange={(e) =>
                    setForm({ ...form, jurusan: e.target.value })} />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default FormInput
