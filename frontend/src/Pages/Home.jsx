import React from "react";
import Navigation from "../Components/Navigation.jsx";
import LinkImages from "../Components/LinkImages.jsx";
import {Countdown} from "../Components/Countdown.jsx";
import {Button} from "react-bootstrap";

export function Home() {
    //Fill with files once assets come through
    const carouselItems = [
        {
            title: "Product 1",
            description: "Check out our amazing product 1!",
            image: "/images/product1.jpg",
            link: "/products/1"
        },
        {
            title: "Product 2",
            description: "Explore our fantastic product 2!",
            image: "/images/product2.jpg",
            link: "/products/2"
        },
        {
            title: "Service 1",
            description: "Learn about our professional services",
            image: "/images/service1.jpg",
            link: "/services"
        }];
    return (
        <>
            <Navigation/>
            <div
                className="d-flex align-items-center justify-content-center text-center"
                style={{
                    background:
                        "linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%), url('/api/placeholder/1600/900') center/cover no-repeat",
                    height: "24rem",
                    paddingTop: "1rem",
                }}
            >
                <div>
                    <h1 className="display-3 fw-bold mb-4" style={{ color: 'var(--highlight)' }}>
                        AKUMAKON 2026
                    </h1>
                    <h2 className="fs-2 mb-4" style={{ color: 'var(--highlight)' }}>
                        March 20–22, 2026 • Galway, Ireland
                    </h2>
                    <Button
                        size="lg"
                        className="fw-bold border-0 px-5 py-3"
                        style={{
                            color: 'var(--primary)',
                            backgroundColor: 'var(--highlight)',
                            borderRadius: '1rem',
                            fontSize: '1.5rem',
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