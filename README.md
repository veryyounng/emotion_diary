# 감정 일기장 😊😀😐☹️😖
리액트를 이용하여 간단한 일기장을 만들었습니다. <br>
localStorage를 이용하여 CRUD를 구현하였고 새로고침을 하여도 데이터가 삭제되지 않습니다. <br>

## 주제 선정 이유 💡
하루하루 있었던 일을 그날의 감정과 함께 추억하고자 기록하고 싶어서 만들었습니다. <br>

## Tech Stack 📚
## <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Css-1572B6?style=flat&logo=Css3&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>

## 주요기능
- 일기 날짜, 감정, 본문을 작성한다.
- 일기를 최신순, 오래된순, 좋은 감정만, 안좋은 감정만, 감정 전부다 조회 가능하다.
- 일기를 수정 가능하다.
- 일기를 삭제 가능하다.

## 사용설명
1. 홈 화면에서 새 일기 쓰기 버튼을 클릭한다.
   <br><img src="https://github.com/veryyounng/react_project/assets/121228672/54c6db11-6840-435c-9c12-e1d49be3105d"/>
<br><br>
2. 날짜를 선택하고 오늘의 감정을 선택하고 일기를 작성한다.
   <br><img src= "https://github.com/veryyounng/emotion_diary/assets/121228672/cd347c69-ba36-4257-8e73-5de984288d04"/>
   <br><br>
3. 작성을 완료하면 작성완료 버튼을 누르면 일기리스트로 이동된다.
   <br><img src= "https://github.com/veryyounng/react_project/assets/121228672/a59542de-f371-4c21-ad20-2a3f6f8147db"/>
   <br><br>
4. 내가 쓴 일기를 클릭하여 디테일을 확인할 수 있다.
   <br><img src="https://github.com/veryyounng/react_project/assets/121228672/7b808593-0b09-4341-9e9d-fd6957b7f9cd"/>
   <br><br>
5. 수정하거나 삭제하고 싶은 일기가 있다면 수정하기를 누른다.
   <br><img src="https://github.com/veryyounng/react_project/assets/121228672/baa93493-fc39-46a9-a67a-0891c27f2d16"/>
   <br><br>
6. 일기 리스트에서 시간순으로 조회가 가능하고 좋은 감정, 안좋은 감정, 감정 전부다로 조회가 가능하다.
   <br><img src= "https://github.com/veryyounng/react_project/assets/121228672/683793d9-83c9-48e7-9628-95118a50768a"/>
   ▶️ (감정 전부다 예시)<br><br>
   <br><img src="https://github.com/veryyounng/react_project/assets/121228672/d6c907a9-6be0-4b88-aaa2-a4a0684133a6"/>
   ▶️ (좋은 감정만 예시)<br><br>
   <br><img src="https://github.com/veryyounng/react_project/assets/121228672/d4a35844-ba9e-4584-b939-9b19db656636"/>
   ▶️ (안좋은 감정만 예시)<br><br>



## 페이지 라우팅
라우팅 = 어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정<br>
라우터 = 데이터의 경로를 실시간으로 지정해주는 역할을 함 <br>
페이지 라우팅 = 요청에 명시되어있는 경로에 따라 알맞은 페이지를 선택하고 그 페이지를 반환하고 사용자가 그 페이지에 접속하는 것<br>

```javascript
<Route path="/" element={<Home />}></Route>
              <Route path="/new" element={<New />}></Route>
              <Route path="/edit/:id" element={<Edit />}></Route>
              <Route path="/diary/:id" element={<Diary />}></Route>
```
리액터 라우터에서의 페이지를 이동하고 import 한다. 리액트는 페이지 전환시 깜빡임 없고 이동속도가 매우 빨라서 쾌적하게 페이지를 이동한다. <br>

- react-router-dom 사용
1. pathVarible<br>
  ```javascript
<Route path="/diary/:id" element={<Diary />}></Route> //:id를 사용하여 뒤에 있는 값을 전달함
```
뒤에 id를 받지않을 경우 처리방법:
```javascript
const { id } = useParams();
import { useNavigate, useParams } from "react-router-dom";
```
2. QueryString<br>
웹 페이지에 데이터를 전달하는 가장 간단한 방법:
```javascript
edit?id=10&mode=dark //별도의 처리를 하지않고 페이지 라우팅에 영향을 주지 않음
```
3. pageMoving<br>
navigate 기능은 링크태그를 클릭하지 않았을때도 의도적으로 페이지를 바꿀 수 있음
```javascript
<MyButton text={`< 뒤로가기`} onClick={() => navigate(-1)} />
```
## 기초공사
### 공통 컴포넌트 세팅
- Button: 버튼을 컴포넌트화시켜서 각각의 페이지에 사용하였다.
<br><img src="https://github.com/veryyounng/react_project/assets/121228672/a1919b3e-7c54-4f70-b9e8-4714e9126618"/>
<br><br>
```javascript
MyButton type props
const MyButton =({text, type, onClick})=>{
    const btnType = ['positive', 'negative'].includes(type)? type: 'default';
//배열안에 type이 있으면 type 그대로를 반환하고 없으면 default반환

    return (
            <button className={["MyButton", `MyButton_${type}`].join(" ")} onClick={onClick}>
//className에 배열을 쓰면 안됨, join메소드를 통해서 type을 합쳐줌
                {text}

            </button>
        );
};
MyButton.defaultProps = {
    type: "default",
};

<MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
```
- Header: 헤더영역을 컴포넌트화시켜서 레이아웃에 모두 적용하였다.
<br><img src="https://github.com/veryyounng/react_project/assets/121228672/074060d0-58d4-447b-85ce-c7350c568eae"/>
<br><br>
헤더 사용예시)
```javascript
<MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text={`< 뒤로가기`} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
```
### 컴포넌트 트리리
<br><img src="https://github.com/veryyounng/react_project/assets/121228672/a0131cd3-6292-49bb-bb5d-af8baf5354da"/>
```javascript
<DiaryStateContext.Provider value={data}>
```
컴포넌트 트리 전체를 provider로 감싸주고 value를 data로 공급하여 일기 데이터를 관리할 수 있다<br>
```javascript
 <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
```
DiaryDispatchContext로 감싸서 value 전달한다. <br>

## Home 🏠
- 처음 진입 화면으로 상단에 날짜를 변경할 수 있는 버튼 컴포넌트와 작성된 일기 리스트를 조회할 수 있다.<br>
```javascript
useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  useEffect(() => {}, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };
```

## 일기 조회하기
- 작성한 일기들을 조회한다. 감정을 3가지로 분류해주는 필터와 날짜를 최신순과 오래된 순으로 정렬할 수 있는 필터를 만들었다.<br>
```javascript
const sortOptionList = [
  { value: 'latest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const filterOptionList = [
  { value: 'all', name: '전부 다' },
  { value: 'good', name: '좋은 감정만' },
  { value: 'bad', name: '안 좋은 감정만' },
];
```
```javascript
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};
```javascript
const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
```
## 일기 상세페이지
```javascript
const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        //일기가 존재할때
        setData(targetDiary);
      } else {
        //일기가 없을때
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다..</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
```

## 일기 수정하기 
```javascript
const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까 ?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    navigate("/", { replace: true });
  };
```

## 최적화시키기
1. Home에서 월 변경시 하단 ControlMenu가 리랜더링됨<br>
- 부모 컴포넌트(Home)가 리랜더링되면서 자식요소도 리랜더링되는 것<br>
▶️ ControlMenu컴포넌트를 React.Memo로 사용하여 해결함<br>
```javascript
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});
```

2. 일기 리스트 필터 변경시 리랜더링 발생
- 부모컴포넌트(DiaryList)의 필터 변경시 state 변경, 업데이트되면서 자식 컴포넌트(DiaryItem) 리랜더링되는 것 <br>
▶️ React.Memo를 사용하였지만 리랜더링 아직도 발생함, 전달받은 요소중에 함수가 있기 때문 (onClick)<br>
▶️ onClick함수를 콜백함수로 전달하여 해결하였다.<br>
```javascript
const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);
```
  
