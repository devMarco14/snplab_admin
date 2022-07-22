import React from 'react';
import Modal from 'components/modal/Modal';
import Terms from './components/terms/Terms';
import SelectRegion from './components/region/SelectRegion';
import TermsSection from './components/terms/TermsSection';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [termsContents, setTermsContents] = React.useState('');

  const setModal = () => {
    setModalOpen(!isModalOpen);
  };

  const setTerms = (value: string) => {
    setTermsContents(value);
  };

  const onCloseModal = React.useCallback(closeModal, [isModalOpen]);

  function closeModal(event: React.MouseEvent) {
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
      <TermsSection setModal={setModal} setTerms={setTerms} />
      {isModalOpen && (
        <Modal onClick={onCloseModal}>
          <Terms contents={termsContents} onClose={onCloseModal} />
        </Modal>
      )}
      {isModalOpen && (
        <Modal onClick={onCloseModal}>
          <SelectRegion contents="gathering" />
        </Modal>
      )}
    </>
  );
}
