import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { useRef } from 'react';
import { type MediaOutletElement, type MediaPlayerElement } from 'vidstack';

function Player() {
  const player = useRef<MediaPlayerElement>(null),
    provider = useRef<MediaOutletElement>(null),
    floatContainer = useRef<HTMLDivElement>(null),
    floating = useRef<boolean>();

  function onToggleMiniplayer() {
    if (!floating.current) {
      floatContainer.current!.append(provider.current!);
    } else {
      player.current!.prepend(provider.current!);
    }

    floating.current = !floating.current;
  }

  return (
    <>
      <MediaPlayer
        src="https://media-files.vidstack.io/720p.mp4"
        poster="https://media-files.vidstack.io/poster.png"
        aspectRatio={16 / 9}
        ref={player}
      >
        <MediaProvider ref={provider} />
        <div className="media-controls-container">
          <div className="media-controls">
            <MediaPlayButton />
            <MediaToggleButton
              className="media-float-button"
              aria-label="Miniplayer"
              onPointerUp={onToggleMiniplayer}
            >
              {/* ... */}
            </MediaToggleButton>
          </div>
        </div>
      </MediaPlayer>

      <div className="media-float-container" ref={floatContainer} />
    </>
  );
}