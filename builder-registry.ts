"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Section from "./components/Section";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});



Builder.registerComponent(Section, {
  name: "Section",
});
