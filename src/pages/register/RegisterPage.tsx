import { TRANSPORATION } from 'libs/utils/TRANSPORATION';
import React from 'react';

function RegisterPage() {
  return (
    <section className="w-full flex justify-center">
      <article className="max-w-xs px-6 text-blackFont">
        <div className="w-4/5 mt-4">
          <h1 className="text-md font-bold">
            크라우드워커에 지원하기 위해
            <br /> 필요한 정보를 입력해주세요.
          </h1>
        </div>
        <div className="mt-5">
          <div className="font-bold mb-4">이름</div>
          <input type="text" placeholder="홍길동" />
          <div className="w-full mt-2 border-b border-solid border-gray-300" />
        </div>
        <div className="my-5">
          <div className="font-bold mb-4">성별</div>
          <form>
            <input type="radio" id="male" name="gender" value="남자" />
            남자
            <input type="radio" id="male" name="gender" value="여자" />
            여자
          </form>
        </div>
        <div className="my-5">
          <div className="font-bold mb-4">생년월일</div>
          <input type="number" placeholder="YYYY.MM.DD" />
          <div className="w-full mt-2 border-b border-solid border-gray-300" />
        </div>
        <div className="my-5">
          <div className="font-bold mb-4">거주지역</div>
          <input type="text" placeholder="거주지역 선택" />
          <div className="w-full mt-2 border-b border-solid border-gray-300" />
        </div>
        <div className="my-5 mb-4">
          <div className="font-bold mb-4">연락처</div>
          <input type="number" placeholder="'-'없이 입력해주세요" />
          <div className="w-full mt-2 border-b border-solid border-gray-300" />
        </div>
        <div className="my-5">
          <div className="font-bold mb-4">이메일</div>
          <input type="text" placeholder="MYD@snplab.com" />
          <div className="w-full mt-2 border-b border-solid border-gray-300" />
        </div>
        <div>
          <div className="font-bold">주로 이용하는 교통 수단</div>
          <div className="mb-2 text-xs font-bold text-gray-400">
            주로 이용하는 교통수단을 모두 선택해 주세요.
          </div>
          <form className="flex flex-wrap w-11/12 mb-6">
            {TRANSPORATION.map(({ item, id }) => (
              <label className="flex" key={id} htmlFor="transporation">
                <div className="flex h-7 mr-1.5 mt-1 rounded-3xl border border-solid border-gray-300 items-center px-1.5 text-gray-400">
                  {item}
                </div>
                <input className="hidden" type="checkbox" id="transporation" />
              </label>
            ))}
          </form>
        </div>
        <div className="flex-col">
          <input className="mb-4" type="checkbox" />
          이용약관 모두 동의
          <br />
          <div className="w-full mb-4 border-b border-solid border-black" />
          <input className="mb-4" type="checkbox" />
          개인정보 처리방침 고지(필수)
          <br />
          <input className="mb-4" type="checkbox" />
          제3자 정보제공 동의(필수)
        </div>
        <div className="flex justify-center w-full h-8 mb-4 rounded-xl bg-gray-100 text-gray-400 items-center">
          지원하기
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
