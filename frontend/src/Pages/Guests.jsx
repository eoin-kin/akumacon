import Navigation from "../Components/Navigation.jsx";
import { Container } from "react-bootstrap";
import {
  GuestProfile,
  GuestsProfileReversed,
} from "../Components/GuestProfile.jsx";
import Bottom from "../Components/Bottom.jsx";

export function Guests() {
  const supereyepatchwolf = {
    image: "/guest-images/supereyepatchwolf.jpeg",
    name: "Super Eyepatch Wolf",
    pronouns: "he/him",
    title: "YouTuber",
    social: "https://youtube.com",
    url: "https://www.youtube.com/channel/UCtGoikgbxP4F3rgI9PldI9g",
    bio: "Super Eyepatch Wolf is an Irish YouTuber who does analytical-style videos on primarily anime,but occasionally manga and video games as well! You can find them on Twitch as supereyepatchwolf and YouTube as Super Eyepatch Wolf, and on Instagram as @super_eyepatch_wolf",
  };
  return (
    <>
      <Navigation />
      <Container>
        <br />
        <GuestProfile
          image={supereyepatchwolf.image}
          name={supereyepatchwolf.name}
          pronouns={supereyepatchwolf.pronouns}
          title={supereyepatchwolf.title}
          bio={supereyepatchwolf.bio}
          social={supereyepatchwolf.social}
          url={supereyepatchwolf.url}
        />
        <br />
        <GuestsProfileReversed
          image={supereyepatchwolf.image}
          name={supereyepatchwolf.name}
          pronouns={supereyepatchwolf.pronouns}
          title={supereyepatchwolf.title}
          bio={supereyepatchwolf.bio}
          social={supereyepatchwolf.social}
          url={supereyepatchwolf.url}
        />
      </Container>
      <Bottom />
    </>
  );
}
