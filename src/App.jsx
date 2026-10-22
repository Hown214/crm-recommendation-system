import React, { useState } from 'react';
import { 
  Users, FileText, Layers, Award, CheckSquare, BarChart2, Plus, HeartPulse
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

export default function CRMSystem() {
  const [activeTab, setActiveTab] = useState('customers');

  // 1. 模擬資料：顧客資料
  const [customers] = useState([
    { id: 1, name: '林小美', phone: '0912-345-678', budget: '$5,000 - $10,000', pref: '精準健康檢測、泰式舒壓', brands: ['康博診所', '泰晶殿會館'], status: '已授權' },
    { id: 2, name: '張志明', phone: '0922-888-999', budget: '$2,000 - $5,000', pref: '頭皮抗衰老、足部養護', brands: ['泰晶殿會館'], status: '部分授權' },
    { id: 3, name: '王雅婷', phone: '0933-123-456', budget: '$10,000+', pref: '細胞抗衰老、美白保養', brands: ['康博診所', '美健中心'], status: '已授權' },
  ]);

  // 2. 模擬資料：跨品牌消費紀錄
  const crossBrandHistory = [
    { id: 1, customer: '林小美', brand: '泰晶殿會館', service: '皇家頂級舒壓 120分', date: '2026-10-15', amount: '$3,600' },
    { id: 2, customer: '林小美', brand: '康博診所', service: '功能醫學健康檢測', date: '2026-09-20', amount: '$8,000' },
    { id: 3, customer: '張志明', brand: '泰晶殿會館', service: '足部深層淨化養護', date: '2026-10-18', amount: '$1,800' },
    { id: 4, customer: '王雅婷', brand: '美健中心', service: '雙人尊榮舒心養生療程', date: '2026-10-21', amount: '$4,500' },
  ];

  // 3. 模擬資料：推薦結果
  const recommendations = [
    { rank: 1, brand: '康博診所', title: '精準健康調理 + 皇家古法舒壓療程', price: '$5,200', reason: '符合顧客問卷顯示之「慢性疲勞、預算內」偏好，結合康博精準健康與舒壓體驗，轉換效益最高。' },
    { rank: 2, brand: '泰晶殿會館', title: '極緻熱石精油舒壓 120分', price: '$3,600', reason: '上個月曾於會館消費，具備高交叉轉換潛力，搭配養護效果最佳。' },
    { rank: 3, brand: '美健中心', title: '尊榮秋季雙人健康茶飲體驗', price: '$1,600', reason: '低門檻體驗方案，適合搭配健檢結束後的放鬆休閒推薦。' },
  ];

  // 4. 模擬資料：顧問審核清單
  const [reviews, setReviews] = useState([
    { id: 1, customer: '林小美', draft: '推薦：精準健康調理組合 (康博診所 x 泰晶殿)', status: '待審核' },
    { id: 2, customer: '張志明', draft: '推薦：頭皮草本養護升級 (泰晶殿會館)', status: '已發送' },
  ]);

  // 5. Dashboard 圖表數據
  const trendData = [
    { name: '10/1', 推薦數: 12, 預約數: 8 },
    { name: '10/5', 推薦數: 19, 預約數: 14 },
    { name: '10/10', 推薦數: 15, 預約數: 11 },
    { name: '10/15', 推薦數: 28, 預約數: 22 },
    { name: '10/20', 推薦數: 35, 預約數: 29 },
  ];

  const pieData = [
    { name: '康博診所', value: 45 },
    { name: '泰晶殿會館', value: 35 },
    { name: '美健中心', value: 20 },
  ];
  const COLORS = ['#a05a1c', '#c48b49', '#783e10'];

  const handleApprove = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: '已發送給顧客' } : r));
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#faf6f0', overflow: 'hidden' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif; }
        body { background-color: #faf6f0; color: #3d2b1f; }
        
        .nav-btn {
          width: 100%; display: flex; align-items: center; gap: 12px; padding: 13px 18px;
          border-radius: 12px; border: none; background: transparent; color: #785a43;
          font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.25s ease; text-align: left;
        }
        .nav-btn:hover { background: rgba(160, 90, 28, 0.08); color: #a05a1c; }
        .nav-btn.active { 
          background: linear-gradient(135deg, #a05a1c 0%, #783e10 100%); 
          color: #ffffff; font-weight: 600; 
          box-shadow: 0 4px 14px rgba(160, 90, 28, 0.3); 
        }
        
        .card { 
          background: #ffffff; 
          border: 1px solid #ebdcd0; 
          border-radius: 16px; 
          padding: 24px; 
          box-shadow: 0 8px 20px rgba(120, 90, 67, 0.06); 
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #a05a1c 0%, #8c4c15 100%); 
          color: #ffffff; border: none; padding: 11px 20px; border-radius: 10px;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: 0.2s; 
          display: inline-flex; align-items: center; gap: 8px;
          box-shadow: 0 4px 12px rgba(160, 90, 28, 0.25);
        }
        .btn-primary:hover { background: linear-gradient(135deg, #8c4c15 0%, #6e390e 100%); transform: translateY(-1px); }
        
        .btn-success { background: #f4ebe1; color: #a05a1c; border: 1px solid #dcc4b0; padding: 8px 14px; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; }
        .btn-success:hover { background: #e8d8c8; }
        .btn-danger { background: #fdf2f2; color: #c0392b; border: 1px solid #f5c6c6; padding: 8px 14px; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; }
        .btn-danger:hover { background: #f9e1e1; }
        
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: #f7efe6; color: #785a43; font-size: 12px; text-transform: uppercase; padding: 14px 16px; border-bottom: 1px solid #ebdcd0; font-weight: 700; }
        td { padding: 16px; border-bottom: 1px solid #f2e6dc; font-size: 14px; color: #4a382b; }
        
        input, select, textarea {
          width: 100%; background: #faf6f0; border: 1px solid #dcc4b0; border-radius: 10px;
          padding: 12px 14px; color: #3d2b1f; font-size: 14px; outline: none; margin-top: 6px; transition: 0.2s;
        }
        input:focus, select:focus, textarea:focus { border-color: #a05a1c; box-shadow: 0 0 0 3px rgba(160, 90, 28, 0.15); }
        
        .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge-gold { background: #f5e9dc; color: #8c4c15; border: 1px solid #e0c8b3; }
        .badge-amber { background: #eaf4ed; color: #27ae60; border: 1px solid #c2e2cc; }
      `}</style>

      {/* 左側康博健康奢華導覽列 */}
      <aside style={{ width: '270px', backgroundColor: '#f5ebe0', borderRight: '1px solid #e5d3c5', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid #e5d3c5', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'linear-gradient(135deg, #a05a1c 0%, #783e10 100%)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(160,90,28,0.3)' }}>
            <HeartPulse size={20} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '17px', fontWeight: '800', color: '#523724', letterSpacing: '0.5px' }}>康博 CRM 系統</h1>
            <p style={{ fontSize: '11px', color: '#8c6d56', marginTop: '2px' }}>精準健康推薦與顧客管理</p>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'customers', label: '1. 貴賓資料與授權', icon: Users },
            { id: 'questionnaire', label: '2. 健康需求問卷', icon: FileText },
            { id: 'history', label: '3. 跨品牌消費整合', icon: Layers },
            { id: 'recommendation', label: '4. AI 精準健康推薦', icon: Award },
            { id: 'review', label: '5. 顧問審核與發送', icon: CheckSquare },
            { id: 'dashboard', label: '6. 營運成效 Dashboard', icon: BarChart2 },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 右側內容區 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* 上方 Header */}
        <header style={{ height: '70px', backgroundColor: '#ffffff', borderBottom: '1px solid #e5d3c5', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 10px rgba(120,90,67,0.03)' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '800', color: '#4a301a' }}>
            {activeTab === 'customers' && '貴賓資料與跨品牌授權管理'}
            {activeTab === 'questionnaire' && '智慧健康需求問卷與標籤系統'}
            {activeTab === 'history' && '跨品牌消費與服務歷史紀錄'}
            {activeTab === 'recommendation' && 'AI 精準個人化健康推薦結果'}
            {activeTab === 'review' && '健康顧問審核與推薦發送'}
            {activeTab === 'dashboard' && '康博集團跨品牌營運成效分析 Dashboard'}
          </h2>
          <span className="badge badge-amber">系統運行中 (康博健康模式)</span>
        </header>

        {/* 主要內容容器 */}
        <main style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          
          {/* 1. 顧客資料頁 */}
          {activeTab === 'customers' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <p style={{ fontSize: '14px', color: '#785a43' }}>管理康博集團貴賓之基本資料、消費預算與跨品牌合作授權同意。</p>
                <button className="btn-primary"><Plus size={16} /> 新增貴賓</button>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table>
                  <thead>
                    <tr>
                      <th>貴賓姓名</th>
                      <th>聯絡電話</th>
                      <th>消費預算</th>
                      <th>偏好療程</th>
                      <th>授權品牌</th>
                      <th>授權狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(c => (
                      <tr key={c.id}>
                        <td style={{ fontWeight: '700', color: '#4a301a' }}>{c.name}</td>
                        <td>{c.phone}</td>
                        <td style={{ fontWeight: '600', color: '#a05a1c' }}>{c.budget}</td>
                        <td>{c.pref}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {c.brands.map((b, i) => (
                              <span key={i} className="badge badge-gold">{b}</span>
                            ))}
                          </div>
                        </td>
                        <td><span className="badge badge-amber">{c.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. 需求問卷頁 */}
          {activeTab === 'questionnaire' && (
            <div style={{ maxWidth: '640px', margin: '0 auto' }} className="card">
              <h3 style={{ fontSize: '19px', fontWeight: '800', marginBottom: '6px', color: '#4a301a' }}>填寫貴賓健康與養生需求問卷</h3>
              <p style={{ fontSize: '13px', color: '#8c6d56', marginBottom: '24px' }}>系統將根據填寫內容生成健康標籤，自動推薦最適合的精準健康與舒壓方案。</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#785a43' }}>選擇貴賓</label>
                  <select>
                    {customers.map(c => <option key={c.id}>{c.name} ({c.phone})</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#785a43' }}>目前最想改善的身體狀態或疲勞部位</label>
                  <textarea rows="3" placeholder="例如：長期久坐肩頸僵硬，睡眠品質較差，希望能進行全身深層放鬆與健康管理..."></textarea>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#785a43' }}>可接受預算範圍</label>
                  <select>
                    <option>$2,000 - $5,000 元</option>
                    <option>$5,000 - $10,000 元</option>
                    <option>$10,000 元以上</option>
                  </select>
                </div>
                <button onClick={() => alert('問卷已成功提交！AI 已自動分析標籤並生成推薦方案。')} className="btn-primary" style={{ justifyContent: 'center', padding: '14px', marginTop: '10px' }}>
                  提交問卷並生成 AI 康博精準推薦
                </button>
              </div>
            </div>
          )}

          {/* 3. 跨品牌紀錄頁 */}
          {activeTab === 'history' && (
            <div>
              <p style={{ fontSize: '14px', color: '#785a43', marginBottom: '20px' }}>康博集團旗下診所、會館與異業合作品牌之消費紀錄整合。</p>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table>
                  <thead>
                    <tr>
                      <th>貴賓姓名</th>
                      <th>品牌/會館</th>
                      <th>消費服務項目</th>
                      <th>消費日期</th>
                      <th>消費金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crossBrandHistory.map(h => (
                      <tr key={h.id}>
                        <td style={{ fontWeight: '700', color: '#4a301a' }}>{h.customer}</td>
                        <td><span className="badge badge-gold">{h.brand}</span></td>
                        <td>{h.service}</td>
                        <td style={{ color: '#8c6d56' }}>{h.date}</td>
                        <td style={{ fontWeight: '800', color: '#a05a1c' }}>{h.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. 推薦結果頁 */}
          {activeTab === 'recommendation' && (
            <div>
              <p style={{ fontSize: '14px', color: '#785a43', marginBottom: '20px' }}>根據貴賓林小美之問卷標籤與歷史消費偏好，AI 自動匹配前三大精準方案：</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {recommendations.map(r => (
                  <div key={r.rank} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', borderTop: '4px solid #a05a1c' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, background: 'linear-gradient(135deg, #a05a1c 0%, #783e10 100%)', color: 'white', padding: '4px 14px', borderBottomLeftRadius: '12px', fontSize: '11px', fontWeight: '800' }}>
                      TOP {r.rank}
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#a05a1c', fontWeight: '800', letterSpacing: '0.5px' }}>{r.brand}</span>
                      <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#4a301a', margin: '8px 0' }}>{r.title}</h4>
                      <p style={{ fontSize: '26px', fontWeight: '900', color: '#a05a1c', marginBottom: '14px' }}>{r.price}</p>
                      <div style={{ background: '#faf6f0', padding: '14px', borderRadius: '10px', border: '1px solid #ebdcd0', fontSize: '12px', color: '#684d39', lineHeight: '1.6' }}>
                        <strong style={{ color: '#4a301a' }}>推薦原因：</strong>{r.reason}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                      <button onClick={() => alert('已記錄：貴賓表達濃厚興趣')} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>貴賓感興趣 👍</button>
                      <button onClick={() => alert('已記錄：暫無需求')} className="btn-success" style={{ flex: 1 }}>暫無興趣 👎</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. 顧問審核頁 */}
          {activeTab === 'review' && (
            <div>
              <p style={{ fontSize: '14px', color: '#785a43', marginBottom: '20px' }}>健康顧問人工確認推薦內容與健康組合，無誤後發送專屬推薦給貴賓。</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {reviews.map(rev => (
                  <div key={rev.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '16px', fontWeight: '800', color: '#4a301a' }}>{rev.customer}</span>
                        <span className={`badge ${rev.status === '已發送' ? 'badge-amber' : 'badge-gold'}`}>{rev.status}</span>
                      </div>
                      <p style={{ fontSize: '14px', color: '#684d39' }}>{rev.draft}</p>
                    </div>
                    {rev.status !== '已發送' ? (
                      <button onClick={() => handleApprove(rev.id)} className="btn-primary">確認發送專屬推薦</button>
                    ) : (
                      <span style={{ fontSize: '12px', color: '#8c6d56', fontWeight: '600' }}>已發送至貴賓手機</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. 成效 Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div className="card">
                  <p style={{ fontSize: '12px', color: '#8c6d56' }}>總推薦發送數</p>
                  <p style={{ fontSize: '30px', fontWeight: '900', color: '#4a301a', marginTop: '6px' }}>128 <span style={{ fontSize: '12px', color: '#27ae60', fontWeight: 'normal' }}>+15% 本週</span></p>
                </div>
                <div className="card">
                  <p style={{ fontSize: '12px', color: '#8c6d56' }}>貴賓成功預約數</p>
                  <p style={{ fontSize: '30px', fontWeight: '900', color: '#4a301a', marginTop: '6px' }}>84 <span style={{ fontSize: '12px', color: '#27ae60', fontWeight: 'normal' }}>轉換率 65.6%</span></p>
                </div>
                <div className="card">
                  <p style={{ fontSize: '12px', color: '#8c6d56' }}>跨品牌帶動總消費金額</p>
                  <p style={{ fontSize: '30px', fontWeight: '900', color: '#a05a1c', marginTop: '6px' }}>$246,800</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '20px' }}>
                <div className="card">
                  <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#4a301a', marginBottom: '16px' }}>康博推薦與預約趨勢分析</h3>
                  <div style={{ height: '220px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trendData}>
                        <XAxis dataKey="name" stroke="#8c6d56" fontSize={12} />
                        <YAxis stroke="#8c6d56" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#ebdcd0', borderRadius: '10px' }} />
                        <Line type="monotone" dataKey="推薦數" stroke="#a05a1c" strokeWidth={3} />
                        <Line type="monotone" dataKey="預約數" stroke="#27ae60" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="card">
                  <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#4a301a', marginBottom: '16px' }}>跨品牌服務使用佔比</h3>
                  <div style={{ height: '220px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={5} dataKey="value">
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#ebdcd0', borderRadius: '10px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}