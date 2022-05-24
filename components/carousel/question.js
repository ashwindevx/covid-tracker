import React, { useState, useEffect } from "react";
// import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import QUESTIONS from "../../questions.json";

const Question = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completedQuiz, setCompletedQuiz] = useState(false);

  const optionHandler = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (currentQuestion >= QUESTIONS.length) {
      setCompletedQuiz(true);
    }
  }, [currentQuestion]);

  return (
    <div className="w-full text-center">
      {!completedQuiz ? (
        <>
          <p className="text-3xl font-bold mt-10">Score: {score}</p>
          <Carousel
            className="text-white max-w-3xl mx-auto mt-20"
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            selectedItem={currentQuestion}
          >
            {QUESTIONS.map((question) => {
              return (
                <div key={question.id}>
                  <p className="text-2xl font-semibold">{question.title}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {question.options.map((option) => {
                      return (
                        <li
                          key={option.id}
                          onClick={() => optionHandler(option.isCorrect)}
                          className="border-2 rounded-lg py-4 text-xl font-semibold cursor-pointer"
                        >
                          {option.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </Carousel>
        </>
      ) : (
        <div className="mt-20 text-4xl">
          <p>Congrats you solved all the questions!</p>
          <p>Your total score is: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
