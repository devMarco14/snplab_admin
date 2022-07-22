import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Modal from 'components/modal/Modal';
import { StringIndexedObjects } from 'types/interfaces';
import Terms from './terms/Terms';
import TermsButton from './terms/TermsButton';
import SelectRegion from './region/SelectRegion';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [areTermsChecked, setTermsChecked] = React.useState<
    StringIndexedObjects<boolean>
  >({
    gathering: false,
    thirdparty: false,
  });
  const allTermsChecked = Object.values(areTermsChecked).filter(
    (status: boolean) => status,
  ).length;

  const termsContents = React.useRef<string>('');

  const handleModal = React.useCallback(onClickHandleTerms, [isModalOpen]);

  function onClickHandleTerms(event: React.MouseEvent) {
    const currentTargetId = event.currentTarget.id;
    setModalOpen(!isModalOpen);
    termsContents.current = currentTargetId;
  }

  const handleCheck = React.useCallback(onClickHandleCheck, [areTermsChecked]);

  function onClickHandleCheck(event: React.MouseEvent) {
    const currentTargetId = event.currentTarget.id;
    setTermsChecked({
      ...areTermsChecked,
      [currentTargetId]: !areTermsChecked[currentTargetId],
    });
  }

  const onCloseModal = React.useCallback(closeModal, [isModalOpen]);

  function closeModal(event: React.MouseEvent) {
    if ((event.target as HTMLElement).id) {
      setModalOpen(!isModalOpen);
    }
  }

  return (
    <>
      <h1>Register</h1>
      <section className="flex-center w-[300px] border-b-[2px] border-solid border-blackFont py-[10px]">
        <button
          type="button"
          className={`flex-center w-[25px] h-[25px] rounded-full ${
            allTermsChecked === 2 ? 'bg-blackFont' : 'bg-white'
          }`}
          onClick={() => {
            setTermsChecked({
              ...areTermsChecked,
              gathering: allTermsChecked <= 1,
              thirdparty: allTermsChecked <= 1,
            });
          }}
        >
          <AiOutlineCheck
            className={`${
              allTermsChecked === 2 ? 'text-white' : 'text-grayFont'
            }`}
          />
        </button>
        <p className="flex-1 ml-[5px]">이용약관 모두 동의</p>
      </section>
      <TermsButton
        id="gathering"
        handleModal={handleModal}
        totalCheck={areTermsChecked}
        handleCheck={handleCheck}
      />
      <TermsButton
        id="thirdparty"
        handleModal={handleModal}
        totalCheck={areTermsChecked}
        handleCheck={handleCheck}
      />
      {isModalOpen && (
        <Modal onClick={onCloseModal}>
          <Terms contents={termsContents.current} onClose={onCloseModal} />
        </Modal>
      )}
      <SelectRegion contents="gathering" />
    </>
  );
}
