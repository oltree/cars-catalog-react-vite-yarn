import { useCallback, useState, memo } from 'react';

import styles from './CarForm.module.scss';

const initialData = { name: '', price: '', image: '' };

const CarForm = ({ setCars }) => {
  const [data, setData] = useState(initialData);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
      setData(initialData);
    },
    [data, setCars, initialData]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    [setData]
  );

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styles.form}
    >
      <input
        type="text"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        value={data.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="text"
        value={data.image}
        onChange={handleChange}
        placeholder="Image"
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default memo(CarForm);
