const Question = (prop) => {
  return (
    <div className="flex flex-col" key={prop.id}>
      <span>
        {prop.id}. {prop.question}
      </span>
      {prop.map((question, id) => {
        return <button key={id}>{question.option.answer}</button>;
      })}
    </div>
  );
};
export default Question;
