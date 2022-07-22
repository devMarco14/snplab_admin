import React from 'react';
import Modal from 'components/modal/Modal';
import Terms from './terms/Terms';
import TermsButton from './terms/TermsButton';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const termsContents = React.useRef<string>('');

  const handleModal = React.useCallback(handleClick, [isModalOpen]);

  function handleClick(event: React.MouseEvent) {
    setModalOpen(!isModalOpen);
    termsContents.current = event.currentTarget.id;
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
      <TermsButton id="gathering" handleModal={handleModal} />
      <TermsButton id="thirdparty" handleModal={handleModal} />
      {isModalOpen && (
        <Modal onClick={onCloseModal}>
          <Terms contents={termsContents.current} onClose={onCloseModal} />
        </Modal>
      )}
    </>
  );
}
