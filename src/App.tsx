import { useEffect, useState } from "react";
import style from "./App.module.css";
import { useLazyGetPriceInfoQuery } from "./store/priceApi";
import { CloseIcon } from "./assets/icons/CloseIcon";
import { useDispatch } from "react-redux";
import { setModalOpen } from "./store/modalSlice";
import { INTERVAL } from "./utils/interval";
import { Button } from "./components/button";
import { Modal } from "./components/modal";

export const App = () => {
  const [price, setPrice] = useState<number>();
  const [getPriceInfo] = useLazyGetPriceInfoQuery({
    pollingInterval: INTERVAL,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPriceInfo("bitcoin");
        setPrice(res.data ? res.data[0].current_price : 0);
      } catch (err) {
        console.log(`api call was rejected with ${err}`);
      }
    };
    fetchData();
  }, [getPriceInfo]);

  const handleClick = () => {
    dispatch(setModalOpen(true));
  };

  return (
    <div className={style.container}>
      <Button onClick={handleClick}>Get Bitcoin Price</Button>
      <Modal icon={<CloseIcon />}>{"Current price  " + price + " $"}</Modal>
    </div>
  );
};
