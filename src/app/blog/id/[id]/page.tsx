import React from "react";
import BlogDetsHero from "@/components/homecomps/blogpage/BlogDetsHero";
import BlogDetsBody from "@/components/homecomps/blogpage/BlogDetsBody";

  const blogData = {
  id: "hubit",
  imageUrl: "/images/caseplaceholder.png",
  title: `Launched MVP in 8 weeks: ReCreaX's Success Story with XYZ`,
  description:
    "XYZ is a [short description of the company] founded by [Founder Name], a first-time founder solving [pain point]. With a clear vision but no technical team, they partnered with ReCreaX to bring their idea to life, validated with over x real users and launched in 8 weeks",
  author: "Pelumi Oladoja",
  authorImage: "/images/author-placeholder.png",
  createdAt: "November 4, 2024",
  tableOfContents: ["Problem", "Solution", "Outcome"],
  content: `<div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 24px">
<h5 style="font-family: 'Tomato'; font-weight: 600; font-size: 24px; line-height: 155%; letter-spacing: normal; vertical-align: middle">Launched MVP in 8 weeks: ReCreaX's Success Story with XYZ</h5>
    <div><p style="font-family: 'Plus Jakarta Sans'; font-weight: 400; font-size: 18px; line-height: 155%; letter-spacing: normal; vertical-align: middle">Breaking into tech is no longer just about talent. It's about access to tools, training, and real experience. And that costs money. For many aspiring tech professionals, financial limitations is a barrier to acquiring the skills and exposure needed to thrive in their career.</p> <br style="margin-bottom: 16px" />
    <p style="font-family: 'Plus Jakarta Sans'; font-weight: 400; font-size: 18px; line-height: 155%; letter-spacing: normal; vertical-align: middle">However, at ReCreaX, we hold the belief that financial constraints should never hold you back from gaining hands-on experience and advancing your career. That's why we've partnered with CredPal, a leading credit platform, to offer you a flexible way to finance your tech projects learning journey in our project-based learning program</p> <br style="margin-bottom: 16px" />  
<p style="font-family: 'Plus Jakarta Sans'; font-weight: 400; font-size: 18px; line-height: 155%; letter-spacing: normal; vertical-align: middle">However, at ReCreaX, we hold the belief that financial constraints should never hold you back from gaining hands-on experience and advancing your career. That's why we've partnered with CredPal, a leading credit platform, to offer you a flexible way to finance your tech projects learning journey in our project-based learning program</p><br style="margin-bottom: 16px" />
<p style="font-family: 'Plus Jakarta Sans'; font-weight: 400; font-size: 18px; line-height: 155%; letter-spacing: normal; vertical-align: middle">ReCreaX X CredPal partnership changes how tech education and practical experience can be accessed by everyone, regardless of their current financial situation. You can now access credit facilities to grow and pay later in manageable installments that align with your financial capability allowing you to focus on skill development rather than worrying about immediate costs.</p> </div> </div>`,
  shareUrl: `https://www.recreax.com/case-studies/`,
};

function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#f1fafc] ">
      <BlogDetsHero blogHeroData={blogData} />
      <BlogDetsBody blogBodyData={blogData} />
    </div>
  );
}

export default page;
