import '../css/layout.css';
import '../css/mediaqueries.css';
import '../css/main.css';

import imghtml from '../img/html.png';
import imgcss from '../img/css.png';
import imgjs from '../img/js.png';
import imgreact from '../img/react.png';

import MySection from './MySection'

function MyMain() {
  return (
    <main>
      <MySection
        h1="HTML"
      />
      <MySection
        h1="CSS"
      />
      <MySection
        h1="JS"
      />
      <MySection
        h1="React"
      />
    </main>
  );
}

export default MyMain;
