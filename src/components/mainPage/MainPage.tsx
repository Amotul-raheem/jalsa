import React from "react";
import { Container } from "@mui/material";
import {NavBar} from "../NavBar";
import {Hero} from "./Hero";
import {About} from "./About";
import {Features} from "./Features";
import {Schedule} from "./Schedule";
import {SpeakersSummary} from "./SpeakersSummary";
import {Newsletter} from "./Newsletter";
import {Footer} from "../commons/Footer";

export const MainPage = () => {
    return(
        <div>
            <NavBar/>
            <Container disableGutters sx={{ maxWidth:'2200px', padding: 0 }} maxWidth={false}>
                <Hero/>
                <About/>
                <Features/>
                <Schedule/>
                <SpeakersSummary/>
                <Newsletter/>
                <Footer/>
            </Container>
        </div>


    )
}