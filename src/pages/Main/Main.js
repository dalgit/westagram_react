import './Main.scss'

import Nav from '../../components/Nav/Nav';
import FeedBox from '../../components/FeedBox/FeedBox';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import StoryBox from '../../components/StoryBox/StoryBox';
import RecommendBox from '../../components/RecommendBox/RecommendBox';
import NoticeBox from '../../components/NoticeBox/NoticeBox';

import { useState, useEffect } from 'react'

function Main() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch('/data/feedData.json', {
          method: 'GET'
        })
          .then(res => res.json())
          .then(data => {
            setData(data);
          });
      },[]);
    
    if(data.length===0) return <></>;

    return (
        <>
            <Nav setSearch={setSearch} />
            <div className="mainContainer">
                <div>
                {data.map((feedData)=>{
                        if(data.some((data)=>data['user_name']===search)){ 
                            return (feedData.user_name===search)?<FeedBox data={feedData} key={feedData.id} search={search}/>:null
                        }
                        return <FeedBox data={feedData} key={feedData.id} search={search}/>
                    })}


                    {/* {data.map((feedData)=>{
                        if(feedData.user_name===search) return <FeedBox data={feedData} key={feedData.id} search={search}/>
                        return <FeedBox data={feedData} key={feedData.id} search={search}/>
                    })} */}
                </div>
    
                <aside className="asideFeed">
                    <ProfileBox/>
                    <StoryBox/>
                    <RecommendBox/>
                    <NoticeBox/>
                </aside>
            </div>
        </>
    );
}

export default Main;