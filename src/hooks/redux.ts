import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { basketAction } from "../Redux/BasketSlice";
import { RootState } from "../Redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
  ...basketAction,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
