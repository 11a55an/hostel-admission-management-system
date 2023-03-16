import React from 'react';

const Video = () => {
    return (
        <div>
            <video width="100%" height="100%" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;