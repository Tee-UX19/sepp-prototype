// ItemCard.jsx
import PropTypes from 'prop-types';
import "/src/components/ItemCard.css";
import handleAddToCart from "/src/utils/handleAddToCart.js";

const ItemCard = ({
    setCurrentPage,
    item,
    setCurrentItem,
    handleAddItemCounter,
    orderInfo,
}) => {
    const handleNavigateToProduct = () => {
        setCurrentItem(item);
        setCurrentPage("ProductPage");
    };

    return (
        <div className="card">
            <div onClick={handleNavigateToProduct} style={{ cursor: "pointer" }}>
                <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    loading="lazy"
                />
            </div>
            <div className="card-body">
                <div onClick={handleNavigateToProduct} style={{ cursor: "pointer" }}>
                    <h5 className="card-title">{item.name}</h5>
                </div>
                <div className="card-details">
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            handleAddToCart(
                                item,
                                orderInfo,
                                handleAddItemCounter
                            )
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    setCurrentItem: PropTypes.func.isRequired,
    handleAddItemCounter: PropTypes.func.isRequired,
    orderInfo: PropTypes.object.isRequired,
};

export default ItemCard;
