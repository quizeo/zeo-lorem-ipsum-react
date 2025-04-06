import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState(text);
  const [showText, setShowText] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setCount(value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberOfParagraphs = parseInt(count);
    const slicedText = text.slice(0, numberOfParagraphs);
    setParagraphs(slicedText);
    setShowText(true);
    console.log(slicedText);
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph</label>
        <input
          type="number"
          value={count}
          id="amount"
          name="amount"
          className="amount"
          onChange={handleChange}
          max={8}
          step={1}
          min={1}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {showText ? paragraphs.map((text) => <p key={nanoid}>{text}</p>) : null}
      </article>
    </section>
  );
};
export default App;
