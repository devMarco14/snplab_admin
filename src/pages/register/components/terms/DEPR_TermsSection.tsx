import React from 'react';

/* ############### DEPR: 삭제 예정 ############### */

// import { AiOutlineCheck } from 'react-icons/ai';
// import { StringIndexedObjects } from 'types/interfaces';
// import TermsButton from './TermsButton';

// interface TermsSectionProps {
//   openModal: (
//     event: React.MouseEvent | React.FocusEvent,
//     target: string,
//   ) => void;
//   closeModal: (event: React.MouseEvent) => void;
//   modalStates: StringIndexedObjects<boolean>;
//   setTerms: (value: string) => void;
// }

// export default function TermsSection({
//   openModal,
//   closeModal,
//   modalStates,
//   setTerms,
// }: TermsSectionProps) {
//   const [areTermsChecked, setTermsChecked] = React.useState<
//     StringIndexedObjects<boolean>
//   >({
//     gathering: false,
//     thirdparty: false,
//   });

//   const allTermsChecked = Object.values(areTermsChecked).filter(
//     (status: boolean) => status,
//   ).length;

//   const handleModal = React.useCallback(onClickHandleTerms, [
//     closeModal,
//     openModal,
//     setTerms,
//     modalStates.terms,
//   ]);

//   function onClickHandleTerms(event: React.MouseEvent) {
//     const currentTargetId = event.currentTarget.id.split('-')[0];
//     if (modalStates.terms) {
//       closeModal(event);
//     } else {
//       openModal(event, 'terms');
//     }
//     setTerms(currentTargetId);
//   }

//   const handleCheck = React.useCallback(onClickHandleCheck, [areTermsChecked]);

//   function onClickHandleCheck(event: React.MouseEvent) {
//     const currentTargetId = event.currentTarget.id.split('-')[0];
//     setTermsChecked({
//       ...areTermsChecked,
//       [currentTargetId]: !areTermsChecked[currentTargetId],
//     });
//   }

//   return (
//     <section>
//       <section className="flex-center w-[300px] border-b-[2px] border-solid border-blackFont py-[10px]">
//         <button
//           type="button"
//           className={`flex-center w-[25px] h-[25px] rounded-full ${
//             allTermsChecked === 2 ? 'bg-blackFont' : 'bg-white'
//           }`}
//           onClick={() => {
//             setTermsChecked({
//               ...areTermsChecked,
//               gathering: allTermsChecked <= 1,
//               thirdparty: allTermsChecked <= 1,
//             });
//           }}
//         >
//           <AiOutlineCheck
//             className={`${
//               allTermsChecked === 2 ? 'text-white' : 'text-grayFont'
//             }`}
//           />
//         </button>
//         <p className="flex-1 ml-[5px]">이용약관 모두 동의</p>
//       </section>
//       <TermsButton
//         id="gathering"
//         handleModal={handleModal}
//         totalCheck={areTermsChecked}
//         handleCheck={handleCheck}
//       />
//       <TermsButton
//         id="thirdparty"
//         handleModal={handleModal}
//         totalCheck={areTermsChecked}
//         handleCheck={handleCheck}
//       />
//     </section>
//   );
// }
