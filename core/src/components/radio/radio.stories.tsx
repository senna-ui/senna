export default {
  title: "Forms/RadioGroup",
};

export const Default = () => {
  const radio = document.createElement("sen-radio");
  radio.options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" },
  ];

  return radio;
};

export const Disabled = () => {
  const radio = document.createElement("sen-radio");
  radio.disabled = true;
  radio.options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" },
  ];
  radio.value = 1;

  return radio;
};
