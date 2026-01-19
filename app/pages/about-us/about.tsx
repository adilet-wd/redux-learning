import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "~/state/store";
import {decrement, increment} from "~/state/counter/counterSlice";
import FooterModule from "~/modules/footer/footerModule";


interface AboutProps {

}


function About(props: AboutProps) {
      const count = useSelector((state: RootState) => state.counter.value);
      // const dispatch: AppDispatch = useDispatch();

      return (
              <>
                    <div className={" ml-auto mr-auto mt-20 max-w-1/2"}>

                          <h1 className={"text-center text-2xl"}>About Us</h1>
                          <p>Welcome to the About Us page!</p>
                          <p className={"text-2xl font-bold"}> Value: ${count}</p>


                    </div>
                    <FooterModule></FooterModule>
              </>
      );
}

export default About;