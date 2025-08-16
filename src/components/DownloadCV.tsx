const DownloadCV = () => {
  const downloading = false;
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
      class="py-2 px-4 flex gap-x-2 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-300 ease-in-out"
      >
        <path
          d="M12 3v12"
          class="group-hover:translate-y-1 transition-all duration-300 ease-in-out"
        />
        <polyline
          points="8 11 12 15 16 11"
          class="group-hover:translate-y-1 transition-all duration-300 ease-in-out"
        />
        <path d="M5 19h14" />
      </svg>
      Download my CV
    </button>
  );
};

export default DownloadCV;
