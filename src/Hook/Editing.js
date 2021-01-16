import React, { useEffect, useState } from 'react'

const Editing = () => {
    let [text, setText] = useState("");

    let [seconds, setSeconds] = useState(0);

    // EFFECT 1 : dipanggil hanya jika nilai text berubah
    useEffect(function () {
        if (text.length) localStorage.setItem("edit-text", text);
    });

    // EFFECT 2 : dipanggil hanya sekali sesaat setelah render pertama
    useEffect(function () {
        setText(localStorage.getItem("edit-text"));
        // kita tangkap id interval ke dalam variabel `intervalId`
        let intervalId = setInterval(() => {
            setSeconds(second => second + 1); // increment seconds
        }, 1000); // jalankan setiap 1000 milidetik (1 detik)

        // CLEAN UP FUNCTION
        return function () {
            clearInterval(intervalId) // call intervalId
        }

    }, []);


    return (
        <>
            Waktu: {Math.floor(seconds / 60)} menit {seconds % 60} detik
            <br />
            <textarea
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </>
    );
};

export default Editing
