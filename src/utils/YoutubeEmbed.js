import React from "react";

const YoutubeEmbed = () => (
  <div className="video-responsive" >
    <h2 className="text-white font-bold">Aadujeevitham</h2>
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/xjQKvhEi7NI?autoplay=1"
   
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
