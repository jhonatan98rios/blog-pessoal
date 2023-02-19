import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

type IOption = {
  value: string
  text: string
}

interface ISelect {
  label: string
  options: IOption[]
  callback: Dispatch<SetStateAction<string>>
  value: string
}

export function Select({ label, options, callback, value }: ISelect) {

  return (
    <label className={styles.label} htmlFor={label}>
      { label }:
      <select
        className={styles.select}
        name={label}
        value={value}
        onChange={({ target: { value } }) => callback(value)}
      >
        {options.map(({ value, text }, index) => (
          <option value={value} key={index}>
            {text}
          </option>
        ))}
      </select>
    </label>
  )
}

