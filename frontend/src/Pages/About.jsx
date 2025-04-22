import Navigation from "../Components/Navigation.jsx";
import {SocialIcon} from "react-social-icons";

export function About() {
    return (
        <><Navigation/>
        <div className="flex flex-column justify-content-around align-items-center py-4" style={{width:"100",height:"16rem",display:"flex",background:"linear-gradient(180deg, var(--primary) 0%, var(--cta) 100%)"}}>
            <h1 className="display-2 fw-bold" style={{color:"var(--highlight)"}}>Our Socials</h1>
            <div className="flex flex-row justify-content-around w-75 " style={{display:"flex"}}>
                <SocialIcon
                    url="https://www.instagram.com/akumakon/"
                    bgColor="var(--cta)"
                    fgColor="var(--highlight)"
                    style={{ height: "6rem", width: "6rem"}}
                />
                <SocialIcon
                    url="https://https://x.com/Akumakon"
                    bgColor="var(--primary)"
                    fgColor="var(--highlight)"
                    style={{ height: "6rem", width: "6rem" }}
                />
                <SocialIcon
                    url="https://www.tiktok.com/@akumakon"
                    bgColor="var(--dark)"
                    fgColor="var(--highlight)"
                    style={{ height: "6rem", width: "6rem" }}
                />
                <SocialIcon
                    url="https://www.facebook.com/Akumakon"
                    bgColor="var(--highlight)"
                    fgColor="var(--secondary)"
                    style={{ height: "6rem", width: "6rem" }}
                />
            </div>
        </div>
        <div className="flex flex-column justify-content-around align-items-center " style={{width:"100",display:"flex",background:"var(--cta)"}}>
            <h1 className="display-2 fw-bold" style={{color:"var(--highlight)"}}>About Us</h1>
            <div className="mx-5">
                <p className="text-center fs-3" style={{color:"var(--highlight)"}}>Akumakon is one of the longest running Anime and Manga conventions in Ireland. Held over a weekend each year, and run by the University of Galway Anime and Manga Society, it is a student-led non-profit convention with all profits going to charity. Over two thousand people attended Akumakon 2024, making the convention one of the largest of its kind in Ireland.</p>
                <p className="text-center fs-3" style={{color:"var(--highlight)"}}>Ran every year (except 2021 and 2022, those don't count!) since 2010, Akumakon 2026 will be our thirteenth event, and we're hoping to make it bigger and better than ever.</p>
            </div>
        </div>
        </>
    )
}