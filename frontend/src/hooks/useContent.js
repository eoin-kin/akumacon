import { useState, useEffect } from "react";

const useContent = (contentType) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Try the current path first, then fallback to CMS path
        let response;
        try {
          response = await fetch(`/src/content/${contentType}.json`);
        } catch (err) {
          // Fallback to the path where CMS saves files
          response = await fetch(`/content/${contentType}.json`);
        }

        if (!response.ok) {
          throw new Error(`Failed to load ${contentType} content`);
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message);
        setContent(null);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentType]);

  return { content, loading, error };
};

export const useHomeContent = () => useContent("home");
export const useGuestsContent = () => useContent("guests");
export const useGalleryContent = () => useContent("gallery");
export const useApplicationsContent = () => useContent("applications");
export const useMoreContent = () => useContent("more");
export const useInfoContent = () => useContent("info");
export { useContent as default };
