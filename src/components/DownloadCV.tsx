const DownloadCV = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "rabiu-ahmad-cv-2025";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadCV}
      class="py-2 px-4 flex gap-x-2 text-sm border border-big/25"
    >
      Download my CV
    </button>
  );
};

export default DownloadCV;
