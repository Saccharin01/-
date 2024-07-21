import DivComponent from "./DivComponent";
import H1Component from "./H1Componet";
import H6Component from "./H6Component";
import baseData from "./baseData"
import React from "react";


/**
 * todo card 요소가 몇 개가 생길 지 모름
 * todo baseData의 h1 title을 판단기저로 사용하되, 해당 데이터가 잘못 되었을 경우를 대비하는 요소가 필요하다고 판단
 * * Array.from() 메서드를 이용해서 임의의 길이값 만큼의 배열을 만들것
 * * Array.from() 에는 길이값을 정의해주는 객체를 넣어줘야 해당 길이값 만큼의 빈 배열을 돌려주는데, 이 것을 생성될 card의 갯수로 추상화
 * * 삼항연산자를 이용해서 baseData.h1.textNode가 배열이 맞으면 그 배열의 길이값을, 아니라면 숫자 1을 받는 변수를 초기화
 * * falsy 로 판단될 수 있는 값을 제거하기 위해 index값에 +1 씩 연산해서 빈 배열을 매핑
 * ? React에서 렌더링을 위한 반복 메서드의 경우 명시적 혹은 암시적 리턴 값이 존재해야 함
 * ? .map(()=>{})의 경우 요소에 대한 콜백 처리만 해주고 리턴 값이 없음. 리턴을 하려면 return 키워드를 달아서 명시적으로 해줘야 하는데, 사용 해 본 결과 코드의 가독성이 나빠짐
 * ? 때문에 화살표 함수 표현식에서 정의되어 있는 암시적 리턴을 가시성 있게 처리하기 위해 소괄호를 사용하는 축약형 표현을 이용하는것이 유효
 *  * .map((element) => {return element+1}) == .map((element) => (element+1)) == .map((element) => element+1)
 * @returns 
 */



const CardComponent:React.FC = ()=>{
  const length = Array.isArray(baseData.h1.textNode) ? baseData.h1.textNode.length : 1
  const cardCount = Array.from({length : length}, (_,index)=>{return index+1})
  return (
    <DivComponent className={baseData.cardContainer.class}>
      {cardCount.map((_,index) => (
        <DivComponent key={index} className={baseData.card.class}>
          <H1Component
          className={baseData.h1.class}
          textNode={baseData.h1.textNode[index]}
          />
          <H6Component
          className={baseData.h6.class}
          textNode={baseData.h6.textNode[index]}
          />
        </DivComponent>
      ))}
    </DivComponent>
  )
}




const CardElement: React.FC = () => {
  // 카드를 몇 개 생성할지 결정
  const cards = Array.isArray(baseData.h1.textNode) ? baseData.h1.textNode.length : 1;
  const cardCount = Array.from({length : cards}, (_,index)=>{return index+1})
  console.log(cardCount)
  return (
    <DivComponent className={baseData.cardContainer.class}>
      {cardCount.map((_, index) => (
        <DivComponent key={index} className={baseData.card.class}>
          <H1Component
            className={baseData.h1.class}
            textNode={Array.isArray(baseData.h1.textNode) ? baseData.h1.textNode[index % baseData.h1.textNode.length] : baseData.h1.textNode}
          />
          <H6Component
            className={baseData.h6.class}
            textNode={Array.isArray(baseData.h6.textNode) ? baseData.h6.textNode[index % baseData.h6.textNode.length] : baseData.h6.textNode}
          />
        </DivComponent>
      ))}
    </DivComponent>
  );
};






export default CardComponent


