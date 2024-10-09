import React, { useState } from 'react';
import RNDatePicker from 'react-native-date-picker';

import CustomInput from '../CustomInput';

import dayjs from '@/utils/dayjs';

type DatePickerProps = {
  date?: Date;
  onChange: (date: Date) => void;
};

export default function DatePicker({ date, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CustomInput
        onPress={() => setOpen(true)}
        editable={false}
        value={date ? dayjs(date).format('YYYY-MM-DD') : undefined}
        className="flex-1"
        placeholder="YYMMDD"
      />
      <RNDatePicker
        modal
        open={open}
        mode="date"
        date={date ?? dayjs().subtract(10, 'year').toDate()}
        maximumDate={new Date()}
        onConfirm={(confirmDate: Date) => {
          setOpen(false);
          onChange(confirmDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
