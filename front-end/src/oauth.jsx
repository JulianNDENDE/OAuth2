import React from "react";
import { useEffect, useState } from "react";


export default function SpotifyLogin() {
    const CLIENT_ID = '' // Client ID trouvable sur le dashboard spotify
    const REDIRECT_URI = "http://localhost:5173"

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')

        if (code) {
            window.location.search = ''
            const url = `http://localhost:3001/spotify/login?code=${code}`
            const req = {
                method: 'GET',
                redirect: 'follow',
            }
            const response = window.fetch(url, req)
                .then(res => {
                    return (res)
                })
                .then(res => {
                    return res
                })
            console.log(response)
        }
    }, [])

    return (
        <div>
            <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`}>Login with spotify</a>
        </div>
    );
}
