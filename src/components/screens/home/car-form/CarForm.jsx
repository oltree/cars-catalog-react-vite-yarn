import { useState } from 'react';

import styles from './CarForm.module.scss';

const initialData = { name: '', price: '', image: '' };

const CarForm = ({ setCars }) => {
  const [data, setData] = useState(initialData);

  const handleClick = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(initialData);
  };

  return (
    <form
      onSubmit={(e) => handleClick(e)}
      className={styles.form}
    >
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        placeholder="Name"
      />
      <input
        type="text"
        value={data.price}
        onChange={(e) =>
          setData((prev) => ({ ...prev, price: e.target.value }))
        }
        placeholder="Price"
      />
      <input
        type="text"
        value={data.image}
        onChange={(e) =>
          setData((prev) => ({ ...prev, image: e.target.value }))
        }
        placeholder="Image"
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default CarForm;
