import { postApplicantAPI } from 'libs/api/register';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Member } from 'types/interfaces';

export default function useRegisterForm() {
  const navigate = useNavigate();
  const [form, setForms] = useState<Member>({
    id: Math.floor(Math.random() * 1000),
    name: '',
    round: '1차',
    gender: '',
    birthday: '',
    address: '',
    cellular: '',
    email: '',
    transportation: [],
    win: false,
  });

  const onChangeForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setForms({ ...form, [name]: value });
    },
    [form],
  );

  const onChangeTransportationForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      form.transportation.includes(value)
        ? setForms({
            ...form,
            transportation: form.transportation.filter(
              (prev) => prev !== value,
            ),
          })
        : setForms({
            ...form,
            transportation: [...form.transportation, value],
          });
    },
    [form],
  );

  const onMobileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setForms({
        ...form,
        cellular: value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    },
    [form],
  );

  const onSubmitMember = async () => {
    try {
      await postApplicantAPI(form);
      navigate('/');
    } catch (error) {
      throw new Error();
    }
  };
  return {
    form,
    onChangeForm,
    onChangeTransportationForm,
    onMobileChange,
    onSubmitMember,
  };
}
