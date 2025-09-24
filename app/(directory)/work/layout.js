'use client';
import React, { useState, useEffect } from 'react';
import MainContainer from "../components/common/MainContainer";
import WorkFilterAndSort from '../components/common/WorkFilterAndSort';
import { useParams } from 'next/navigation';
import WorkSection from '../components/home/WorkSection';
import MasonryWrapper from '../components/common/MasonryWrapper';
import WorkThumbnail from '../components/common/WorkCard';
import Loading from '../components/common/Loading';

export default function Workpage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const params = useParams();
  const slug = params.slug;
  const sort = params.sort || 'curated';

  useEffect(() => {
    let currentSlug;
    switch (slug) {
      case 'logos':
        currentSlug = 'logo';
        break;
      case 'graphics':
        currentSlug = 'graphic';
        break;
      default:
        currentSlug = slug;
        break;
    }
    fetch(`https://bpcghheadless.wpenginepowered.com/wp-json/cgh/work/?total=-1&type=${currentSlug}&sort=${sort}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [slug, sort]);

  return (
    <MainContainer id={`work/${slug}${params.sort ? `/${sort}` : ''}`} className={`pageType-workCollection ${loading ? 'main--loading' : ''}`}>
      <div className="workCollection">
        <div className="content--container workCollection--container">
          <div className="preContent">
            <WorkFilterAndSort slug={slug} sort={sort} />
          </div>
          <div className="js-fade__slow">
            {loading ? (
              <Loading />
            ) : slug === 'graphics' ? (
              <MasonryWrapper>
                {data.map((work,key) => (
                  <WorkThumbnail
                    key={work.slug}
                    imageSrc={ key%2 == 1 ? work.thumbnail.sizes[0][0] : work.thumbnailReverse.sizes[0][0] }
                    title={work.title}
                    subtitle={work.subtitle}
                  />
                ))}
              </MasonryWrapper>
            ) : (
              <WorkSection data={data} />
            )}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
