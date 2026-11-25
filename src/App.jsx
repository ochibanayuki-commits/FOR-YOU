import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, Play, Download, Sparkles, Compass, Shield } from 'lucide-react'

const navItems = [{label:'首页',id:'home'},{label:'世界',id:'world'},{label:'角色',id:'characters'},{label:'情报',id:'news'}]
const news = [
  {tag:'官方公告',date:'2026.11.25',title:'欢迎来到 FOR YOU 的世界',desc:'一段全新的旅程即将启程。'},
  {tag:'世界资讯',date:'2026.11.18',title:'世界设定 · 尚待揭晓',desc:'关于这片大陆、文明与古老传说的更多消息。'},
  {tag:'开发日志',date:'2026.11.08',title:'制作组手记 Vol.01',desc:'记录构筑幻想世界的每一个灵感瞬间。'}
]
function ImagePlaceholder({label,sub='在此放置图片素材',className=''}) {
  return <div className={`image-placeholder ${className}`}><span className="placeholder-mark">✳</span><b>{label}</b><small>{sub}</small></div>
}
function Navbar(){
  const [open,setOpen]=useState(false)
  useEffect(() => {
    if (!open) return
    const close = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  const go = () => setOpen(false)
  return <header className="navbar"><a className="brand" href="#home" onClick={go}><span className="brand-symbol">✳</span><span>FOR <i>YOU</i><small>OFFICIAL WEBSITE</small></span></a>
    <nav id="main-navigation" aria-label="主导航" className={open?'nav-links is-open':'nav-links'}>{navItems.map(n=><a key={n.id} href={`#${n.id}`} onClick={go}>{n.label}</a>)}</nav>
    <a className="nav-download" href="#download">游戏情报 <ArrowUpRight size={15}/></a>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} aria-controls="main-navigation">{open?<X/>:<Menu/>}</button>
  </header>
}
function Hero(){return <section className="hero" id="home"><div className="hero-art"><ImagePlaceholder label="首屏主视觉 / 游戏宣传图" sub="建议尺寸 1920 × 1080 · 替换 public/images/hero/hero.jpg" className="hero-placeholder"/></div><div className="hero-shade"/>
  <div className="hero-content"><div className="eyebrow"><span/> A NEW FANTASY ADVENTURE <span/></div><h1>为你而生的<br/><em>幻想世界</em></h1><p>在命运交织之处，寻找属于自己的答案。<br/>每一次相遇，都将成为故事的开始。</p><div className="hero-actions"><a className="button button-gold" href="#download"><Download size={17}/> 开启旅程 <ArrowUpRight size={16}/></a><a className="play-link" href="#world"><span><Play size={15} fill="currentColor"/></span> 探索这个世界</a></div></div>
  <div className="hero-side-note">A STORY WRITTEN BY YOU <b>01 / 04</b></div><div className="hero-scroll">SCROLL TO EXPLORE <span/></div>
</section>}
function SectionHead({kicker,title,desc,light=false}){return <div className={light?'section-head light':'section-head'}><span className="section-kicker">{kicker}</span><h2>{title}</h2><p>{desc}</p></div>}
function World(){return <section className="world section-pad" id="world"><div className="world-copy"><SectionHead kicker="THE WORLD · 01" title={<>未知之境<br/><i>等待你的到来</i></>} desc="越过熟悉的边界，踏入一片尚未被书写的土地。这里有失落的文明、沉睡的秘密，以及等待被发现的风景。"/><a className="text-link" href="#news">了解更多 <ArrowUpRight size={16}/></a></div><div className="world-visual"><ImagePlaceholder label="世界场景概念图" sub="建议尺寸 1400 × 900 · public/images/world/world-01.jpg"/><div className="visual-caption"><span>LOCATION / 001</span><b>THE UNKNOWN LAND</b></div></div><div className="world-index">I — THE BEGINNING</div></section>}
function Characters(){return <section className="characters section-pad" id="characters"><SectionHead kicker="CHARACTERS · 02" title={<>与你相遇的<br/><i>每一个灵魂</i></>} desc="他们有各自的过去、信念与故事。角色立绘与档案将在后续更新中逐步揭晓。"/><div className="character-grid">{['角色档案 / 01','角色档案 / 02','角色档案 / 03'].map((x,i)=><article className="character-card" key={x}><ImagePlaceholder label={x} sub="替换为角色立绘 PNG / WebP" className={`character-image character-${i+1}`}/><div className="character-meta"><span>CHARACTER 0{i+1}</span><b>待公开角色名称</b><small>属性 / 身份 / 角色介绍待补充</small></div></article>)}</div><div className="center-note">MORE CHARACTERS COMING SOON <span>✳</span></div></section>}
function Features(){return <section className="features section-pad"><SectionHead kicker="A WORLD OF POSSIBILITIES · 03" title={<>你的故事<br/><i>由你亲自书写</i></>} desc="探索、邂逅、成长。每一步选择，都让这个世界变得更加鲜活。" light/><div className="feature-grid">{[{icon:Compass,n:'自由探索',e:'EXPLORE',d:'穿越辽阔地域，发现藏于角落的惊喜。'},{icon:Shield,n:'独特羁绊',e:'BOND',d:'与个性鲜明的伙伴相遇，了解他们的故事。'},{icon:Sparkles,n:'奇幻冒险',e:'ADVENTURE',d:'直面未知挑战，揭开世界背后的秘密。'}].map(({icon:Icon,n,e,d})=><div className="feature" key={e}><Icon size={27} strokeWidth={1.3}/><span>{e}</span><h3>{n}</h3><p>{d}</p></div>)}</div></section>}
function News(){return <section className="news section-pad" id="news"><SectionHead kicker="LATEST NEWS · 04" title={<>最新情报<br/><i>世界正在更新</i></>} desc="关注 FOR YOU 的最新动态，不错过每一次重要消息。"/><div className="news-list">{news.map((n,i)=><article className="news-item" key={n.title}><div className="news-thumb"><ImagePlaceholder label={`新闻配图 0${i+1}`} sub="建议 16:9 横图"/></div><div className="news-info"><div><span className="news-tag">{n.tag}</span><time dateTime={n.date.replaceAll(".", "-")}>{n.date}</time></div><h3>{n.title}</h3><p>{n.desc}</p></div></article>)}</div><p className="news-more news-pending">更多资讯敬请期待</p></section>}
function DownloadSection(){return <section className="download-section" id="download"><ImagePlaceholder label="下载区域背景 / 游戏主视觉" sub="建议使用宽屏游戏场景图" className="download-bg"/><div className="download-overlay"/><div className="download-content"><span className="section-kicker">YOUR JOURNEY STARTS HERE</span><h2>下一段故事，<i>由你开启。</i></h2><p>准备好了吗？更多游戏信息即将公开。</p><span className="button button-gold pending-button"><Download size={17} aria-hidden="true"/> 敬请期待</span><small>平台信息与下载链接将在正式发布后更新</small></div></section>}
function Footer(){return <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-symbol">✳</span><span>FOR <i>YOU</i><small>OFFICIAL WEBSITE</small></span></a><span className="footer-pending">官方社交平台待公开</span></div><div className="footer-bottom"><span>© 2026 FOR YOU. ALL RIGHTS RESERVED.</span><span>本网站为项目展示页面，内容及素材持续更新中。</span><span>联系方式待公开</span></div></footer>}
export default function App(){return <><a className="skip-link" href="#main-content">跳至主要内容</a><Navbar/><main id="main-content" tabIndex={-1}><Hero/><World/><Characters/><Features/><News/><DownloadSection/></main><Footer/></>}
