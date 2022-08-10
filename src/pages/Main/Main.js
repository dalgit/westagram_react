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
            <Nav />
            <div className="mainContainer">
                <div>
                    {data.map((feedData)=><FeedBox data={feedData} key={feedData.id}/>)}
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