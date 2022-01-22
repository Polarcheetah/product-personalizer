import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm.js';
import ProductImage from '../ProductImage/ProductImage.js';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const sizeElement = sizes.find((size) => size.name === currentSize);

    return basePrice + sizeElement.additionalPrice;
  }, [currentSize, basePrice, sizes]);

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{`${getPrice}$`}</span>
        </header>
        <ProductForm
          title={title}
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          getPrice={getPrice}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
};

export default Product;
