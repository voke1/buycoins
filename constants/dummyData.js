import React from "react";
import { icons, images } from "./";
import { Text } from "react-native";
import { COLORS } from "./constants";
let pisces = require("../assets/icons/pisces.png");
let gemini = require("../assets/icons/gemini.png");
let leo = require("../assets/icons/leo.png");
let aquarius = require("../assets/icons/aquarius.png");
let cancer = require("../assets/icons/cancer.png");

const gifts = [
  {
    id: 1,
    name: "Heart Ribbon",
    icon: require("../assets/icons/forYou.png"),
    amount: "1220",
    qty: 1,
  },
  {
    id: 2,
    name: "Flower",
    icon: require("../assets/icons/flower.png"),
    amount: "9450",
    qty: 1,
  },
  {
    id: 3,
    name: "Bouquet",
    icon: require("../assets/icons/bouquet.png"),
    amount: "2330",
    qty: 1,
  },
  {
    id: 4,
    name: "Heartbeat",
    icon: require("../assets/icons/heartBeat.png"),
    amount: "2190",
    qty: 1,
  },
  {
    id: 5,
    name: "Dave Bird",
    icon: require("../assets/icons/doveBird.png"),
    amount: "2120",
    qty: 1,
  },
  {
    id: 6,
    name: "Teddy Bear",
    icon: require("../assets/icons/teddyBear.png"),
    amount: "2200",
    qty: 1,
  },
];

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

const accountSettings = [
  {
    id: 0,
    title: "Profile",
    // icon: require("../assets/icons/fundwallet.png"),
    header: "true",
  },
  {
    id: 1,
    title: "Verify",
    // icon: require("../assets/icons/withdrawfund.png"),
    info: "Take a selfie picture to verify",
    date: "Dec 3, 2021",
    rightComponent: "switch",
    header: "true",
    toggle: false,
  },
  {
    id: 2,
    title: "Pause",
    // icon: require("../assets/icons/uploadarrow.png"),
    rightComponent: "switch",
    header: "true",
    toggle: false,
    info:
      "Pausing prevent your profile from being shown to new people. You can still chat with your current match",
  },
  {
    id: 3,
    title: "Show last Active Status",
    rightComponent: "switch",
    // icon: require("../assets/icons/uploadarrow.png"),
    header: "true",
    toggle: false,
    info:
      "People viewing your profile can see your last active status, and you can see theirs. Your matches won't be shown your last active status",
  },
  {
    id: 4,
    title: "Phone and Email",
    // icon: require("../assets/icons/uploadarrow.png"),
    amount: "-$30",
    header: "true",
  },
  {
    id: 5,
    title: "+2348164637381",
    // icon: require("../assets/icons/uploadarrow.png"),
    amount: "-$30",
  },
  {
    id: 6,
    title: "vokeolomu01@gmail.com",
    // icon: require("../assets/icons/uploadarrow.png"),
    amount: "-$30",
  },
  {
    id: 7,
    title: "Membership",
    // icon: require("../assets/icons/uploadarrow.png"),
    amount: "-$30",
    header: "true",
  },
  {
    id: 8,
    title: "Upgrade to preferred Membership",
    // icon: require("../assets/icons/uploadarrow.png"),
    amount: "-$30",
  },
  {
    id: 9,
    title: "Connect Accounts",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    header: "true",
  },
  {
    id: 10,
    title: "Apple",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "switch",
    toggle: false,
  },
  {
    id: 11,
    title: "Facebook",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "switch",
    toggle: false,
  },
  {
    id: 12,
    title: "Instagram",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "switch",
    toggle: false,
  },
  {
    id: 13,
    title: "Gmail",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "switch",
    toggle: false,
  },
  {
    id: 14,
    title: "Legal",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    header: "true",
  },
  {
    id: 15,
    title: "Privacy Policy",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "carat",
  },
  {
    id: 16,
    title: "Terms of Service",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "carat",
  },
  {
    id: 17,
    title: "Community",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    header: "true",
  },
  {
    id: 18,
    title: "Safe Dating tips",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "carat",
  },
  {
    id: 19,
    title: "Membership Principles",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
    rightComponent: "carat",
  },
  {
    id: 20,
    title: "Delete Account",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
  },
  {
    id: 21,
    title: "Log out",
    // icon: require("../assets/icons/fundwallet.png"),
    amount: "$150",
  },
];

const profiles = [
  {
    id: 0,
    title: "Profile",
    image: require("../assets/images/hansMan.jpg"),
    header: "true",
    name: "Farouk Asmaya",
    age: 23,
    profession: "Blogger",
    country: "Barcelona",
    location: "Lagos",
    locationFlag: require("../assets/icons/nigeriaProfile.png"),
    countryFlag: require("../assets/icons/spainProfile.png"),
    online: require("../assets/icons/greenIcon.png"),
  },
  {
    id: 1,
    title: "Verify",
    image: require("../assets/images/smilingWoman.jpg"),
    header: "true",
    name: "Melody Jacob",
    age: 23,
    profession: "Fashion Model",
    country: "Cross Rivers",
    location: "Freetown",
    locationFlag: require("../assets/icons/usa.png"),
    countryFlag: require("../assets/icons/nigeriaProfile.png"),
    online: "",
  },
  {
    id: 2,
    title: "Pause",
    image: require("../assets/images/sexy4.jpg"),
    header: "true",
    name: "Noora",
    age: 29,
    profession: "Nutritionist",
    country: "Lagos",
    location: "Port Novo",
    locationFlag: require("../assets/icons/bening.png"),
    countryFlag: require("../assets/icons/nigeriaProfile.png"),
    online: require("../assets/icons/greenIcon.png"),
  },
];

const profiles1 = [
  {
    id: 0,
    title: "Profile",
    image: require("../assets/icons/pix2.png"),
    header: "true",
  },
  {
    id: 1,
    title: "Verify",
    image: require("../assets/icons/pix3.png"),
    info: "Take a selfie picture to verify",
    date: "Dec 3, 2021",
    rightComponent: "switch",
    header: "true",
    toggle: false,
  },
  {
    id: 2,
    title: "Pause",
    image: require("../assets/icons/pix2.png"),
    rightComponent: "switch",
    header: "true",
    toggle: false,
    info:
      "Pausing prevent your profile from being shown to new people. You can still chat with your current match",
  },
  {
    id: 3,
    title: "Profile",
    image: require("../assets/icons/pix3.png"),
    header: "true",
  },
];

const profileDetails = [
  {
    id: 0,
    title: "Full Name",
    info: "Amoko Gbenga",
  },
  {
    id: 1,
    title: "Location",
    info: "Magboro ogun, Nigeria",
    // icon: require("../assets/icons/locationicon.png"),
  },
  {
    id: 2,
    title: "Origin",
    info: "Ogun state, Nigeria (Yoruba)",
    // icon: require("../assets/icons/originicon.png"),
  },
  {
    id: 3,
    title: "Gender",
    info: "Man",
  },
  {
    id: 4,
    title: "Birthday",
    info: "06/02/1993",
    // icon: require("../assets/icons/age.png"),
  },
  {
    id: 5,
    title: "Religion",
    info: "Christianity",
    // icon: require("../assets/icons/locationicon.png"),
  },
  {
    id: 6,
    title: "Profession",
    info: "UI/UX Designer",
    // icon: require("../assets/icons/locationicon.png"),
  },
  {
    id: 7,
    title: "Hobbies",
    info: "Football, Crypto, Design",
  },
  {
    id: 8,
    title: "Interested in",
    info: "Women",
  },
  {
    id: 9,
    title: "Seeking",
    info: "Casual relationship",
  },
  {
    id: 10,
    title: "Photo",
    // info: [image1, image1, image1],
  },
];

const seekInfo = [
  {
    id: 0,
    seeking: true,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "I am looking for a serious relationship",
    toggle: false,
  },
  {
    id: 7,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "Beautiful women main lounge/cruise & connect",
    toggle: false,
    // image: image1,
  },
  {
    id: 1,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "Beautiful women main lounge/cruise & connect",
    toggle: false,
  },
  {
    id: 2,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "Beautiful women main lounge/cruise & connect",
    toggle: false,
  },
];

const seekInfo1 = [
  {
    id: 0,
    seeking: true,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "I am looking for a serious relationship",
    toggle: false,
  },
  {
    id: 7,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "I am looking for a serious relationship",
    toggle: false,
    // image: image1,
  },
  {
    id: 1,
    header: "Thrybe seek",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title: "I am looking for a serious relationship",
    toggle: false,
  },
];

const hobbiesPrev = [
  { id: 0, title: "Pisces", icon: pisces },
  { id: 1, title: "Gemini", icon: gemini },
  { id: 2, title: "Aquarius", icon: aquarius },
  { id: 3, title: "Cancer", icon: cancer },
  { id: 4, title: "Leo", icon: leo },
];

const hobbies = [
  { id: 0, title: "Photography", icon: icons.photography },
  { id: 1, title: "Shopping", icon: icons.shopping },
  { id: 2, title: "Karaoke", icon: icons.karaoke },
  { id: 3, title: "Yoga", icon: icons.yoga },
  { id: 4, title: "Cooking", icon: icons.cooking },

  { id: 5, title: "Football", icon: icons.football },
  { id: 6, title: "Swimming", icon: icons.swimming },
  { id: 7, title: "Art", icon: icons.art },
  { id: 8, title: "Traveling", icon: icons.travelling },
  { id: 9, title: "Adventure", icon: icons.adventure },
  { id: 10, title: "Hiking", icon: icons.hiking },
  { id: 11, title: "Music", icon: icons.music },

  // { id: 0, title: "Pisces", icon: pisces },
  // { id: 1, title: "Gemini", icon: gemini },
  // { id: 2, title: "Aquarius", icon: aquarius },
  // { id: 3, title: "Cancer", icon: cancer },
  // { id: 4, title: "Leo", icon: leo },
];

const preference = [
  {
    id: 0,
    title: "Profile",
    notification: true,
    showActiveStatus: true,
    incognito: false,
    appNotification: true,
    darkMode: false,
  },
];

const subscription = [
  {
    id: 0,
    title: "Unlimited Likes",
    premium: false,
    Gold: true,
  },
  {
    id: 1,
    title: "Advanced Filter",
    premium: false,
    Gold: true,
  },
  {
    id: 2,
    title: "Incognito Mode",
    premium: false,
    Gold: true,
  },
  {
    id: 3,
    title: "Travel Mode",
    premium: true,
    Gold: true,
  },
  {
    id: 4,
    title: "Unlimited Gift",
    premium: false,
    Gold: true,
  },
];

const submitSeekInfo = [
  {
    id: 0,
    seeking: true,
    header: "About Seeker",
    specialFeature: [
      { id: 1, title: "Special Feature", desc: "My blood genotype is AA" },
      { id: 2, title: "Special Feature", desc: "My Weight is 1000LBS" },
      { id: 3, title: "Special Feature", desc: "I am HIV Negative" },
      {
        id: 4,
        title: "Special Feature",
        desc: "I'm physically capable of taking care of myself",
      },
      { id: 5, title: "Special Feature", desc: "My blood genotype is AA" },
    ],
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title:
      "Mauris convallis, leo eget dignissim semper, orci ipsum maximus dolor.",
    toggle: false,
  },
  {
    id: 1,
    header: "Interested Person must",
    // icon: require("../assets/icons/withdrawfund.png"),
    // icon1: require("../assets/icons/withdrawfund.png"),
    specialFeature: [
      { id: 1, title: "Special Feature", desc: "My blood genotype is AA" },
      { id: 2, title: "Special Feature", desc: "My blood genotype is AA" },
      { id: 3, title: "Special Feature", desc: "My blood genotype is AA" },
      { id: 4, title: "Special Feature", desc: "My blood genotype is AA" },
    ],
    info:
      "Submit your profile to this request for 10 token if you're interested",
    title:
      "Mauris convallis, leo eget dignissim semper, orci ipsum maximus dolor.",
    toggle: false,
    // image: image1,
  },
];

export default {
  // allCards,
  hobbiesPrev,
  transactions,
  gifts,
  notifications,
  accountSettings,
  profileDetails,
  seekInfo,
  profiles,
  hobbies,
  profiles1,
  preference,
  subscription,
  submitSeekInfo,
  seekInfo1,
};
