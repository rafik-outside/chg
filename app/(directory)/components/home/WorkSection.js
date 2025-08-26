import WorkGrid from "../common/WorkGrid";

const WorkSection = ({ data }) => {
  return (
    <section className="pageContent--workThumbnails js-fade__quick">
        <WorkGrid workData={data}></WorkGrid>
    </section>
  );
};

export default WorkSection;