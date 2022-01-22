import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import PropTypes from 'prop-types';

const ProductForm = ({
  title,
  sizes,
  colors,
  currentColor,
  setCurrentColor,
  currentSize,
  setCurrentSize,
  getPrice,
}) => {
  const showSummary = (e) => {
    e.preventDefault();

    console.log(`
    Summary
    ==========
    Name: ${title}
    Price: ${getPrice()}
    Size: ${currentSize}
    Color: ${currentColor}`);
  };

  return (
    <form>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button} action={showSummary}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default ProductForm;
