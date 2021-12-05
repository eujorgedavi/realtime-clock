import axios from "axios";
import { useEffect, useState } from "react";
import Informations from "../components/Informations";
import Clock from "../components/Clock";
import Layout from "../components/Layout";
import {WorldClock} from "../utils/Interfaces";
export default function() {

    const [date, setDate] = useState<Date>()
    const [ infoDate, setInfoDate ] = useState("Loading...");
    const [ worldClock, setWorldClock ] = useState<WorldClock>(
        {
            $id: "Loading...",
            currentFileTime: 0,
            currentDateTime: "Loading...",
            ordinalDate: "Loading...",
            isDayLightSavingsTime: false,
            timeZoneName: "Loading...",
            dayOfTheWeek: "Loading...",
            serviceResponse: "Loading...",
            utcOffset: "Loading..."
        });

    useEffect(() => {
        setInterval(() => {
            axios.get(`https://clock.sagacious.club/api/clock`).then((response) => {
                const dateResponse = new Date(Date.parse(response.data.currentDateTime))
                setDate(dateResponse);
                setWorldClock(response.data);
                let dayFormated = dateResponse.getUTCDate() < 10 ? "0" + dateResponse.getUTCDate().toString() : dateResponse.getUTCDate();
                let montlyFormated = dateResponse.getUTCMonth() < 10 ? "0" + (dateResponse.getUTCMonth() + 1).toString() : dateResponse.getUTCMonth() + 1;
                setInfoDate(`${response.data.dayOfTheWeek}, ${dayFormated}/${montlyFormated}/${dateResponse.getFullYear()}`)
            })
        }, 1000)
    }, []);

    return (
        <Layout infoDate={infoDate}>
            <Clock date={date}/>
            <Informations worldClock={worldClock}/>
        </Layout>
    )
}