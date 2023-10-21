<h3 align="center">GitHub Repository Viewer</h3>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

GitHub Repository Viewer is a React-based web application designed to explore GitHub repositories efficiently. It consists of the following main features:

Home Page: The home page displays a list of all your GitHub repositories fetched using the GitHub API. Each repository is presented with its name, and you can click on any repository to view more details.

Test Page: The application includes a special test page designed to evaluate the error boundary functionality. This test page intentionally triggers an error within a component, allowing you to see how errors are gracefully handled by the error boundary component.

GitHub API Integration: The project integrates with the GitHub API to dynamically fetch the list of repositories associated with your GitHub account. This ensures that the application always displays up-to-date information.

Repository Details: When you click on a specific repository, the application navigates to a dedicated repository details page. Here, you can find comprehensive information about the repository, including its name, description, and a link to the GitHub repository. Additionally, there is a button that, when clicked, takes you directly to the GitHub page of the repository, allowing for seamless code exploration.

The GitHub Repository Viewer project is an excellent way to showcase your GitHub projects and offers a smooth user experience for navigating, exploring, and understanding your repositories. Additionally, it provides an opportunity to test and demonstrate error handling capabilities using error boundaries in React applications.





### Built With

* [![React][React.js]][React-url]
* [![TailwindCss][TailwindCss]][Tailwind-url]
* [![Axios][Axios]][Axios-url]
* [![Aos][Aos]][Aos-url]
* [![Lottie][Lottie]][Lottie-url]





<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js: Make sure you have Node.js installed on your machine.
GitHub Token: Obtain a GitHub token to authenticate API requests. Store it in an environment variable named VITE_GITHUB_TOKEN for security.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ddreyy/Altschool-second-semester-exam.git
   ```

2. To install the project dependencies, run:
   ```sh
   npm install
   ```




## USAGE

Check out the live demo: [GitHub Repository Viewer Demo](https://ddreyy-project.netlify.app/)


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b {Branch Name}`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin {Branch Name}`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

*  **Name** : Dada Adedapo
* [![Twitter][Twitter]][Twitter-url]
* [![LinkedIn][LinkedIn]][LinkedIn-url]
* **Email** :  mradedapodada@gmail.com

Project Link: [https://github.com/Ddreyy/Altschool-second-semester-exam]






[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white 
[Tailwind-url]: https://tailwindcss.com/ 
[Axios]: https://img.shields.io/badge/Axios-0D8BF1?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[Lottie]: https://img.shields.io/badge/Lottie-FF9900?style=for-the-badge&logo=lottie&logoColor=white
[Lottie-url]: https://lottiefiles.com/
[Aos]: https://img.shields.io/badge/Aos-42A0CE?style=for-the-badge&logo=aos&logoColor=white
[Aos-url]: https://michalsnik.github.io/aos/
[Twitter]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[Twitter-url]: https://twitter.com/
[LinkedIn]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[LinkedIn-url]: https://www.linkedin.com/in/adedapo-dada-230208210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app