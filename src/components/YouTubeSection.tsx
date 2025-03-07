import React, { useState, useEffect } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

function YouTubeSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const channelId = 'L9evzGrF3k9J2WDeu8YZRg'; // Il tuo channel ID
  const apiKey = 'UCL9evzGrF3k9J2WDeu8YZRg'; // La tua API key di YouTube

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
        );
        const data = await response.json();
        
        const formattedVideos = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
        }));
        
        setVideos(formattedVideos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="py-20 w-full bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          I Nostri Video
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Scopri come aiutiamo le aziende ad automatizzare i loro processi attraverso l'AI
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-card bg-black/40 rounded-xl overflow-hidden group"
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#274f36]/0 group-hover:bg-[#274f36]/20 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-[#274f36] transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@riccardobellicontarini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#274f36] hover:bg-[#1a3524] text-white px-6 py-3 rounded-full transition-colors"
          >
            Visita il nostro canale
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 5l7 7-7 7M3 12h17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default YouTubeSection; 