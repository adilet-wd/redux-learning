import React, {useState} from 'react';
import {configureStore} from "@reduxjs/toolkit";


interface AboutProps {

}


const initialState = {value: 0};
const addTodo = (text: string ) => {
      return {
            type: "action/increment",
            payload: text
      }
}


const counterReducer = (state = initialState, action: any) => {
      if (action.type === "action/increment") {
            return {
                  ...state,
                  value: state.value + 1
            }
      }
      return state;
}

const store = configureStore({ reducer: counterReducer })

const selectCounterValue = (state: typeof initialState) => state.value;


function About(props: AboutProps) {
      const [counter, setCounter] = useState(0);
      const currentValue = selectCounterValue(store.getState());


      const increment = () => {
            setCounter(prevState  => prevState + 1);
            store.dispatch(addTodo("new to do"));
            // console.log(store.getState(), 'new value')
            console.log(currentValue, "value")
      }

      return (
              <div className={" ml-auto mr-auto mt-20 max-w-1/2"}>

                    <h1 className={"text-center text-2xl"}>About Us</h1>
                    <p>Welcome to the About Us page!</p>
                    <p className={"text-2xl font-bold"}> Value: ${currentValue} <button className={"cursor-pointer"} onClick={increment}> + </button></p>
              </div>
      );
}

export default About;