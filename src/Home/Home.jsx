import { Button, Container, Typography } from "@mui/material";
import   "./Home.css";
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import Card from "./card";


export default function Home (){

    return (
        <Container  className="container" >
            <div className={"secondDiv"}>
                <Typography sx={{fontSize:"2.5rem",color:"#4c51ed",marginRight:"auto"}}>
                    JEE Maths
                </Typography>
                <Typography sx={{fontSize:"2.5rem",color:"#4c51ed",marginRight:"auto"}}>
                    Problems,
                </Typography>
                <Typography sx={{fontSize:"2.5rem",color:"#4c51ed",marginRight:"auto"}}>
                Simplified
                </Typography>
                <Typography sx={{color:"#4c51ed",fontSize:"1.2rem",marginRight:"auto"}}>
                Crack JEE Maths questions <br /> using revolutionary learning <br /> 
                techniques and <br /> technologies.
                </Typography>
                <Button fullWidth={true} sx={{backgroundColor:"#d6f30a",width:"15rem",height:"3rem",marginRight:"auto"}} >Sign-up</Button>

            </div>
            <div className="card">
                       
                    <Card
                      icons={<AccountTreeOutlinedIcon sx={{fontSize:"5rem"}} />}
                      heading={"Crack hard problems"}
                      text={"`I can now crack Olympiad level problems!`"}
                    />
                    <Card
                      icons={<ElectricBoltOutlinedIcon sx={{fontSize:"5rem"}} />}
                      heading={"Improve your speed"}
                      text={"`It's amazing to attempt all 18 questions within 60 minutes.`"}
                    />
                    <Card
                      icons={<CalendarMonthOutlinedIcon sx={{fontSize:"5rem"}} />}
                      heading={"Learn chapters quickly"}
                      text={"`I covered all chapter problems in 2 days. Saved a lot of time!`"}
                    />
                    <Card
                      icons={<PsychologyAltOutlinedIcon sx={{fontSize:"5rem"}} />}
                      heading={"Remember all details"}
                      text={"`Every problem is fresh in my mind, even from months ago`"}
                    />

            </div>

            <div>
                
            </div>
        </Container>

    )
}