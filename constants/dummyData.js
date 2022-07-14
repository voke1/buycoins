import React from "react";
import { icons, images } from "./";
import { Text } from "react-native";
import { COLORS } from "./constants";

const transactions = [
  {
    id: 0,
    name: "John Doe",
    type: "Deposit",
    date: "2022-10-04T20:24:30+00:00",
    status: "Success",
  },
  {
    id: 1,
    name: "Michael Jade",
    type: "Deposit",
    date: "2022-10-04T20:24:30+00:00",
    status: "Success",
  },
  {
    id: 2,
    name: "Wilsons Joe",
    type: "Deposit",
    date: "2022-10-04T20:24:30+00:00",
    status: "Success",
  },
  {
    id: 3,
    name: "Collins Jame",
    type: "Deposit",
    date: "2022-10-05T20:24:30+00:00",
    status: "Success",
  },
  {
    id: 4,
    name: "Adam Smith",
    type: "Deposit",
    date: "2022-10-05T20:24:30+00:00",
    status: "Success",
  },
  {
    id: 5,
    name: "Abraham Lincoln",
    type: "Withdrawal",
    date: "2022-10-06T20:24:30+00:00",
    status: "Pending",
  },
  {
    id: 6,
    name: "John Doe",
    type: "Withdrawal",
    date: "2022-10-06T20:24:30+00:00",
    status: "Pending",
  },
  {
    id: 7,
    name: "John Doe",
    type: "Withdrawal",
    date: "2022-10-07T20:24:30+00:00",
    status: "Failed",
  },
  {
    id: 8,
    name: "Wood wilson",
    type: "Withdrawal",
    date: "2022-10-07T20:24:30+00:00",
    status: "Failed",
  },
];

const matchCategory = [
  {
    id: 12,
    title: "All",
  },
  {
    id: "2",
    title: "Deposit",
  },
  {
    id: "3",
    title: "Withdrawal",
  },
  {
    id: "4",
    title: "Pending",
  },
  {
    id: "5",
    title: "Success",
  },
  {
    id: "6",
    title: "Failed",
  },
];

export default {
  transactions,
  matchCategory,
};
