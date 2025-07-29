import React, {useState, useEffect, useCallback} from 'react'
import {getCldImageUrl, getCldVideoUrl} from "next-cloudinary"
import {Download, Clock, FileDown, FileUp} from "lucide-react";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import {fileSize} from "filesize"

dayjs.extend(relativeTime)



const VideoCard = () => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard