import React, { useState, useEffect } from 'react'

const Second = () => {
    let [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setSeconds((detik) => detik + 1);  // menggunakan fungsi updater untuk melakukan increment
        }, 1000);
        return () => clearInterval(intervalId);
    }, []) // daftarkan state seconds sebagai _dependency_
    // Dengan demikian effect kita akan berjalan sekali, dan selanjutnya state seconds akan diupdate oleh interval setiap detik, tanpa menyebabkan pemanggilan setInterval setiap detiknya. Dan yang jelas effect kita tidak menyalahi prinsip react-hooks/exhaustive-deps. Yay!

    return <div>
        {seconds} detik.
        </div>
}

export default Second
