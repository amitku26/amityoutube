import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return <div className="w-auto h-56 flex gap-3 flex-col md:flex-row">
    <div className="relative inline-block">
      <div>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="md:h-44 h-40 md:w-96 w-full rounded-lg"
            alt="thumbnail"
          />
        </Link>
        <span className="absolute md:bottom-16 bottom-3 right-4 text-sm bg-gray-900 px-2 py-0.5 z-10 cursor-pointer">
          {data.videoDuration}
        </span>

      </div>


    </div>
    <div className="flex md:flex-col gap-3 md:w-[62%]  mt-2 overflow-hidden h-full">
					<div className='flex md:hidden min-w-fit '>
						<a href="#">
							<img
								src={data.channelInfo.image}
								alt="channel"
								className="h-8 w-8 rounded-full mt-1"
							/>
						</a>
					</div>
					<div className='flex flex-col '>
						<h3 >
							<a href="" className="line-clamp-2 ">
								{data.videoTitle}
							</a>
						</h3>
						<div className=" flex md:flex-col text-gray-400">

							<div className="text-sm ">

								<a href="#" className="after:content-['•'] after:mx-1 hover:text-white text-gray-400 md:hidden  md:text-sm ">
									{data.channelInfo.name}
								</a>

								<span className="after:content-['•'] after:mx-1">
									{data.videoViews} views
								</span>
								<span>{data.videoAge} ago</span>
							</div>
						</div>
					</div>
					<div className=" hidden md:flex  min-w-fit  items-center gap-2">
						<a href="#">
							<img
								src={data.channelInfo.image}
								alt="channel"
								className="h-8 w-8 rounded-full mt-1"
							/>
						</a>
						<div>
							<a href="#" className="hover:text-white text-gray-400 text-sm ">
								{data.channelInfo.name}
							</a>
						</div>
					</div>
					<div className=" hidden md:flex max-w-2xl line-clamp-2 text-sm text-gray-400">
						<p>{data.videoDescription}</p>
					</div>
				</div>
    </div>

    
    

}