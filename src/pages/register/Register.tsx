import React from 'react';
import Modal from 'components/modal/Modal';
import Terms from './terms/Terms';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const termsContents = React.useRef<string>('');

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setModalOpen(!isModalOpen);
          termsContents.current = 'gathering';
        }}
      >
        개인정보 처리방침
      </button>
      <button
        type="button"
        onClick={() => {
          setModalOpen(!isModalOpen);
          termsContents.current = 'thirdparty';
        }}
      >
        제3자 정보제공 동의 안내
      </button>
      <h1>Register</h1>
      {isModalOpen && (
        <Modal
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            if ((event.target as HTMLDivElement).id === 'modal-bg') {
              setModalOpen(!isModalOpen);
            }
          }}
        >
          <Terms contents={termsContents.current} />
        </Modal>
      )}
    </>
  );
}
