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
 * * falsy 로 판단될 수 있는 부분을 제거하기 위해 index값에 +1 씩 연산해서 빈 배열을 매핑
 * @returns 
 */



const CardComponent:React.FC = ()=>{
  const length = Array.isArray(baseData.card.textNode) ? baseData.card.textNode.length : 1
  const cardCount = Array.from({length : length}, (_,index)=>{return index+1})
  return (

    <DivComponent className={baseData.cardContainer.class}>
        {cardCount.map(()=>{})}
        <DivComponent className={baseData.card.class}>

        </DivComponent>
      </DivComponent>
  )
}
const CardElement: React.FC = () => {
  // 카드를 몇 개 생성할지 결정
  const cards = Array.isArray(baseData.card.textNode) ? baseData.card.textNode.length : 1;

  return (
    <DivComponent className={baseData.cardContainer.class}>
      {Array.from({ length: cards }).map((_, index) => (
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


