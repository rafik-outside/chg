'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Loading from "./components/common/Loading";
import Leadspace from "./components/home/Leadspace";
import ViewAllWork from "./components/home/ViewAllWork";
import WorkSection from "./components/home/WorkSection";
import MainContainer from './components/common/MainContainer';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!memoizedData) {
      fetch('https://bpcghheadless.wpenginepowered.com/wp-json/cgh/work/?total=-1&home=true&sort=curated')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);

    }

  }, []);
  const memoizedData = useMemo(() => data, [data]);
  return (
    <MainContainer id="home" className={`pageType-workCollection ${loading ? 'main--loading' : ''}`}>
      <div className="workCollection">

        <div className="preContent"></div>
        <div className="content--container workCollection--container">
          {loading ? (
            <Loading />
          ) : (
            <div className="js-fade__slow">
              <Leadspace />
              <WorkSection data={memoizedData} />
              <ViewAllWork />
            </div>
          )}
        </div>
      </div>
    </MainContainer>

  );
}

