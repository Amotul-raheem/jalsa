import React from "react";
import { Container } from "@mui/material";
import {NavBar} from "../NavBar";
import {EventHero} from "./EventHero";
import {EventScheduleBody} from "./EventScheduleBody";
import {Footer} from "../commons/Footer";

export const EventSchedule = () => {
    return(
        <div>
            <NavBar/>
            <Container disableGutters sx={{ maxWidth:'2200px', padding: 0 }} maxWidth={false}>
            <EventHero/>
            <EventScheduleBody/>
                <Footer/>

            </Container>
        </div>
    )
}