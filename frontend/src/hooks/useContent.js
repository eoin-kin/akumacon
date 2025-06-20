import { useState, useEffect } from "react";

export const useContent = (fileName) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(fileName);
        if (!response.ok) {
          throw new Error("Failed to load content");
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
  }, [fileName]);

  return { content, loading, error };
};
