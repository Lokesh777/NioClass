export default function Card({icons,heading,text}){

    return (
        <div style={{borderRadius:"1rem" , textAlign:"center",
        width:"12rem",backgroundColor:"#fff",height:"16rem",padding:"1rem",
        boxShadow:"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" }}>
             <div style={{color:"#4c51ed"}}>{icons}</div>
             <h4 style={{color:"#4c51ed",fontSize:"20px"}}>{heading}</h4>
             <p style={{color:"gray"}}>{text}</p>
        </div>
    )
}