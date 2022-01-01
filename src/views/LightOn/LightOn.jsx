import React from 'react'

export default function LightOn({setLightSwitch}) {
    return (
        <div>
            <input type="button" value="Click me" onClick={() => setLightSwitch(true)} />
        </div>
    )
}
