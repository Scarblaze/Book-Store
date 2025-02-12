import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
  const dispatch= useDispatch();

  const handleAddToCart= (product)=>{
    dispatch(addToCart(product))
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full">
      <Link to={`/books/${book._id}`}>
        <img
          src={`${getImgUrl(book?.coverImage)}`}
          alt={book?.title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      </Link>
      <div className="flex flex-col flex-grow">
        <Link to={`/books/${book._id}`}>
          <h3 className="text-base font-medium hover:text-blue-600 mb-2">
            {book?.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3">
          {book?.description.length > 50
            ? `${book.description.slice(0, 50)}...`
            : book?.description}
        </p>
        <p className="text-sm font-medium text-gray-800 mb-4">
          ₹{book?.newPrice}{' '}
          <span className="line-through text-gray-500 font-normal">
            ₹{book?.oldPrice}
          </span>
        </p>
      </div>
      <button 
      onClick={()=> handleAddToCart(book)}
      className="btn-primary px-4 py-2 text-sm flex items-center justify-center gap-1 w-full">
        <FiShoppingCart />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default BookCard;
