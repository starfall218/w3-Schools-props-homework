import DropDown from './components/dropDown';
import SearchBar from './components/input';
import PurpleLink from './components/right-links';
import SubNav from './components/sub-nav';
import './App.css';

function App() {
  const subnavLinksData = [
    { text: "HTML", href: "#html" },
    { text: "CSS", href: "#css" },
    { text: "JAVASCRIPT", href: "#javascript" },
    { text: "SQL", href: "#sql" },
    { text: "PYTHON", href: "#python" },
    { text: "JAVA", href: "#java" },
    { text: "PHP", href: "#php" },
    { text: "HOW TO", href: "#howto" },
    { text: "W3.CSS", href: "#w3css" },
    { text: "C", href: "#c" },
    { text: "C++", href: "#cpp" },
    { text: "BOOTSTRAP", href: "#bootstrap" },
    { text: "REACT", href: "#react" },
    { text: "MYSQL", href: "#mysql" },
    { text: "JQUERY", href: "#jquery" },
    { text: "EXCEL", href: "#excel" },
    { text: "XML", href: "#xml" },
    { text: "AngularJS", href: "#angularjs" },
    { text: "R", href: "#r" },
    { text: "Vue", href: "#vue" },
    { text: "Django", href: "#django" }
  ];
  return (
    <>
      <nav>
      <div className="topNav">
       <div className="leftnavtop">
         <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" width="40px" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 481.59"><path fill="#04AA6D" fill-rule="nonzero" d="M431.53 101.35s12.9 13.83 30.92 13.83c14.23 0 24.57-8.6 24.57-20.38 0-14.43-13.21-21.09-29.18-21.09h-9.42l-5.63-12.69 24.98-29.59c5.33-6.35 9.83-10.34 9.83-10.34s-3.99.21-12.08.21h-40.64V0h83.23v15.56l-33.38 38.6C493.57 56.82 512 70.23 512 93.88c0 23.24-17.61 44.74-48.02 44.74-28.97 0-45.04-18.22-45.04-18.22l12.59-19.05zM1.13 458.56H17.2c0 4.7 4.1 9.21 11.36 9.21 6.76 0 11.27-3.38 11.27-7.88 0-3.89-2.97-5.63-8.09-6.76l-9.22-2.36c-15.56-4.09-19.55-12.38-19.55-21.19 0-10.75 10.65-20.58 25.7-20.58 12.28 0 26.21 6.25 26 21.61H38.39c0-4.71-4.3-7.68-9.21-7.68-5.33 0-9.01 3.07-9.01 7.37 0 3.58 3.38 5.63 7.37 6.55l11.06 2.97c15.56 3.99 18.32 13.72 18.32 20.07 0 14.02-14.02 21.7-28.05 21.7-13.61 0-27.44-8.29-27.74-23.03zm453.03 0h16.07c0 4.7 4.1 9.21 11.36 9.21 6.76 0 11.27-3.38 11.27-7.88 0-3.89-2.97-5.63-8.09-6.76l-9.22-2.36c-15.56-4.09-19.55-12.38-19.55-21.19 0-10.75 10.65-20.58 25.7-20.58 12.28 0 26.2 6.25 26 21.61h-16.38c0-4.71-4.3-7.68-9.22-7.68-5.32 0-9 3.07-9 7.37 0 3.58 3.38 5.63 7.37 6.55l11.05 2.97c15.57 3.99 18.33 13.72 18.33 20.07 0 14.02-14.02 21.7-28.05 21.7-13.62 0-27.34-8.29-27.64-23.03zm-35.94 21.29V373.17h17.2v106.68h-17.2zm-92.55-34.6c0-21.91 16.99-36.25 36.65-36.25s36.86 14.34 36.86 36.25-17.2 36.34-36.86 36.34c-19.55 0-36.65-14.43-36.65-36.34zm56.21 0c0-11.88-8.91-20.28-19.56-20.28-10.65 0-19.35 8.4-19.35 20.28 0 12.08 8.7 20.37 19.35 20.37 10.75 0 19.56-8.29 19.56-20.37zm-144.36 0c0-21.91 17-36.25 36.65-36.25 19.66 0 36.86 14.34 36.86 36.25s-17.2 36.34-36.86 36.34c-19.65 0-36.65-14.43-36.65-36.34zm56.21 0c0-11.88-8.91-20.28-19.56-20.28-10.65 0-19.35 8.4-19.35 20.28 0 12.08 8.7 20.37 19.35 20.37 10.65 0 19.56-8.29 19.56-20.37zm-74.23-4.2v38.7h-17.2v-37.47c0-11.06-6.65-17-14.33-17-7.88 0-17.61 4.61-17.61 18.02v36.55h-17.2V373.17h17.3v48.02c3.38-8.4 14.54-12.29 21.4-12.29 17.81.1 27.64 12.08 27.64 32.15zm-148.34 4.2c0-21.91 17.6-36.25 37.57-36.25 11.98 0 21.7 5.33 28.05 13.31l-12.08 9.63c-3.58-4.3-9.42-6.97-15.66-6.97-11.98 0-20.58 8.6-20.58 20.28 0 11.56 8.6 20.37 20.58 20.37 6.24 0 12.08-2.66 15.66-6.96l12.08 9.62c-6.35 7.99-16.07 13.31-28.05 13.31-19.97 0-37.57-14.43-37.57-36.34zm198-315.12 109.95 195.75 54.26-96.75-103.81-184.8H208.75l-50.06 89.17-50.06-89.17H0l158.07 281.55.62-1.03.61 1.03 109.86-195.75z"/></svg>
        <DropDown name="Menu" />
        <DropDown name="Tutorials" />
        <DropDown name="Exercises" />
        <DropDown name="Certificates" />
        <DropDown name="Services" />
        <SearchBar />
        <div class="dark-mode-toggle">
         {<svg src='https://github.com/starfall218/w3-Schools-props-homework/blob/main/src/dark-theme.svg'></svg>}
        </div>
       </div>
        
        <div className="righttopnav">
        <div className="nav-links-right">
          <PurpleLink name="Spaces" icon={<i className='fas fa-code'></i>}>
          
          </PurpleLink>
          <PurpleLink name="For Teachers" icon={<i class="fas fa-user-graduate"></i>}>
         
          </PurpleLink>
          <PurpleLink name="Get Certified" icon={ <i class="fas fa-shopping-cart"></i>}>
        
          </PurpleLink>
         
          <button className='sign_in'>
          <img className='acct' width="18" height="18" src="https://img.icons8.com/ios/50/FFFFFF/user--v1.png" alt="user--v1"/>
            <a href="">Sign Up</a>
          </button>
        </div>
        </div>
      </div>
      <SubNav links={subnavLinksData} />
      </nav>
     <main className='main'>
      <h1>Learn to Code</h1>
      <p className='sub-head'>With the world's largest web developer site.</p>
      <div className="inputbox">
        <input type="text" placeholder='Search our tutorials, e.g' />
        <div className="search-icon">
        <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1"/>
        </div>
      </div>
      <h4 class="learn-to-code">
        <a href="where_to_start.asp" class="ga-fp">Not Sure Where To Begin?</a>
      </h4>
     </main>
    </>
  );
}

export default App;