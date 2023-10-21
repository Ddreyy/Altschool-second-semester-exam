import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react"
import animationData from "../components/animate/loading.json"
import { BsBoxArrowUpRight } from "react-icons/bs";

const RepoData = () => {
  const { repoName } = useParams();
  const [repository, setRepository] = useState(null);
  const [isLoading, setIsLoading] = useState(true)


  const fetchEachRepository = () => {
    axios.get(`https://api.github.com/repos/Ddreyy/${repoName}`)
    .then((response) => {
        setRepository(response.data)
    })
    .catch((error) => {
        console.log("Error fetching repository details:", error);
    })
    setTimeout(() => {
        setIsLoading(false); 
      }, 3000); 
  }

  useEffect(() => {
    fetchEachRepository()
  }, [repoName])


  if (isLoading) {
    return (
      <div className="flex bg-black justify-center items-center h-screen">
        <Lottie animationData={animationData} className="w-1/2 h-auto" />
      </div>
    );
  }


  if (!repository) {
    return <div>Error loading repository data.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white bg-black">
      <h2 className="font-sora text-xl sm:text-3xl">{repository.name}</h2>
        <p className="text-base sm:text-lg font-satoshi flex text-center">{repository.description}</p>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer" className="bg-[#E1D9D1] hover:bg-[#676767] hover:text-white text-black transition-transform duration-400 ease-in-out transform hover:scale-105 flex items-center gap-2 font-satoshi py-2 px-4 rounded mt-4">
          View on GitHub <BsBoxArrowUpRight className="text-sm font-extrabold" />
        </a>
      <Link to="/">
        <button className="bg-[#E1D9D1] hover:bg-[#676767] hover:text-white text-black transition-transform duration-400 ease-in-out transform hover:scale-105 font-bold font-sora py-2 px-4 mt-16 rounded">
          Back to Repo List
        </button>
      </Link>
    </div>
  );
};

export default RepoData;
