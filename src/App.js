import './App.css';

import Header from './Header/Header.js'
import Work from './Work/Work.js'
import Projects from './Projects/Projects.js'


function App() {
  return (
      <div class="site-wrap">
            <Header/>
			<Work/>
            <Projects/>
      </div>
  );
}

export default App;