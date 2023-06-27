import { Button } from './Markup.styled';

const Markup = () => {
  return (
    <>
      <div className="title">
        <h2>Please leave feedback</h2>
      </div>
      <div className="options">
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </div>
      <div className="statistics">
        <h2>Statistics</h2>
        <p>Good: </p>
        <p>Neutral: </p>
        <p>Bad: </p>
        <p>Total: </p>
        <p>Positive feedback: </p>
      </div>
    </>
  );
};

export default Markup;
