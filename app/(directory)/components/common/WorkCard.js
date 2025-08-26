const WorkThumbnail = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="workThumbnail">
      <div className="workThumbnail--thumbnail">
        <img
          alt={title}
          loading="lazy"
          width="1"
          height="1"
          decoding="async"
          style={{ color: 'transparent' }}
          src={imageSrc}
        />
      </div>
      <span className="workThumbnail--projectInformation hasSubtitle">
        <span className="workThumbnail--title">{title}</span>
        <span className="workThumbnail--subtitle">{subtitle}</span>
      </span>
    </div>
  );
};

export default WorkThumbnail;