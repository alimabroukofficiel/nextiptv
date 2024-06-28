import React from 'react'
import Link from 'next/link'
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (   
<footer>
    <div className="container">
        <ul>
            <li><Link href={'/'}>الرئيسية</Link></li>
            <li><Link href={'/'} >اتصل بنا </Link></li>
            <li><Link href={'/'}>أسئلة متكررة</Link></li>
            <li><Link href={'/'}>شرحات</Link></li>
            <li><Link href={'/'}>الشروط والأحكام </Link></li>
            <li><Link href={'/'}>سياسة الخصوصية </Link></li>
            <li><Link href={'/'}> عريف الارتباط</Link></li>
        </ul>
        <p>جميع الحقوق محفوظة لمجموعة © <i>{currentYear}</i></p>
    </div>
</footer>

  )
}
