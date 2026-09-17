import { ArrowUpRight } from "@phosphor-icons/react";
import { siteConfig } from "../data/site";
import { Seo } from "../seo/Seo";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About — Things I Wish Existed"
        description="About Jocelin’s approach to turning product ideas into real, usable software."
        path="/about"
      />
      <section className="about shell">
        <div className="about__title">
          <p className="eyebrow">About Jocelin</p>
          <h1>Learning by shipping.</h1>
        </div>
        <div className="about__body">
          <p>我正在学习如何用 AI 和 Vibe Coding，把产品想法快速转化成真正可以使用的软件。</p>
          <p>这里记录的不是单纯的课程练习，而是一个个从想法、产品设计、开发、测试到正式上线的产品实验。</p>
          <p>我更关注一个产品为什么值得被做、怎样把体验做得更简单，以及最终能不能真正交付，而不仅仅是代码是否写完。</p>
          <div className="process-line" aria-label="Product delivery process">
            <span>Idea</span><span>Product Thinking</span><span>Design</span><span>Build</span><span>Test</span><span>Ship</span>
          </div>
          <a className="text-link" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            Visit GitHub <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
