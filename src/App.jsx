import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function App() {
  const formRef = useRef(null);

const sendBooking = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("service_baoq08c", "template_ma7wk7q", formRef.current, {
      publicKey: "4h7n5iqrH3FIv_Xxo",
    })
    .then(
      () => {
        alert("预约提交成功，我会尽快联系你！");
        formRef.current.reset();
      },
      (error) => {
        alert("提交失败，请重试");
        console.error(error);
      }
    );
};
  const services = [
    { title: "半日陪同", desc: "第一次来济南、周末轻松逛、城市打卡", price: "¥299 起" },
    { title: "城市陪拍", desc: "情侣打卡、女生出片、探店拍照", price: "¥199 起" },
    { title: "接站陪同", desc: "接站、带路、考试、出差、看演出", price: "¥159 起" },
    { title: "本地搭子", desc: "咖啡探店、夜游、Citywalk、轻陪伴", price: "¥199 起" },
  ];

  const reasons = [
    ["更省心", "不用自己做复杂攻略，落地直接玩"],
    ["更出片", "知道哪里更好拍，也知道怎么拍更自然"],
    ["更本地", "不走游客模板路线，体验真实济南"],
    ["更安心", "提前沟通、真人陪同、确认后再出发"],
  ];

  const hosts = [
    { name: "Zeng Bowen", tag: "济南本地 / 大学生 / 探店拍照 / citywalk" },
];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#faf7f2", color: "#222" }}>
      <header style={{
        position: "sticky",
        top: 0,
        background: "rgba(250,247,242,0.95)",
        borderBottom: "1px solid #e5e0d8",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10
      }}>
        <div>
          <strong style={{ fontSize: "22px" }}>泉城伴行</strong>
          <div style={{ fontSize: "13px", color: "#777" }}>Quancheng Companion</div>
        </div>
        <a href="#booking" style={{
          background: "#111",
          color: "#fff",
          padding: "10px 18px",
          borderRadius: "999px",
          textDecoration: "none"
        }}>
          立即预约
        </a>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "70px 24px" }}>
        <section style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center",
          marginBottom: "90px"
        }}>
          <div>
            <p style={{ color: "#16784f", letterSpacing: "2px", fontSize: "13px" }}>
              YOUR LOCAL COMPANION IN JINAN
            </p>
            <h1 style={{ fontSize: "56px", lineHeight: 1.1, margin: "12px 0" }}>
              济南本地陪同服务
            </h1>
            <p style={{ fontSize: "20px", color: "#666", lineHeight: 1.8 }}>
              陪玩 / 陪拍 / 接站 / 探店 / 城市轻旅行<br />
              像本地朋友一样，带你轻松玩济南。
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "14px" }}>
              <a href="#booking" style={{
                background: "#111",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "16px",
                textDecoration: "none"
              }}>
                立即预约
              </a>
              <a href="#services" style={{
                border: "1px solid #ccc",
                color: "#222",
                padding: "14px 24px",
                borderRadius: "16px",
                textDecoration: "none"
              }}>
                查看服务
              </a>
            </div>
          </div>

          <div style={{
            background: "#fff",
            padding: "18px",
            borderRadius: "28px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)"
          }}>
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop"
              alt="济南本地陪同"
              style={{ width: "100%", borderRadius: "22px", display: "block" }}
            />
          </div>
        </section>

        <section id="services" style={{ marginBottom: "90px" }}>
          <h2 style={{ fontSize: "36px", textAlign: "center" }}>你可以这样玩济南</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "32px"
          }}>
            {services.map((item) => (
              <div key={item.title} style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "26px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}>
                <h3 style={{ fontSize: "24px" }}>{item.title}</h3>
                <p style={{ color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
                <p style={{ color: "#16784f", fontSize: "20px", fontWeight: "bold" }}>{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "90px" }}>
          <h2 style={{ fontSize: "36px", textAlign: "center" }}>为什么选择泉城伴行</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "32px"
          }}>
            {reasons.map(([title, desc]) => (
              <div key={title} style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "26px"
              }}>
                <h3>{title}</h3>
                <p style={{ color: "#666", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "90px" }}>
          <h2 style={{ fontSize: "36px", textAlign: "center" }}>认识你的济南陪同</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "32px"
          }}>
            {hosts.map((host) => (
              <div key={host.name} style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "26px",
                textAlign: "center"
              }}>
                <div style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#ddd",
                  margin: "0 auto 16px"
                }} />
                <h3>{host.name}</h3>
                <p style={{ color: "#666" }}>{host.tag}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" style={{
          background: "#fff",
          borderRadius: "30px",
          padding: "36px",
          boxShadow: "0 15px 45px rgba(0,0,0,0.06)"
        }}>
          <h2 style={{ fontSize: "36px" }}>预约你的济南陪同</h2>
          <p style={{ color: "#666" }}>留下你的时间、人数和想法，我们会先联系你确认需求。</p>
<form
  ref={formRef}
  onSubmit={sendBooking}
  style={{ display: "grid", gap: "14px", marginTop: "24px" }}
>
           <input name="name" placeholder="怎么称呼你" style={inputStyle} />
<input name="contact" placeholder="联系方式（微信 / 手机）" style={inputStyle} />
<input name="date" type="date" style={inputStyle} />
<select name="people" style={inputStyle}>
              <option>1 人</option>
              <option>2 人</option>
              <option>3-4 人</option>
              <option>5 人以上</option>
            </select>
            <select name="service" style={inputStyle}>
              <option>半日陪同</option>
              <option>城市陪拍</option>
              <option>接站陪同</option>
              <option>本地搭子</option>
            </select>
          <textarea
  name="message"
  rows="4"
  placeholder="你想怎么玩？例如：大明湖 + 宽厚里 + 拍照"
  style={inputStyle}
/>
<button type="submit" style={{
              padding: "15px",
              borderRadius: "16px",
              background: "#111",
              color: "#fff",
              border: "none",
              fontSize: "16px"
            }}>
              提交预约
            </button>
            <p style={{ marginTop: "12px", color: "#666" }}>
  也可以直接添加微信：a18959092768
</p>
<p>✔ 本地真实陪同，无套路</p>
<p>✔ 可提前沟通行程</p>
<p>✔ 不满意不收费</p>
        </form>
        </section>
      </main>

      <footer style={{
        textAlign: "center",
        padding: "30px",
        color: "#777",
        borderTop: "1px solid #e5e0d8"
      }}>
        © 2026 泉城伴行 Quancheng Companion
      </footer>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  fontSize: "15px",
};