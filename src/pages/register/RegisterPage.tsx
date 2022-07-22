import { TRANSPORATION } from 'libs/utils/TRANSPORATION';
import React from 'react';

function RegisterPage() {
  return (
    <section className="w-screen flex justify-center ">
      <article className="w-full mx-4 border border-solid border-black">
        <div className="w-3/5">
          <h1 className="text-md font-bold">
            크라우드워커에 지원하기 위해 필요한 정보를 입력해주세요.
          </h1>
        </div>
        <div>
          <div>이름</div>
          <input type="text" placeholder="홍길동" />
        </div>
        <div>
          <div>성별</div>
          <form>
            <input type="radio" id="male" name="gender" value="남자" />
            남자
            <input type="radio" id="male" name="gender" value="여자" />
            여자
          </form>
        </div>
        <div>
          <div>생년월일</div>
          <input type="number" placeholder="YYYYMMDD" />
        </div>
        <div>
          <div>거주지역</div>
          <input type="text" placeholder="거주지역 선택" />
        </div>
        <div>
          <div>연락처</div>
          <input type="number" placeholder="'-'없이 입력해주세요" />
        </div>
        <div>
          <div>이메일</div>
          <input type="text" placeholder="MYD@snplab.com" />
        </div>
        <div>
          <div>주로 이용하는 교통 수단</div>
          <form className="flex flex-wrap w-5/6">
            {TRANSPORATION.map(({ item, id }) => (
              <label className="flex" key={id} htmlFor="transporation">
                <div className="flex h-7 mr-1 mt-1 rounded-3xl border border-solid border-black items-center px-1.5">
                  {item}
                </div>
                <input className="hidden" type="checkbox" id="transporation" />
              </label>
            ))}
          </form>
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
