import React from "react";
import { Container } from "@mui/material";
import {NavBar} from "../commons/NavBar";
import {CommonHero} from "../commons/CommonHero";
import {SpeakersPageBody} from "./SpeakersPageBody";
import {Footer} from "../commons/Footer";

export const SpeakersPage = () => {
    return (
        <div>
            <NavBar/>
            <Container disableGutters sx={{ maxWidth:'2200px', padding: 0 }} maxWidth={false}>
                <CommonHero
                    Heading="Meet the Renowned Speakers"
                    BodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i"
                />
                <SpeakersPageBody/>
            </Container>
            <Footer/>

        </div>
    )
}