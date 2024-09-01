import "../../css/tag.css";

const EventTag = ({ tagName, index ,dummyURL,primaryColor ,secondaryColor ,textColor}: { tagName: string; index: any; dummyURL:any;primaryColor:string; secondaryColor:string ;textColor:string;}) => {

  return (
    <div style={{ marginTop: index * 25 + "px",backgroundColor:`${primaryColor}`, borderColor:`${secondaryColor}`}} className="tag-container">
      <a  href={dummyURL} style={{ textDecoration: "none",color:`${textColor}` }} title={tagName}>
        {tagName}
      </a>
    </div>
  );
};

export default EventTag;
