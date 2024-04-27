import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { HomePageVideos } from "../Types";
import Card from "../components/Card";
import { clearVideos } from "../store";



function Home() {


    const dispatch = useAppDispatch();
    const videos = useAppSelector((state)=>state.youtubeApp.videos)


    useEffect (()=>{
        return () =>{
            dispatch(clearVideos())
        }
    }, [dispatch])

    useEffect(()=>{
        dispatch(getHomePageVideos(false));        
    },[dispatch])

    return (
        <div className="max-h-screen overflow-hidden">
            <div style={{height: "7.5vh"}}>
                <Navbar />
            </div>
                <div className="flex" style={{height: "92.5vh"}}>
                    <Sidebar />
                    <div className="w-full">
                    {videos.length ? (
                    <InfiniteScroll 
                        dataLength={videos.length}
                        next={()=> dispatch(getHomePageVideos(true))}
                        hasMore={videos.length <500}
                        loader={<Spinner/>}
                        height={`100vh`}
                    >
                        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                            {videos.map((item:HomePageVideos)=>{
                                return <Card data={item} key={item.videoId}/>
                            })}
                        </div>
                    </InfiniteScroll>):(<Spinner />)}
                    </div>
                </div>
            </div>
    )
}

export default Home;