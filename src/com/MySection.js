import '../css/layout.css';
import '../css/mediaqueries.css';
import '../css/main.css';

import imghtml from '../img/html.png';
import imgcss from '../img/css.png';
import imgjs from '../img/js.png';
import imgreact from '../img/react.png';

// 매개변수는 변경 가능하나 소통을 위해 props로 많이 사용함
function MySection(props) {
  console.log(props.h1);
  let imgName = null;

  if (props.h1 === 'HTML') imgName = imghtml;
  else if (props.h1 === 'CSS') imgName = imgcss;
  else if (props.h1 === 'JS') imgName = imgjs;
  else if (props.h1 === 'React') imgName = imgreact;

  /* props에 따라 object로 구분 */
  const pContent = {
    'HTML': 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용',
    'CSS': 'Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어',
    'JS': '웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원',
    'React': '사용자 인터페이스를 만들기 위한 JavaScript 라이브러리',
  }

  return (
    <section>
      <div>
        <img src={imgName} alt={props.h1} />
      </div>
      <h1 className="content">{props.h1}</h1>
      {/* key값 가져올 때는 [] 사용 */}
      <div><p>{pContent[props.h1]}</p></div>
    </section>
  );
}

export default MySection;
