import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react"
import animationData from "../components/animate/dance.json"
import { useTypewriter } from "react-simple-typewriter"
import Aos from "aos";
import "aos/dist/aos.css";


const AllRepositories = () => {
    const [repositories, setRepositories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(5);
    const [isLoading, setIsLoading] = useState(true);
    const [languages, setLanguages] = useState([]);      
  
    const token = import.meta.env.VITE_GITHUB_TOKEN;
  

    const fetchAllRepositories = () => {
  
      axios
      .get('https://api.github.com/users/Ddreyy/repos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then((response) => {
              setRepositories(response.data);
  
              // Extract languages from each repository and store in a separate state variable
              const repoLanguages = response.data.map((repo) => repo.languages_url);
              // Fetch languages for each repository
              Promise.all(
                  repoLanguages.map((languageUrl) => axios.get(languageUrl, {
                      headers: {
                          'Authorization': `Bearer ${token}`
                      }
                  }))
              ).then((languageResponses) => {
                  // Store language data in a separate state variable
                  const languages = languageResponses.map((response) => response.data);
                  setLanguages(languages);
                  setTimeout(() => {
                      setIsLoading(false);
                      Aos.init({
                          duration: 2000,
                      });
                  }, 2000);
              });
          })
          .catch((error) => {
              console.log("Error fetching repositories:", error);
          });
  }
  
  
      useEffect(() => {
          fetchAllRepositories()
      }, [])
  
  
      // Calculate indexes for pagination
      const indexOfLastRepo = currentPage * reposPerPage;
      const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
      const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);
    
      // Function to change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
      const [text] = useTypewriter({
          words: ["Welcome to my world. stranger😉"],
          loop: true,
          typeSpeed: 40,
          delaySpeed: 3000,
        });
  
      return (
        <section className="h-screen flex flex-col bg-black ">
            <div className="flex justify-center items-center" style={{ overflowX: 'hidden' }}>
              {isLoading ? (
              <div className='flex flex-col justify-center items-center h-screen'>
                  <h1 className='font-sora text-lg sm:text-2xl md:text-3xl font-bold text-white'>{text}</h1>
                  <Lottie animationData={animationData} className='w-full h-auto'/>
              </div>
              ) : (
              <div className="flex flex-col items-center">
                  <div className="text-container mt-28 sm:mt-24">
                      <h2 className="text-lg xs:text-xl font-bold font-sora text-white ">Ddreyy Github Repositories</h2>
                      <div className="text-border"></div>
                  </div>
                  
                  <ul className="list-none pt-6">
                  {currentRepos.map((repo, index) => (
                      <li
                      key={repo.id}
                      className={`mb-2 border bg-[#212F3E] rounded py-2 sm:py-3 md:py-4 px-10 sm:px-14 ${
                          index % 2 === 0 ? "slide-from-right" : "slide-from-left"
                      }`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                      data-aos="fade"
                      >
                      <Link
                          to={`/repositories/${repo.name}`}
                          className="text-[#C8D6E5] text-base md:text-2xl hover:underline hover:text-[#e5ecf5] font-satoshi"
                      >     
                          {repo.name}
                      </Link>
                      {languages[index] && Object.keys(languages[index]).length > 0 && (
                          <div className="text-xs sm:text-sm text-[#6B7280] flex mt-1">
                             <h2 className="font-sora italic">Languages :&nbsp; &nbsp; </h2> 
                          {Object.keys(languages[index]).map((language, langIndex) => (
                              <span key={langIndex} className="mr-2 text-white">
                              {language}
                              </span>
                          ))}
                          </div>
                      )}
                      </li>
                  ))}
                  </ul>
                  <div className="pt-4 flex space-x-4">
                      <button
                      className={`bg-[#E1D9D1] hover:bg-[#676767] hover:text-white transition-transform duration-400 ease-in-out transform hover:scale-105 text-black font-bold font-sora py-1 xs:py-2 px-4 rounded-l ${
                          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      }`}
                      onClick={() => {
                          if (currentPage > 1) {
                          paginate(currentPage - 1);
                          }
                      }}
                      disabled={currentPage === 1}
                      >
                      Prev
                      </button>
                      <button
                      className={`bg-[#E1D9D1] hover:bg-[#676767] hover:text-white transition-transform duration-400 ease-in-out transform hover:scale-105 text-black font-bold font-sora py-1 xs:py-2 px-4 rounded-r ${
                          currentRepos.length < reposPerPage ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      }`}
                      onClick={() => {
                          if (currentRepos.length === reposPerPage) {
                          paginate(currentPage + 1);
                          }
                      }}
                      disabled={currentRepos.length < reposPerPage}
                      >
                      Next
                      </button>
                  </div>
              </div>
              )}
            </div>
        </section>
          
        );
};

export default AllRepositories;
