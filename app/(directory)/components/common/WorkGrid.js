import WorkThumbnail from "./WorkCard";
import '@/public/styles/work-grid.css'; 


const WorkGrid = (workData) => {
  console.log(workData);
  return (
    <>
      {workData.workData.map((work, index) => (
        <WorkThumbnail
          key={work.slug}
          imageSrc={ index%2 == 1 ? work.thumbnail.sizes[0][0] : work.thumbnailReverse.sizes[0][0] }
          title={work.title}
          subtitle={work.subtitle}
        />
      ))}
    </>
  );
};

export default WorkGrid;
