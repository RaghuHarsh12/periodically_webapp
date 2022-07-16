import Head from "next/head";
import React,{useState , useEffect} from "react";
import { useRouter } from "next/router";
import { Explore } from "@mui/icons-material";
const Home = () => {

const [data, setData] = useState([]);
const randomQuote = async () => { await fetch("https://api.quotable.io/random" , {method: "GET"})
.then(res => res.json())
.then(data => setData(data))
.catch(err => console.log(err))}
useEffect(() => {
  randomQuote();
}
, [])
const router = useRouter();
const explore = () => {
  router.push("/periodictable");
}
  return (
    <div className="font-gara">
      <Head>
        <title>Periodically</title>
        <link rel="icon" href="/favicon192.png" />
      </Head>
      <div className="relative w-screen h-screen text-primary-white bg-primary">
        <div className=" absolute w-full h-screen flex flex-col items-center justify-center">
          <div>
            <h2 className="font-head text-primary-color sm:text-4xl md:text-6xl ext-4xl font-bold text-center p-2 rounded-xl ">
              🧬Periodically
            </h2>
        <p className="text-lg italic text-center">"The place where you can learn anything and everything about elements by which our world is made of."</p>
          </div>
          <div className="mt-8 bg-primary-light shadow-light-card p-4 rounded-md  md:max-w-6xl" >
            <div className="mt-2">
              <h2 className="font-gara text-primary-color text-2xl" >Thought of the moment</h2>
              <p className="italic text-xl">"{data.content}"</p>
              <p className="text-right">~{data.author}</p>
            </div>
          </div>
          <div className="flex mt-4 w-36 items-center justify-around  bg-primary-color rounded-xl lg:border-2 lg:p-2  ml-4 shadow-light-card font-custom active:scale-90 hover:scale-95" onClick={explore}>
          <button className=" md:inline text-primary-white">Expore</button>
          <Explore className="h-6 cursor-pointer text-primary-white" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
