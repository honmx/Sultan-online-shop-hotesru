import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/slices/apiSlice";
import Button from "../../components/UI/Button/Button";
import bottle from "../../assets/bottle.svg";
import box from "../../assets/box.svg";
import share from "../../assets/share.svg";
import whiteCart from "../../assets/whiteCart.svg";
import whiteCheck from "../../assets/check-white.svg";
import darkDownload from "../../assets/darkDownload.svg";
import s from "./ProductPage.module.scss";
import IconButton from "../../components/UI/IconButton/IconButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addProduct } from "../../store/slices/cartSlice";
import { IProduct } from "../../types/IProducts";
import { useCartProduct } from "../../hooks/useCartProduct";
import { setCartItemsToLocalStorage } from "../../helpers/setCartItemsToLocalStorage";

interface Props {

}

const ProductPage: FC<Props> = ({ }) => {

  const dispatch = useAppDispatch();

  const params = useParams();
  const { data: product, isLoading, isSuccess } = useGetProductQuery(Number(params.id));

  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(false);
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  
  const [count, setCount] = useState<number>(1);

  const cartProducts = useAppSelector(state => state.cart.cartItems);

  const { inCart } = useCartProduct(product);

  const handleMinusClick = () => {
    if (count > 1) setCount(prev => prev - 1);
  }

  const handlePlusClick = () => {
    setCount(prev => prev + 1);
  }

  const addToCart = () => {
    if (!product || inCart) return;

    const newProduct = { product, quantity: product.stock ? count : 0 };
    dispatch(addProduct(newProduct));
    setCartItemsToLocalStorage([...cartProducts, newProduct]);
  }

  console.log(inCart);

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <p>An error occured</p>;

  return (
    <div className={s.container}>
      <div className={s.productImgWrapper}>
        <img src={product?.url} />
      </div>
      <div className={s.productOptions}>
        <p className={`${s.stock} ${product.stock ? s.stock : s.notStock}`}>{product.stock ? "В наличии" : "Нет в наличии"}</p>
        <p className={s.productName}>
          <span className={s.mainName}>{product.name.main}</span>
          <span className={s.secondaryName}>{product.name.secondary}</span>
        </p>
        <p className={s.capacity}>
          <img src={
            product.capacity?.type === "л" || product.capacity?.type === "мл"
              ? bottle : box
          } alt="" />
          <span className={s.capacityText}>{product.capacity?.value} {product.capacity?.type}</span>
        </p>
        <div className={s.buttonsContainer}>
          <p className={s.price}>{product.price.value} {product.price.currency}</p>
          <div className={s.changeQuantityContainer}>
            <Button className={s.minus} w="30px" p="1px 10px" onClick={handleMinusClick}>-</Button>
            <p className={s.quantity}>{count}</p>
            <Button className={s.plus} w="30px" p="1px 10px" onClick={handlePlusClick}>+</Button>
          </div>
          <Button img={inCart ? whiteCheck : whiteCart} className={s.cart} onClick={addToCart}>{inCart ? "Добавлено" : "В корзину"}</Button>
          <IconButton img={share} className={s.share} w="50px" ar={1} />
          <p className={s.announcement}>
            При покупке от <span className={s.bold}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
          </p>
          <Button img={darkDownload} className={s.priceList}>Прайс-лист</Button>
        </div>
        <div className={s.infoContainer}>
          <div className={s.mainInfo}>
            <p className={s.option}>
              <span className={s.optionType}>Производитель:</span>
              <span className={s.optionValue}>{product.producer}</span>
            </p>
            <p className={s.option}>
              <span className={s.optionType}>Бренд:</span>
              <span className={s.optionValue}>{product.brand}</span>
            </p>
            <p className={s.option}>
              <span className={s.optionType}>Штрихкод:</span>
              <span className={s.optionValue}>{product.barcode}</span>
            </p>
          </div>
          <div className={s.description}>
            <p className={s.title} onClick={() => setDescriptionOpen(prev => !prev)}>Описание <span>▼</span></p>
            {
              descriptionOpen &&
              <p className={s.descriptionText}>{product.description}</p>
            }
          </div>
          <div className={s.options}>
            <p className={s.title} onClick={() => setOptionsOpen(prev => !prev)}>Характеристики <span>▼</span></p>
            {
              optionsOpen &&
              <>
                <p className={s.option}>
                  <span className={s.optionType}>Производитель:</span>
                  <span className={s.optionValue}>{product.producer}</span>
                </p>
                <p className={s.option}>
                  <span className={s.optionType}>Бренд:</span>
                  <span className={s.optionValue}>{product.brand}</span>
                </p>
                <p className={s.option}>
                  <span className={s.optionType}>Штрихкод:</span>
                  <span className={s.optionValue}>{product.barcode}</span>
                </p>
                <p className={s.option}>
                  <span className={s.optionType}>Тип:</span>
                  <span className={s.optionValue}>{product.type.main}</span>
                </p>
                <p className={s.option}>
                  <span className={s.optionType}>Объем:</span>
                  <span className={s.optionValue}>{product.capacity?.value} {product.capacity?.type}</span>
                </p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;
