import { useState, useEffect } from "react";

export const useHomeContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch("/src/content/home.json");
        if (!response.ok) {
          throw new Error("Failed to load content");
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message);
        // Fallback to default content if file doesn't exist
        setContent({
          hero: {
            banner_image: "/banner.jpg",
            ticket_text_desktop: "GET TICKETS",
            ticket_text_mobile: "Tickets",
            ticket_link: "/ticketselection",
          },
          about: {
            logo_image: "./Akumacon.png",
            logo_alt: "Akumakon Logo",
            description:
              "Akumakon is one of the longest running Anime and Manga conventions in Ireland...",
            info_button_text: "Info",
            info_button_link: "/info",
          },
        });
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
};
