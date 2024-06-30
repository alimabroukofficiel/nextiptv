"use client";
import { useState } from "react";
import Image from "next/image";
import iconbuttom from "../assets/icons/bottom.svg";

export default function FaqsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "ما هي واجهة المستخدم بدون عنوان؟",
      answer: "Untitled UI هو أكبر وأكثر مجموعة أدوات تصميم Figma UI مبيعًا في العالم. هل سئمت من إهدار آلاف الساعات في البدء من الصفر في كل مشروع وإعادة بناء نفس المكونات؟ يأتي Untitled UI مليئًا بكل ما تحتاجه لتصميم واجهة مستخدم ومواقع ويب حديثة وجميلة. انضم إلى أكثر من 200000 مصمم من أفضل الشركات في العالم. ابدأ أي مشروع، ووفّر آلاف الساعات، وارتق إلى مستوى أعلى كمصمم."
    },
    {
        question: "ما هي واجهة المستخدم بدون عنوان؟",
        answer: "Untitled UI هو أكبر وأكثر مجموعة أدوات تصميم Figma UI مبيعًا في العالم. هل سئمت من إهدار آلاف الساعات في البدء من الصفر في كل مشروع وإعادة بناء نفس المكونات؟ يأتي Untitled UI مليئًا بكل ما تحتاجه لتصميم واجهة مستخدم ومواقع ويب حديثة وجميلة. انضم إلى أكثر من 200000 مصمم من أفضل الشركات في العالم. ابدأ أي مشروع، ووفّر آلاف الساعات، وارتق إلى مستوى أعلى كمصمم."
      },
      {
        question: "ما هي واجهة المستخدم بدون عنوان؟",
        answer: "Untitled UI هو أكبر وأكثر مجموعة أدوات تصميم Figma UI مبيعًا في العالم. هل سئمت من إهدار آلاف الساعات في البدء من الصفر في كل مشروع وإعادة بناء نفس المكونات؟ يأتي Untitled UI مليئًا بكل ما تحتاجه لتصميم واجهة مستخدم ومواقع ويب حديثة وجميلة. انضم إلى أكثر من 200000 مصمم من أفضل الشركات في العالم. ابدأ أي مشروع، ووفّر آلاف الساعات، وارتق إلى مستوى أعلى كمصمم."
      },
      {
        question: "ما هي واجهة المستخدم بدون عنوان؟",
        answer: "Untitled UI هو أكبر وأكثر مجموعة أدوات تصميم Figma UI مبيعًا في العالم. هل سئمت من إهدار آلاف الساعات في البدء من الصفر في كل مشروع وإعادة بناء نفس المكونات؟ يأتي Untitled UI مليئًا بكل ما تحتاجه لتصميم واجهة مستخدم ومواقع ويب حديثة وجميلة. انضم إلى أكثر من 200000 مصمم من أفضل الشركات في العالم. ابدأ أي مشروع، ووفّر آلاف الساعات، وارتق إلى مستوى أعلى كمصمم."
      },
      {
        question: "ما هي واجهة المستخدم بدون عنوان؟",
        answer: "Untitled UI هو أكبر وأكثر مجموعة أدوات تصميم Figma UI مبيعًا في العالم. هل سئمت من إهدار آلاف الساعات في البدء من الصفر في كل مشروع وإعادة بناء نفس المكونات؟ يأتي Untitled UI مليئًا بكل ما تحتاجه لتصميم واجهة مستخدم ومواقع ويب حديثة وجميلة. انضم إلى أكثر من 200000 مصمم من أفضل الشركات في العالم. ابدأ أي مشروع، ووفّر آلاف الساعات، وارتق إلى مستوى أعلى كمصمم."
      },
       {
      question: "ما هي واجهة المستخدم بدون عنوان؟",
      answer: "Untitled UI هو أكبر وأكثر مجموعة أدوات تصميم Figma UI مبيعًا في العالم. هل سئمت من إهدار آلاف الساعات في البدء من الصفر في كل مشروع وإعادة بناء نفس المكونات؟ يأتي Untitled UI مليئًا بكل ما تحتاجه لتصميم واجهة مستخدم ومواقع ويب حديثة وجميلة. انضم إلى أكثر من 200000 مصمم من أفضل الشركات في العالم. ابدأ أي مشروع، ووفّر آلاف الساعات، وارتق إلى مستوى أعلى كمصمم."
    },
    // Add more FAQ items here as needed
  ];

  return (
    <section>
      <div className="text__center why">
        <h4>الأسئلة الشائعة</h4>
        <h1>أسئلة مكررة</h1>
        <p>هل تحتاج إلى مساعدة في شيء ما؟ فيما يلي الأسئلة الأكثر شيوعًا لدينا.</p>
      </div>
      <div className="faqs__list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faqs__item ${activeIndex === index ? 'active' : ''}`}>
            <div className="question" onClick={() => toggleFaq(index)}>
              <h3>{faq.question}</h3>
              <Image src={iconbuttom} alt="icon" width={22} height={22} />
            </div>
            {activeIndex === index && (
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}