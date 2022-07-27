import { postApplicantAPI } from 'libs/api/register';
import React from 'react';
import { Member } from 'types/interfaces';

export default function useRegisterForm() {
  const [form, setForms] = React.useState<Member>({
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
  // `${time.year}/${time.month}/${time.date}`; 오늘날짜 추가
  const onChangeForm = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setForms({ ...form, [name]: value });
    },
    [form],
  );

  const onChangeTransportationForm = React.useCallback(
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

  const onMobileChange = React.useCallback(
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
