import React from "react";
const Video = () =>{
return(
<>
<video className="content" controls>
        <source src="/video.mp4" type="video/mp4 "/>
        <source src="/video.mp4" type="video/ogg "/>
</video>
<video className="content" controls>
        <source src="/video2.mp4" type="video/mp4 "/>
        <source src="/video2.mp4" type="video/ogg "/>
</video>
<video className="content" controls>
        <source src="/video3.mp4" type="video/mp4 "/>
        <source src="/video3.mp4" type="video/ogg "/>
</video>
<video className="content" controls>
        <source src="/video4.mp4" type="video/mp4 "/>
        <source src="/video4.mp4" type="video/ogg "/>
</video>
<video className="content" controls>
        <source src="/video5.mp4" type="video/mp4 "/>
        <source src="/video5.mp4" type="video/ogg "/>
</video>
<video className="content" controls>
        <source src="/video6.mp4" type="video/mp4 "/>
        <source src="/video6.mp4" type="video/ogg "/>
</video>
</>
)
}

export default Video;