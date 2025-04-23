import React from "react";
import Navigation from "../Components/Navigation.jsx";
import LinkImages from "../Components/LinkImages.jsx";
import {Countdown} from "../Components/Countdown.jsx";
import {Button, } from "react-bootstrap";

export function Home() {

    return (
        <>
            <Navigation/>
            <div
                className="d-flex align-items-center justify-content-center text-center"
                style={{
                    background:
                        "linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%)",
                    paddingTop: "1rem",
                }}
            >
                <div
                    style={{
                        backgroundImage: "url('/banner.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100vw",
                        height: "0",
                        paddingBottom: "33.33%", // This creates a 16:9 aspect ratio (adjust as needed)
                        position: "relative"
                    }}
                >
                    <Button
                        size="sm"
                        className="fw-bold border-0 px-5 py-1 gla"
                        style={{
                            color: 'var(--primary)',
                            backgroundColor: 'var(--highlight)',
                            borderRadius: 'calc(0.5rem + 0.3vw)',
                            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                            padding: 'clamp(0.5rem, 0.8vw, 1rem) clamp(1rem, 1vw, 2rem)',
                            position: 'absolute',
                            bottom: 'clamp(0.5rem, 2vw, 2rem)',
                            right: 'clamp(1rem, 2vw, 2rem)',
                            width: '30vw',
                            textAlign: 'center',
                            minWidth: '120px', // To prevent it from becoming too small on mobile
                            maxWidth: '300px'
                        }}
                        href={"/ticketselection"}
                    >
                        GET TICKETS
                    </Button>
                </div>
            </div>

            <Countdown/>
            {/*Create a suitable bottom bar component for rendering on every page*/}
        </>
    )

}

export default Home;