import React, { useState, useEffect } from 'react'

const CleanupChat = () => {
    let [friend, setFriend] = useState(null);

    useEffect(() => {
        if (!friend) return;
        console.log(`EFFECT: subscribe chat message dari ${friend}`);
        return () => {
            console.log(`CLEANUP: unsubscribe chat message dari ${friend}`);
        };
    }, [friend])

    friend && console.log(`RENDER: friend ${friend}`);

    return (
        <div>
            <button onClick={e => setFriend("Azamuddin")}>Azamuddin</button>
            <button onClick={e => setFriend("Hafid")}>Hafid</button>
            <br /> <br />
            {friend ? `friend ${friend}` : "no opened friend"}
        </div>
    )
}

export default CleanupChat
