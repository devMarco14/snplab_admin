import React from 'react';

/* ############### DEPR: 삭제 예정 ############### */

// import Modal from 'components/modal/Modal';
// import { StringIndexedObjects } from 'types/interfaces';
// import Terms from './components/terms/TermsDetail';
// import SelectRegion from './components/region/SelectRegion';
// // import TermsSection from './components/terms/TermsSection';

// export default function Register() {
//   const [termsContents, setTermsContents] = React.useState('');
//   const [regionValue, setRegionValue] = React.useState('');
//   const [modalStates, setModalStates] = React.useState<
//     StringIndexedObjects<boolean>
//   >({
//     region: false,
//     terms: false,
//   });

//   const setTerms = (value: string) => {
//     setTermsContents(value);
//   };

//   const onOpenModal = React.useCallback(openModal, [modalStates]);

//   function openModal(
//     event: React.MouseEvent | React.FocusEvent,
//     target: string,
//   ) {
//     setModalStates({
//       ...modalStates,
//       [target]: !modalStates[target],
//     });
//   }

//   const onCloseModal = React.useCallback(closeModal, [modalStates]);

//   function closeModal(event: React.MouseEvent, selectedRegion?: string) {
//     if ((event.target as HTMLElement).id) {
//       const modalKeys = Object.keys(modalStates);
//       const modalOpenValues = Object.values(modalStates);
//       const currentOpenedModals = modalOpenValues
//         .map((state: boolean, index: number) => {
//           let result = '';
//           if (state) {
//             result = modalKeys[index];
//           }
//           return result;
//         })
//         .filter((result: string) => result !== '');
//       currentOpenedModals.forEach((openedModal: string) => {
//         setModalStates({
//           ...modalStates,
//           [openedModal]: !modalStates[openedModal],
//         });
//       });
//       if (selectedRegion) {
//         setRegionValue(selectedRegion);
//       }
//     }
//   }

//   return (
//     <>
//       <section className="flex-center flex-col w-[300px] border-b-[2px] border-solid border-lightgrayFont py-[10px]">
//         <p className="w-full mb-7 font-bold">거주지역</p>
//         <div className="w-full px-2 flex">
//           <input
//             type="text"
//             placeholder="거주지역 선택"
//             className="w-full"
//             id="region-input"
//             defaultValue={regionValue}
//             onFocus={(event: React.FocusEvent) => openModal(event, 'region')}
//             readOnly
//           />
//           <button
//             type="button"
//             className={`flex-center w-[20px] h-[20px] text-lg ${
//               regionValue ? 'flex' : 'hidden'
//             }`}
//             onClick={() => {
//               setRegionValue('');
//             }}
//           >
//             ×
//           </button>
//         </div>
//       </section>
//       {/* <TermsSection
//         openModal={onOpenModal}
//         closeModal={onCloseModal}
//         modalStates={modalStates}
//         setTerms={setTerms}
//       /> */}
//       {modalStates.terms && (
//         <Modal onClick={onCloseModal}>
//           <Terms contents={termsContents} closeModal={onCloseModal} />
//         </Modal>
//       )}
//       {modalStates.region && (
//         <Modal>
//           <SelectRegion contents="gathering" closeModal={onCloseModal} />
//         </Modal>
//       )}
//     </>
//   );
// }
