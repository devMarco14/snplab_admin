import React from 'react';
import Modal from 'components/modal/Modal';
import Terms from './components/terms/Terms';
import SelectRegion from './components/region/SelectRegion';
import TermsSection from './components/terms/TermsSection';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [termsContents, setTermsContents] = React.useState('');

  const setTerms = (value: string) => {
    setTermsContents(value);
  };

  const onHandleModal = React.useCallback(handleModal, [isModalOpen]);

  function handleModal(event: React.MouseEvent) {
    if ((event.target as HTMLElement).id) {
      setModalOpen(!isModalOpen);
    }
  }

  return (
    <>
      <h1>Register</h1>
      <section className="flex-center flex-col w-[300px] border-b-[2px] border-solid border-lightgrayFont py-[10px]">
        <p className="w-full mb-7 font-bold">거주지역</p>
        <input
          type="text"
          placeholder="거주지역 선택"
          className="w-full"
          onFocus={() => setModalOpen(!isModalOpen)}
        />
      </section>
      <TermsSection setModal={onHandleModal} setTerms={setTerms} />
      {isModalOpen && (
        <Modal onClick={onHandleModal}>
          <Terms contents={termsContents} handleModal={onHandleModal} />
        </Modal>
      )}
      {/* {isModalOpen && (
        <Modal onClick={onHandleModal}>
          <SelectRegion contents="gathering" />
        </Modal>
      )} */}
    </>
  );
}
