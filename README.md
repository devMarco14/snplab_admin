# [Wanted Pre Onboarding FE 5th] 팀 과제 #  3-2, 4-1

- 주제: snplap_admin

- 프로젝트 기간: 2022.07.21 ~ 2022.07.27

<br />

## **1. 팀원 소개 · 맡은 부분**

### # <a href="https://github.com/chaengs">심채영</a>

```
- 지원 현황 검색 기능
- 검색어 필터링
```

### # <a href="https://github.com/leejiho9898">이지호</a>

```
 

```

### # <a href="https://github.com/godcl1623">이치행<a>

```

```

### # <a href="https://github.com/devMarco14">임종혁</a>

```
- 인풋 공통컴포넌트
- 인풋 입력 값 유효성 
- 폼 훅 사용하여 포스트 요청
```

### # <a href="https://github.com/HyeonJu-C">천현주</a>

```
- 랜딩페이지 마크업, 스타일링
- 관리자 로그인 기능 및 관리자 전용 페이지 보호
```

<br />

## **2. 기술 스택**

`react` `type-script` `tailwindcss` `react query` `axios` `json server` `context-API`

<br />

## **3. 프로젝트 소개**

![snplap](https://user-images.githubusercontent.com/99126860/181161011-5085632d-449f-43a2-8717-14c2d99acec2.png)

<br />

## **4. 프로젝트 구조**

```
📦public
 ┣ 📂data
 ┃ ┗ 📜admin.json
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜logo192.png
 ┣ 📜logo512.png
 ┣ 📜manifest.json
 ┗ 📜robots.txt
 📦src
 ┣ 📂components
 ┃ ┗ 📂modal
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜PortalWrapper.tsx
 ┣ 📂context
 ┃ ┗ 📜AdminAuth.tsx
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┣ 📜useInput.ts
 ┃ ┗ 📜useToggle.ts
 ┣ 📂libs
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜admin.ts
 ┃ ┃ ┣ 📜httpRequest.ts
 ┃ ┃ ┗ 📜register.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜members.d.ts
 ┃ ┃ ┗ 📜round.d.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜addComma.ts
 ┃ ┃ ┗ 📜constants.ts
 ┣ 📂pages
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜TabBox.tsx
 ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┣ 📜useAdminLoad.ts
 ┃ ┃ ┃ ┗ 📜useRoundHandler.ts
 ┃ ┃ ┗ 📜Admin.tsx
 ┃ ┣ 📂landing
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AdminLoginForm.tsx
 ┃ ┃ ┃ ┗ 📜Logo.tsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useAdminData.ts
 ┃ ┃ ┗ 📜Landing.tsx
 ┃ ┣ 📂register
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┗ 📜termsText.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┗ 📜TextInput.tsx
 ┃ ┃ ┃ ┣ 📂region
 ┃ ┃ ┃ ┃ ┣ 📜RegionList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜SelectRegion.tsx
 ┃ ┃ ┃ ┣ 📂terms
 ┃ ┃ ┃ ┃ ┣ 📜Terms.tsx
 ┃ ┃ ┃ ┃ ┣ 📜TermsBody.tsx
 ┃ ┃ ┃ ┃ ┣ 📜TermsButton.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TermsSection.tsx
 ┃ ┃ ┃ ┣ 📜Gender.tsx
 ┃ ┃ ┃ ┣ 📜Terms.tsx
 ┃ ┃ ┃ ┗ 📜Transportation.tsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useAnimate.ts
 ┃ ┃ ┃ ┣ 📜useInput.ts
 ┃ ┃ ┃ ┣ 📜useRegionLists.ts
 ┃ ┃ ┃ ┣ 📜useRegisterForm.tsx
 ┃ ┃ ┃ ┗ 📜useSubRegionLists.ts
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜Validator.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜Register.tsx
 ┃ ┃ ┗ 📜RegisterPage.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂routes
 ┃ ┣ 📜Path.ts
 ┃ ┗ 📜Routing.tsx
 ┣ 📂types
 ┃ ┗ 📜interfaces.d.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┗ 📜react-app-env.d.ts
```

<br />

## **5. 컨벤션**

### # 협업을 위한 git 커밋 컨벤션 설정

| 커밋명   | 내용                                                   |
| -------- | ------------------------------------------------------ |
| feat     | 새로운 기능을 추가                                     |
| fix      | 버그 수정                                              |
| design   | CSS 등 사용자 UI 디자인 변경                           |
| docs     | 문서 생성, 추가, 수정(README.md)                       |
| refactor | 코드 리팩토링                                          |
| chore    | 간단한 코드 변경, 로직에 큰 영향을 주지 않는 작은 변경 |
| test     | 테스트 코드 추가 및 리팩토링                           |
| rename   | 파일 혹은 폴더명을 수정, 이동                          |
| !HOTFIX  | 치명적인 버그의 긴급한 수정                            |

<br />

## **6. 발생 에러**

### # 

```
 ```   

<br />

## **7. 프로젝트 설치 · 실행 방법**

### # 프로젝트 클론

```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/snplap_admin
```

### # 패키지 설치

```
$ npm install
```

### # develop 서버 실행

```
$ npm start
```

### # branch에서 작업

```
$ git checkout -b feature/page
```
