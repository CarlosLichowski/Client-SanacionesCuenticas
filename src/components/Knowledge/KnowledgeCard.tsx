
interface KnowledgeCardProps {
    title: string;
    description: string;
    imgUrl: string;
  }
  
  const KnowledgeCard = ({ title, description, imgUrl }: KnowledgeCardProps) => {
    return (
      <div>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    );
  };
  

  export default KnowledgeCard;