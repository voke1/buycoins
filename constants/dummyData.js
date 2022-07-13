import React from "react";
import { icons, images } from "./";
import { Text } from "react-native";
import { COLORS } from "./constants";
let pisces = require("../assets/icons/pisces.png");
let gemini = require("../assets/icons/gemini.png");
let leo = require("../assets/icons/leo.png");
let aquarius = require("../assets/icons/aquarius.png");
let cancer = require("../assets/icons/cancer.png");

const transactions = [
  {
    id: 0,
    title: "Deposit",
    icon: require("../assets/icons/deposit.png"),
    amount: "2499",
    date: "22.02.2022",
    percent: "+10%",
  },
  {
    id: 1,
    title: "Gift Purchased",
    icon: require("../assets/icons/store.png"),
    amount: "7499",
    date: "22.02.2022",
    percent: "-10%",
  },
  {
    id: 2,
    title: "Withdrawal",
    icon: require("../assets/icons/withdraw.png"),
    amount: "9499",
    date: "22.02.2022",
    percent: "-10%",
  },

  {
    id: 3,
    title: "Gift Sold",
    icon: require("../assets/icons/sell.png"),
    amount: "7499",
    date: "22.02.2-2022",
    percent: "-10%",
  },
  {
    id: 4,
    title: "Withdrawal",
    icon: require("../assets/icons/withdraw.png"),
    amount: "9499",
    date: "22.02.2022",
    percent: "-10%",
  },
];

const notifications = [
  {
    id: 8,
    title: "Today",
    data: [
      {
        id: 0,
        title: `${(
          <Text style={{ color: "blue" }}>Voke Olomu</Text>
        )} sent you a game challenge`,
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "$150",
        time: "20m",
        type: "game",
      },
      {
        id: 1,
        title: "Faraouk Asmaya sent you a gift",
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "-$37.5",
        time: "35m",
        type: "gift",
      },
      {
        id: 2,
        title: "Ret Silo matched with you. you can now chat with her",
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "-$30",
        time: "35m",
      },
      {
        id: 3,
        title: "Wade warren submitted a profile on you special request",
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "-$30",
        time: "5hr",
      },
    ],
  },
  {
    id: 9,
    title: "Yesterday",
    data: [
      {
        id: 4,
        title: "Wade warren submitted profile on your thrybe seek",
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "-$30",
        type: "profile",

        time: "10:10 PM",
      },
      {
        id: 5,
        title: "Wade warren submitted a profile on you special request",
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "-$30",
        time: "3:48 PM",
      },
      {
        id: 6,
        title: "Wade warren submitted a profile on you special request",
        icon: require("../assets/icons/notificationDrawer.png"),
        amount: "-$30",
        time: "12:10 PM",
      },
    ],
  },
];

export default {
  transactions,
  notifications,
};
