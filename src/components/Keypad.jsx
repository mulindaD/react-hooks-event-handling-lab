// Code Keypad Component Here

function Keypad (){
    function handleOnChange(e){
        console.log('Entering password...')
    }

    return (
        <>
            <input type="password" name="password" onChange={handleOnChange}/>
        </>
    )
}

export default Keypad;