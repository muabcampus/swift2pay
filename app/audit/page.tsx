export default function Page() {
  return (
    <div style={{padding:20, fontFamily:'sans-serif', background:'#FEF9F0', minHeight:'100vh'}}>
      <p style={{fontSize:12, letterSpacing:2, fontWeight:'bold'}}>SWIFT2PAY / CASE FILE 002 - By Muhammad Ibrahim MAS ARTIFICS</p>
      <h1 style={{fontSize:36, fontWeight:'bold', marginTop:20}}>Where the money <i style={{color:'#B45309'}}>stops feeling safe.</i></h1>
      <p style={{marginTop:10, color:'#666'}}>60% drop-off audit - Nigeria fintech - Kano traders</p>
      
      <div style={{background:'white', padding:15, borderRadius:12, marginTop:20, border:'1px solid #eee'}}>
        <h2>60% Funnel Drop-off</h2>
        <p>Login 100% (10,000) → Home 62% (6,240) → KYC 31% (3,118) → Transaction 11% (1,102) → Success 8.4% (842)</p>
        <p style={{color:'red', marginTop:10}}>Highest drop-off: KYC Verification → 50.1% lost</p>
      </div>

      <div style={{background:'white', padding:15, borderRadius:12, marginTop:20, border:'1px solid #eee'}}>
        <h2>Transaction Friction Audit</h2>
        <p><b>Recipient uncertainty:</b> User cannot verify who receives money → Fix: Verified badge + name + account</p>
        <p style={{marginTop:10}}><b>Hidden charges:</b> Fee revealed too late → Fix: Breakdown ₦5,000 + ₦10 = ₦5,010 before submit</p>
        <p style={{marginTop:10}}><b>Pending feels like failure:</b> Spinner no explanation → Fix: Explicit Pending/Success/Failed + WhatsApp receipt</p>
        <p style={{marginTop:10}}><b>Weak reversal:</b> No resolution → Fix: Reference ID + Instant refund SLA</p>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:15, marginTop:20}}>
        <div style={{background:'white', padding:15, borderRadius:12, border:'1px solid #eee'}}>
          <h3>Aisha - 23, POS girl, Kano</h3>
          <p style={{fontStyle:'italic', marginTop:10}}>"If network hangs, customer thinks I took money."</p>
          <p style={{fontSize:13, marginTop:10}}>Goals: Fast cash-in/out. Frustrations: Unclear pending. Trust: Green confirmation + reference number</p>
        </div>
        <div style={{background:'white', padding:15, borderRadius:12, border:'1px solid #eee'}}>
          <h3>Musa - 29, Trader, Sabon Gari</h3>
          <p style={{fontStyle:'italic', marginTop:10}}>"I can forgive delay. I cannot forgive not knowing where money is."</p>
          <p style={{fontSize:13, marginTop:10}}>Goals: Pay suppliers. Frustrations: Dashboard unclear. Trust: Transparent fees + CBN regulated</p>
        </div>
      </div>

      <div style={{background:'#0B1F3A', color:'white', padding:15, borderRadius:12, marginTop:20}}>
        <h2>Three fixes per screen - Small changes, high reassurance</h2>
        <p style={{marginTop:10}}>01: Review screen with recipient, masked account, amount, fee, total</p>
        <p style={{marginTop:5}}>02: Replace loading with Pending/Successful/Failed with next step</p>
        <p style={{marginTop:5}}>03: Evidence trail: receipt, reversal SLA, one-tap support</p>
      </div>

      <p style={{marginTop:20, textAlign:'center', fontSize:12, color:'#999'}}>Live: swift2pay.vercel.app | GitHub: muabcampus/swift2pay | By Muhammad Ibrahim | CcHUB UI/UX</p>
    </div>
  )
                   }
