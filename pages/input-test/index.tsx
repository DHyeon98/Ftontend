import React from 'react';
<<<<<<< HEAD
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '@/components/common/Input';

function App() {
  const methods = useForm();

  const onSubmit = (data) => {
=======
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import FormInput from '@/components/common/Input';
import FormLabel from '@/components/common/Label';
import styles from './index.module.scss';

interface FormData {
  name: string;
  nickname: string;
}

function App() {
  const methods = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
>>>>>>> 552cbd85c3362e512539e96835c45da073a0423c
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
<<<<<<< HEAD
        <FormInput name="name" label="가족의 이름을 알려주세요!" />
        <FormInput name="nickname" label="가족 내 본인의 이름을 입력해주세요." />
=======
        <div className={styles.form}>
          <FormLabel htmlFor="name">가족의 이름을 알려주세요!</FormLabel>
          <FormInput name="name" />
        </div>
        <div>
          <FormLabel htmlFor="nickname">가족 내 본인의 이름을 입력해주세요.</FormLabel>
          <FormInput name="nickname" />
        </div>
>>>>>>> 552cbd85c3362e512539e96835c45da073a0423c
      </form>
    </FormProvider>
  );
}

export default App;
