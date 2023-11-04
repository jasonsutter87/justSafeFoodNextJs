"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import HeroSection from "./components/Home/Hero";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
});
