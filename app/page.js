import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    // BODY
    <div className="text-white max-w-[1400px] m-auto">
      {/* HEADER */}
      <div className=" w-full h-[10vh] flex justify-between p-5 items-center border-b-[0.8px] border-yellow-500">
        <div>
          <h1 className=" font-extrabold text-xl">TOLULOPE DAIRO</h1>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.linkedin.com/in/tolu-dairo-8344111b7/">
            <button className=" w-[100px] rounded  px-4 py-2 bg-gray-800 text-white cursor-pointer">LinkedIn</button>
          </Link>
          <Link href="https://x.com/toludairo534">
            <button className=" w-[100px] rounded  px-4 py-2  bg-yellow-500 text-black cursor-pointer">Email</button>
          </Link>
        </div>
      </div>
      {/* MIDSECTION */}
      <div className="w-full  h-fit p-10 flex flex-col gap-0 md:gap-8  md:flex-row  ">
        <div className="md:w-1/2 w-full">
          <div className="mb-5">
            <h1 className="text-4xl font-extrabold">FRONTEND <br/> DEVELOPER</h1>
          </div>
          <div className="w-full h-[85%] flex m-auto ">
            <img src="/image/ME.JPG" alt="MainIMG" className=" rounded-xl" />
          </div>
        </div>
        <div className="md:w-1/2 w-full  flex flex-col mt-30 gap-10 md:gap-5">
          <div>
            <h3 className="text-left w-9/10 text-2xl md:text-xl font-semibold">
              Hi, I'm Tolulope, a passionate front-end developer with a strong focus on building dynamic,  
              user-friendly web interfaces. I specialize in creating responsive and accessible designs, 
              ensuring seamless user experiences across all devices. My skill set includes HTML, CSS, 
              JavaScript, and React, and I'm always excited to leverage modern technologies to solve 
              real-world problems. I'm committed to clean, maintainable code and enjoy collaborating with 
              teams to bring innovative ideas to life.
            </h3>
          </div>
          <Link href="https://x.com/toludairo534" className='cursor-pointer md:w-1/3 w-full'>
            <button className=" rounded-[6px] h-[60px] md:h-[49px]  w-full px-4 py-2 bg-gray-800">Learn More</button>
          </Link>
        </div>
      </div>
      {/* SKILLS */}
      <div className=" w-full h-fit mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 text-[clamp(0.875rem,0.8293rem+0.1951vw,1rem)]">
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/HTML.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>HTML5, CSS3, and JavaScript (ES6+)</h3>
            <h2>The foundational skills for front-end development.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/responsive.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>Responsive Design</h3>
            <h2>Ensuring websites work across all device sizes.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/REACT.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>React.js </h3>
            <h2>Essential for building modern, dynamic user interfaces.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/github.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>Version Control (Git)</h3>
            <h2>Crucial for code management and collaboration.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/uiux.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>UI/UX Design Principles:</h3>
            <h2>Understanding user experience and accessibility.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/api.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>API Integration</h3>
            <h2>Fetching and displaying data from backends via RESTful APIs or GraphQL.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/browser.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>Cross-Browser Compatibility</h3>
            <h2>Ensuring the site works consistently on various browsers.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/css.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>CSS Frameworks (Tailwind CSS)</h3>
            <h2>For faster styling and prototyping.</h2>
          </div>
        </div>
        <div className="bg-yellow-500 h-[150px] rounded flex items-center gap-4 p-4">
          <img src="/image/next.svg" alt="skillIMG" className='w-[50px] h-[50px]'/>
          <div>
            <h3>Next.js</h3>
            <h2>Next.js is a powerful, open-source React framework built by Vercel. It is designed for building fast, scalable, and SEO-friendly web applications.</h2>
          </div>
        </div>
      </div>
      {/* PORTFOLIO */}
      <div className="bg-yellow-500 h-fit w-[95%] m-auto md:p-10 p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 rounded-[24px] mb-10 md:mb-0">
        <a
          href="https://react-housing-project.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[600px] bg-white text-black rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
        >
          <div className="h-[80%] w-full flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src="/image/img1.png"
              alt="img1"
              className="w-[100%] h-[85%] object-cover transition duration-300 transform hover:scale-110"
            />
          </div>
          <div className="pl-5 pr-5 flex flex-col gap-2">
            <h3 className="text-xl font-bold">HOUSING PROJECT</h3>
            <h2>A SIMPLE PROJECT TO CHECK HOUSES AVAILABLE IN A PRESET JSON FILE</h2>
          </div>
        </a>
        <a
          href="https://weather-project-kmo6.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[600px] bg-white text-black rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
        >
          <div className="h-[80%] w-full flex items-center justify-center overflow-hidden rounded-xl">
            <img src="/image/img3.png" alt="img3" className="w-[95%] h-[85%] rounded object-cover transition duration-300 transform hover:scale-110 cursor-pointer" />
          </div>
          <div className="pl-5 pr-5 flex flex-col gap-2">
            <h3 className="text-xl font-bold">WEATHER PROJECT</h3>
            <h2>A simple website for finding out the weather conditions in different parts of the world using information fetched from an API</h2>
          </div>
        </a>
        <a
          href="https://playsphere.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[600px] bg-white text-black rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
        >
          <div className="h-[80%] w-full flex items-center justify-center overflow-hidden rounded-xl">
            <img src="/image/img4.png" alt="img4" className="w-[95%] h-[85%] rounded object-cover transition duration-300 transform hover:scale-110 cursor-pointer" />
          </div>
          <div className="pl-5 pr-5 flex flex-col gap-2">
            <h3 className="text-xl font-bold">Playshere By Divaca</h3>
            <h2>A Full website dedicated to helping Gamers and organizations edit, create and manage Game tournaments.</h2>
          </div>
        </a>
        <a
          href="https://www.divacahealth.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[600px] bg-white text-black rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
        >
          <div className="h-[80%] w-full flex items-center justify-center overflow-hidden rounded-xl">
            <img src="/image/img5.png" alt="img5" className="w-[95%] h-[85%] rounded object-cover transition duration-300 transform hover:scale-110 cursor-pointer" />
          </div>
          <div className="pl-5 pr-5 flex flex-col gap-2">
            <h3 className="text-xl font-bold">Divaca Health By Divaca</h3>
            <h2>A Full website dedicated to helping health attendants, Doctors and Nurses keep records of students health issues, results and medication.</h2>
          </div>
        </a>
        <a
          href="https://final-year-project-navy-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[600px] bg-white text-black rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
        >
          <div className="h-[80%] w-full flex items-center justify-center overflow-hidden rounded-xl">
            <img src="/image/AnimalHealth.png" alt="img5" className="w-[95%] h-[85%] rounded object-cover transition duration-300 transform hover:scale-110 cursor-pointer" />
          </div>
          <div className="pl-5 pr-5 flex flex-col gap-2">
            <h3 className="text-xl font-bold">Livestock Health Management System</h3>
            <h2>A Full website dedicated to helping Farmers manage animal health based on temperature, It gives real time information on any animal at a given time(Simulation)</h2>
          </div>
        </a>
      </div>
      {/* PHILOSOPHY */}
      <div className=" w-full h-fit flex p-5 flex-col md:flex-row  ">
        <div className="md:w-1/2 w-full items-center  text-center  justify-center flex flex-col ">
        <div className='md:w-[70%] w-full h-full items-start  text-center gap-10 justify-center flex flex-col'>
          <h1 className="text-4xl text-left font-extrabold ">Philosphy</h1>
          <h3 className=" w-full text-left text-lg font-bold">
            I have a results-driven approach to my work, always ensuring that 
            every task is completed with the highest level of dedication and 
            precision. Whether it’s a complex project or a simple task, I consistently 
            put in my best effort to meet and exceed expectations. My goal is always 
            to deliver solutions that satisfy the needs of users, focusing on creating 
            experiences that are both efficient and user-friendly. With a strong commitment 
            to quality, I thrive on bringing ideas to life and seeing them successfully 
            implemented.
          </h3>
          <Link href="https://x.com/toludairo534" className='cursor-pointer'>
            <button className="border-1 rounded border-black px-4 py-2 bg-yellow-500  cursor-pointer">Get In Touch</button>
          </Link>
          
        </div>
        </div>
        <div className="md:w-1/2 w-full  flex items-center justify-center mt-10 ">
          <img src="/image/DSC02459.JPEG" className="rounded-[20px]  h-[70%]"/>
        </div>
      </div>
      {/* LETS COLLABORATE */}
      <div className="w-[95%] m-auto h-fit mt-5 md:mt-0 bg-gray-800 flex md:flex-row flex-col items-center gap-10 justify-between p-7 rounded-[16px] ">
        <div className="bg-black md:w-1/3 w-full h-1/2 rounded-[8px] flex gap-3 p-5 items-center">
          <div>
            <div className="bg-yellow-500 rounded-full w-[50px] h-[50px] flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className=' w-[30px] h-[30px]'/>
            </div>
          </div>
          <div>
            <h2>Email</h2>
          </div>
        </div>
        <Link href="https://www.linkedin.com/in/tolu-dairo-8344111b7/" className="bg-black md:w-1/3 w-full h-1/2 rounded-[8px] flex gap-3 p-5 items-center cursor-pointer ">
          <div className='flex gap-3  items-center'>
            <div>
              <div className="bg-yellow-500 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} className=' w-[30px] h-[30px]'/>
              </div>
            </div>
            <div>
              <h2>LinkedIn</h2>
            </div>
          </div>
        </Link>
        <Link href="https://x.com/toludairo534" className="bg-black md:w-1/3 w-full h-1/2 rounded-[8px] flex gap-3 p-5 items-center cursor-pointer ">
          <div className='flex gap-3  items-center'>
            <div>
              <div className="bg-yellow-500 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <FontAwesomeIcon icon={faXTwitter} className=' w-[30px] h-[30px]'/>
              </div>
            </div>
            <div>
              <h2>Twitter</h2>
            </div>
          </div>
        </Link>
      </div>
      {/* FOOTER */}
      <div className=" w-[90%] h-fit mt-15 m-auto flex justify-center items-end border-b-[2px] border-white">
        <div className="mb-10 text-2xl font-extrabold">
          <h2>TOLULOPE DAIRO</h2>
        </div>
      </div>
      <div className="w-[90%] h-[10vh] m-auto ">
        <div className="mt-2 flex w-full justify-between">
          <h4>TOLULOPE D.</h4>
          <h4>Thanks For Visiting</h4>
        </div>
      </div>
    </div>
  );
}