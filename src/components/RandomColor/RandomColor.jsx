import React, { useState, useEffect } from 'react'

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');


    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = '#';

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor)
    }

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
    
        setColor(`rgb(${r},${g}, ${b})`);
        
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);


    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button
                onClick={
                typeOfColor === "hex"
                    ? handleCreateRandomHexColor
                    : handleCreateRandomRgbColor
                }
            >   Generate Random Color
            </button>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection  :'column',
                gap :'20px'
                }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor