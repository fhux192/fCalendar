import "../../css/tag.css";

const EventTag = ({
  tagName,
  index,
  dummyURL,
  primaryColor,
  secondaryColor,
  textColor,
}: {
  tagName: string;
  index: any;
  dummyURL: any;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}) => {
  const isMobile = window.innerWidth < 1140;
  return (
    <div
      style={{
        marginTop: `${isMobile ? index * 20 + "px" : index * 23 + "px"}`,
        backgroundColor: `${primaryColor}`,
        borderColor: `${secondaryColor}`,
      }}
      className="tag-container"
    >
      <a
        href={dummyURL}
        style={{ textDecoration: "none", color: `${textColor}` }}
        title={tagName}
      >
        {tagName}
      </a>
    </div>
  );
};

export default EventTag;
