//enter code here
// Avatar should accept caption and image Url as props
// do default export
function Avatar({caption,imageurl}){
    return(
        <div style={{borderRadious:50%}} >
        <h2>{caption}</h2>
        <>
        src={imageurl} alt=>{caption}
        </div >
    )
}
