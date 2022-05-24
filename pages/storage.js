import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { app } from "../firebase/firebase";

const Storage = () => {
  const [questions, setQuestions] = useState([]);

  //   const getQuestions = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://criz-e8a27-default-rtdb.firebaseio.com/questions.json"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const responseData = await response.json();

  //       const allQuestions = [];

  //       for (const key in responseData) {
  //         console.log(responseData);
  //         // allQuestions.push({
  //         //   id: key,
  //         //   title: responseData[key].text,
  //         // });
  //       }
  //       setQuestions(allQuestions);
  //     } catch (error) {
  //       //   setError(error.message);
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getQuestions();
  //   }, []);

  const db = getFirestore(app);
  const colRef = collection(db, "books");
  const submitHandler = () => {
    // get collection data
    getDocs(colRef)
      .then((snapshot) => {
        // console.log(snapshot.docs)
        let books = [];
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        console.log(books);
      })
      .catch((err) => {
        console.log(err.message);
      });

    // add collection data
    addDoc(colRef, {
      title: "The Setup",
      author: "Dan Bilzerian",
    });
  };

  return (
    <div>
      <button onClick={submitHandler}>Submit Data</button>
    </div>
  );
};

export default Storage;
