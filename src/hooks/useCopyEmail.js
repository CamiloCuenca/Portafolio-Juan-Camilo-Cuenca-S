import { useState } from "react";

export const useCopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("camilocuencadev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Restablecer estado después de 2s
  };

  return { copied, handleCopyEmail };
};
