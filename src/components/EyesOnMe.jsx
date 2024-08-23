// Code EyesOnMe Component Here

function EyesOnMe(){
    function handleOnFocus(e){
        console.log('Good!')
    }

    function handleOnBlur(e){
        console.log('Hey! Eyes on me!')
    }
    return(
        <div>
            <button onFocus={handleOnFocus} onBlur={handleOnBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe
