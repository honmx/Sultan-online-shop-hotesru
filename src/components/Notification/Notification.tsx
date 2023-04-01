import React, { Dispatch, MouseEvent, FC, SetStateAction } from "react";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import IconButton from "../UI/IconButton/IconButton";
import cross from "../../assets/cross.svg";
import s from "./Notification.module.scss";

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Notification: FC<Props> = ({ onClick }) => {
  return (
    <div className={s.background}>
      <div className={s.notification}>
        <Title className={s.title} usualText="спасибо за заказ" />
        <Subtitle>Наш менеджер свяжется с вами в ближайшее время</Subtitle>
        <IconButton img={cross} className={s.cross} onClick={onClick} />
      </div>
    </div>
  )
};

export default Notification;
