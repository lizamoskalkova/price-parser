import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import style from "./App.module.css";
import { Modal } from "./components/Modal";
import { useLazyGetPriceInfoQuery } from "./api/priceApi";
import { CloseIcon } from "./assets/icons/CloseIcon";

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [price, setPrice] = useState<number>();
  const [getPriceInfo] = useLazyGetPriceInfoQuery({
    pollingInterval: 6000000,
  });

  useEffect(() => {
    getPriceInfo("bitcoin")
      .then((res) => setPrice(res.data ? res.data[0].current_price : 0))
      .catch((err) => console.log(`api call was rejected with ${err}`));
  }, []);

  return (
    <div className={style.container}>
      <Button onClick={() => setModalOpen(true)}>Get Bitcoin Price</Button>
      {modalOpen && (
        <Modal
          open={modalOpen}
          closeModal={() => setModalOpen(false)}
          icon={<CloseIcon />}
        >
          {"Current BTC price  " + price + " $"}
        </Modal>
      )}
    </div>
  );
};
