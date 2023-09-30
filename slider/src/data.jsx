import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "products",
    pageId: "sks32",
    links: [
      { id: "a1", label: "payment", icon: <FaCreditCard />, url: "/products" },
      { id: "a2", label: "terminal", icon: <FaCreditCard />, url: "/products" },
      { id: "a3", label: "connect", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    page: "developers",
    pageId: "vfvj4",
    links: [
      { id: "b1", label: "plugins", icon: <FaBook />, url: "/products" },
      { id: "b2", label: "libraries", icon: <FaBook />, url: "/products" },
      { id: "b3", label: "help", icon: <FaBook />, url: "/products" },
      { id: "b4", label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "company",
    pageId: "dvjef43",
    links: [
      { id: "c1", label: "about", icon: <FaBriefcase />, url: "/products" },
      { id: "c2", label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
