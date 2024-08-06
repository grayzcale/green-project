const News = (props) => {
  return (
    <div className="flex flex-col justify-center items-start w-1/2">
      <img src={props.src} alt={ props.alt} className="w-60 h-60"/>
      <span className="font-bold  text-ellipsis">{props.title ? props.title : "Loading"}</span>
      <p className=" text-ellipsis">
        {props.body}
      </p>
    </div>
  );
};

export default News;
