import React from 'react';
import Gender from './components/Gender';
import Terms from './components/Terms';
import TextInput from './components/common/TextInput';
import Transporation from './components/Transporation';

function RegisterPage() {
  return (
    <section className="w-full flex justify-center">
      <article className="max-w-xs px-4 text-blackFont">
        <div className="w-4/5 mt-4">
          <h1 className="text-md font-bold">
            크라우드워커에 지원하기 위해
            <br /> 필요한 정보를 입력해주세요.
          </h1>
        </div>
        <TextInput
          type="text"
          placeHolder="홍길동"
          value={undefined}
          text="이름"
        />
        <Gender />
        <TextInput
          type="number"
          placeHolder="YYYY.MM.DD"
          value={undefined}
          text="생년월일"
        />
        <TextInput
          type="text"
          placeHolder="거주지역 선택"
          value={undefined}
          text="거주지역"
        />
        <TextInput
          type="number"
          placeHolder="'-'없이 입력해주세요"
          value={undefined}
          text="연락처"
        />
        <TextInput
          type="text"
          placeHolder="MYD@snplab.com"
          value={undefined}
          text="이메일"
        />
        <Transporation />
        <Terms />
        <div
          className="flex justify-center w-full h-9 mb-4 rounded-xl 
        bg-gray-100 text-gray-400 items-center"
        >
          지원하기
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
