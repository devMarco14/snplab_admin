import React from 'react';
import Terms from './terms/Terms';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <h1>Register</h1>
      <Terms contents="gathering" />
    </>
  );
}
