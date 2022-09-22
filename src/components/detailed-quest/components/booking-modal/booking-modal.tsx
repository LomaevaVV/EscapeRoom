import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { postOrderAction } from '../../../../store/api-actions';

type BookingModalProps = {
  id: String
  onModalCloseBtnClick: () => void;
}

export default function BookingModal({id, onModalCloseBtnClick}: BookingModalProps): JSX.Element {
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    people: 0
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target;

    if (name !== "booking-legal") {
      setOrderData(() => ({
        ...orderData,
        [name.slice(8)]: value
      }));
    }
  };

  const validateTelNumber = (phone: string) => {
    const regExpPhone = /\d{10}/;

    return !!(phone.match(regExpPhone));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validateTelNumber(orderData.phone)) {
      const orderToPost = {
        ...orderData,
        id: id,
        isLegal: true,
        closeModal: onModalCloseBtnClick
      };
      dispatch(postOrderAction(orderToPost));
    } else {
      window.console.log('что-то пошло не так')
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onModalCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
}
