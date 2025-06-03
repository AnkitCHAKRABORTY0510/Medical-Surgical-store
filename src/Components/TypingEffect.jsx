import React, { useState, useEffect } from "react";

const TypingEffect = () => {
const items = [
  "Surgical Instruments",
  "Diagnostic Devices",
  "Personal Protective Equipment (PPE)",
  "Wound Care Supplies",
  "Hospital Furniture & Equipment",
  "Orthopedic Products",
  "Medical Disposables",
  "Sterilization Products",
  "Respiratory Care Products",
  "Diagnostic Test Kits",
  "Sutures and Surgical Staples",
  "Electro-medical Equipment"
];


  const [text, setText] = useState("");
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  const typingSpeed = 30;   // Increase speed (smaller = faster)
  const deletingSpeed = 20; // Increase deleting speed
  const pauseDuration = 1000; // Time to pause after fully typed

  useEffect(() => {
    if (pause) return;

    const current = items[itemIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      // Pause after full word is typed
      if (!isDeleting && charIndex === current.length) {
        setPause(true);
        setTimeout(() => setIsDeleting(true), pauseDuration);
        setTimeout(() => setPause(false), pauseDuration);
      }

      // Pause after word is fully deleted
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setItemIndex((itemIndex + 1) % items.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, itemIndex, pause]);

  return (
    <div className="text-lg font-medium text-emerald-900">
      <span className="font-semibold">We deal with: </span>
      <span>{text}</span>
      <span className="animate-blink"></span>
    </div>
  );
};

export default TypingEffect;
