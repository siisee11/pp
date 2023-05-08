import Head from "next/head";
import CurveAnimation from "../components/CurveAnimation";
import { useRef } from "react";

export default function Home() {

  const childRef = useRef(
    {
      start: () => {},
      end: () => {}
    }
  );

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const listen = () => {
    // stt
    if (childRef.current) {
      childRef.current.start();
    }

    // start listen animation (breathing)
  }

  const process = async () => {
    // start processing animation (fast spin)
    if (childRef.current) {
      childRef.current.end();
    }
    // call chain or something

    // await processing
    // Wait 3 seconds
    await delay(3000);
    

    // start ending animation (appearing O)

    // TTS
  }

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center py-2 "
      onMouseDown={() => listen()}
      onTouchStart={() => listen()}
      onMouseUp={() => process()}
      onTouchEnd={() => process()}
    >
      <Head>
        <title>OS-J</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <CurveAnimation ref={childRef} />
        </div>
        <h1 className="mt-24 mx-auto text-center text-2xl font-thin tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-4xl">
          OS-J
        </h1>
      </main>
    </div>
  );
}
