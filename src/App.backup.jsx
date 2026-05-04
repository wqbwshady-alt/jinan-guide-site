export default function App() {
  const services = [
    { title: "半日陪同", desc: "适合第一次来济南 / 周末轻松逛", price: "¥299 起" },
    { title: "城市陪拍", desc: "适合情侣打卡 / 女生出片", price: "¥199 起" },
    { title: "接站陪同", desc: "适合第一次来济南 / 出差 / 看演出", price: "¥159 起" },
    { title: "本地搭子", desc: "适合探店 / 咖啡 / 夜游 / Citywalk", price: "¥199 起" },
  ];

  const reasons = [
    ["更省心", "不用自己做复杂攻略，落地直接玩"],
    ["更出片", "知道哪里更好拍，也知道怎么拍更自然"],
    ["更本地", "不走游客模板路线，带你体验更真实的济南"],
    ["更安心", "提前沟通、真人陪同、体验更轻松更放心"],
  ];

  const hosts = [
    { name: "Mia", tag: "女生路线 / 探店拍照 / 情侣出片" },
    { name: "Chen", tag: "Citywalk / 咖啡探店 / 夜游路线" },
    { name: "Lin", tag: "接站带路 / 演出陪同 / 本地避坑" },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <section style={{ marginBottom: "60px" }}>
        <h1>泉城伴行</h1>
        <p>济南本地陪同服务</p>
        <p>陪玩 / 陪拍 / 接站 / 探店 / 城市轻旅行</p>
        <button style={{ padding: "10px 18px", marginTop: "12px" }}>立即预约</button>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2>你可以这样玩济南</h2>
        <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
          {services.map((item) => (
            <div key={item.title} style={{ border: "1px solid #ddd", borderRadius: "16px", padding: "20px" }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2>为什么选择泉城伴行</h2>
        <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
          {reasons.map(([title, desc]) => (
            <div key={title} style={{ background: "#f7f7f7", borderRadius: "16px", padding: "20px" }}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2>认识你的济南陪同</h2>
        <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
          {hosts.map((host) => (
            <div key={host.name} style={{ border: "1px solid #ddd", borderRadius: "16px", padding: "20px" }}>
              <h3>{host.name}</h3>
              <p>{host.tag}</p>
              <button style={{ marginTop: "12px", padding: "8px 14px" }}>查看资料</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>预约你的济南陪同</h2>
        <div style={{ marginTop: "20px", display: "grid", gap: "14px", maxWidth: "520px" }}>
          <input placeholder="怎么称呼你" style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ddd" }} />
          <input placeholder="联系方式（微信 / 手机）" style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ddd" }} />
          <input type="date" style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ddd" }} />
          <select style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ddd" }}>
            <option>1 人</option>
            <option>2 人</option>
            <option>3-4 人</option>
            <option>5 人以上</option>
          </select>
          <select style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ddd" }}>
            <option>半日陪同</option>
            <option>城市陪拍</option>
            <option>接站陪同</option>
            <option>本地搭子</option>
          </select>
          <textarea
            rows="4"
            placeholder="你想怎么玩（例如：大明湖 + 宽厚里 + 拍照）"
            style={{ padding: "12px", borderRadius: "12px", border: "1px solid #ddd" }}
          />
          <button style={{ padding: "12px", borderRadius: "12px" }}>提交预约</button>
        </div>
      </section>
    </div>
  );
}