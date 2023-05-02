import { useState } from "react";
import { useForm } from "react-hook-form";
import wordList from "../mock-words/words.json";

function App() {
  const { handleSubmit, register } = useForm();
  const [words, setWords] = useState(wordList);

  const onSubmit = (data: any) => {
    if (!data.word) return setWords(wordList);
    // filter words
    setWords([
      ...wordList.filter((word) => {
        return (
          word.word.includes(data.word) ||
          word.translation.includes(data.word) ||
          word.definition.includes(data.word)
        );
      }),
    ]);
  };
  return (
    <div className="w-max mx-auto mt-20">
      <h1 className="w-max mx-auto text-[40px]">
        Axtarış edəcəyiniz sözü daxil edin.
      </h1>
      <form className="mx-auto  w-max mt-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("word")}
          type="text"
          className="border border-gray-400  px-4 py-2"
          placeholder="sözü daxil edin"
        />
        <button className="border border-gray-400  px-4 py-2">Axtar</button>
      </form>

      <div className="flex flex-wrap flex-col gap-4 mt-3">
        {words.map((word) => (
          <div className="flex gap-3 bg-gray-200 p-4 text-black flex-col">
            <p className="font-bold text-xl">{word.word}</p>
            <p className="border border-gray-400 px-4 py-2">
              {word.translation}
            </p>
            <p className="border border-gray-400 px-4 py-2">
              {word.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
