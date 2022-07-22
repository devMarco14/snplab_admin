import React from 'react';
import Modal from 'components/modal/Modal';
import Terms from './terms/Terms';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const termsContents = React.useRef<string>('');

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
      <button type="button" id="gathering" onClick={handleClick}>
        개인정보 처리방침
      </button>
      <button type="button" id="thirdparty" onClick={handleClick}>
        제3자 정보제공 동의 안내
      </button>
      <h1>Register</h1>
      {isModalOpen && (
        <Modal onClick={onCloseModal}>
          <Terms contents={termsContents.current} onClose={onCloseModal} />
        </Modal>
      )}
    </>
  );
}
