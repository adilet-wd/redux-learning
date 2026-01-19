import React from 'react';
import {decrement, increment, incrementAsync, incrementByAmount} from "~/state/counter/counterSlice";
import type {AppDispatch} from "~/state/store";
import {useDispatch} from "react-redux";

function FooterModule() {
      const dispatch: AppDispatch = useDispatch();
      return (
              <div className={"max-w-full w-full bg-cyan-700 text-white h-10 mt-2"}>
                    <div className={"container mx-auto flex justify-center items-center h-full gap-2"}>
                          <button className={"cursor-pointer font-bold text-xl text-green-500"}
                                  onClick={()=>{dispatch(increment())}}> Increment </button>
                          <button className={"cursor-pointer font-bold text-xl text-green-500"}
                                  onClick={()=>{dispatch(incrementByAmount(10))}}> Increment by 10</button>
                          <br/>
                          <button className={"cursor-pointer font-bold text-xl text-green-500"}
                                  onClick={()=>{dispatch(incrementAsync(10))}}> Increment Async</button>
                          <br/>
                          <button className={"cursor-pointer font-bold text-xl text-red-500"}
                                  onClick={()=>{dispatch(decrement())}}> decrement </button>

                    </div>

              </div>
      );
}

export default FooterModule;