import React, { useCallback, useEffect, useState } from 'react'

const Identity = props => {

    let [menu, setMenu] = useState([]);

    const fetchMenu = useCallback(() => {
        return ['nasi goreng', 'nasi padang', 'nasi uduk', 'nasi kuning'];
    }, [])

    useEffect(() => {
        let data = fetchMenu();
        setMenu(data);
    }, [fetchMenu]); //  fetchMenu sbg dependency effect

    return <div>
        {menu.map(makanan => <div>{makanan}</div>)}
    </div>

}

export default Identity
