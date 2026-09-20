export default function AuditPage(){
return (
<div className="min-h-screen bg-[#FEF9F0] text-[#1a1a1a]">
<div className="max-w-6xl mx-auto px-6 py-12">
  <div className="flex justify-between text-xs tracking-widest mb-8">
    <span className="font-bold">SWIFT2PAY / CASE FILE 002</span>
    <span className="bg-white px-3 py-1 rounded-full border">Heuristic Audit - Sep 2026 | MAS ARTIFICS</span>
  </div>

  <h1 className="text-5xl font-serif font-bold leading-tight">Where the money <br/><span className="text-orange-700 italic">stops feeling safe.</span></h1>
  <p className="mt-4 max-w-2xl text-gray-600">A 60% drop-off is rarely one broken button. It is a chain of small doubts — Identity, balance, charges, network, and what happens next. A Nigeria-grounded read on where a 60% funnel drop-off becomes a human decision to stop.</p>
  <div className="mt-6 bg-orange-600 text-white inline-block px-6 py-2 rounded-full text-sm">60% DROP-OFF FUNNEL</div>

  <div className="grid md:grid-cols-4 gap-4 mt-12">
    <div className="bg-white p-4 rounded-xl border"><p className="text-xs">Login</p><div className="h-3 bg-orange-600 mt-2 w-full"></div><p className="text-xs mt-1">100% reached</p></div>
    <div className="bg-white p-4 rounded-xl border"><p className="text-xs">Home</p><div className="h-3 bg-blue-900 mt-2 w-[82%]"></div><p className="text-xs mt-1">82% reached</p></div>
    <div className="bg-white p-4 rounded-xl border"><p className="text-xs">Transaction</p><div className="h-3 bg-emerald-700 mt-2 w-[65%]"></div><p className="text-xs mt-1">65% reached</p></div>
    <div className="bg-white p-4 rounded-xl border"><p className="text-xs">Success</p><div className="h-3 bg-gray-300 mt-2 w-[40%]"></div><p className="text-xs mt-1">40% reached</p></div>
  </div>

  <h2 className="text-2xl font-bold mt-16">Selected Screen: Transaction</h2>
  <div className="overflow-x-auto bg-white rounded-xl border mt-4">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 text-xs"><tr><th className="p-3 text-left">FRICTION SIGNAL</th><th className="p-3 text-left">WHAT MAY BE HAPPENING</th><th className="p-3 text-left">WHY USERS STOP</th><th className="p-3 text-left">WHAT TO INVEST (MY FIX)</th></tr></thead>
      <tbody>
        <tr className="border-t"><td className="p-3 font-bold">Recipient uncertainty</td><td className="p-3">User cannot confidently verify who will receive money</td><td className="p-3">Wrong transfer fear, user pauses</td><td className="p-3 text-green-700">Use name + account details + review step + Verified badge</td></tr>
        <tr className="border-t"><td className="p-3 font-bold">Hidden charges</td><td className="p-3">Final amount or fee revealed too late</td><td className="p-3">Feels cheated, compares with OPay/Moniepoint</td><td className="p-3 text-green-700">Show amount + expected delivery + fee breakdown ₦5,000+₦10=₦5,010 before submit</td></tr>
        <tr className="border-t"><td className="p-3 font-bold">Pending feels like failure</td><td className="p-3">Spinner does not explain whether money moved</td><td className="p-3">Users retry, call recipient, distrust app</td><td className="p-3 text-green-700">Use explicit Pending/Successful/Failed with next step + WhatsApp receipt</td></tr>
        <tr className="border-t"><td className="p-3 font-bold">Weak reversal and support</td><td className="p-3">Cannot see how to resolve failed debit</td><td className="p-3">Fear money is gone, escalates offline</td><td className="p-3 text-green-700">Add Track / Reference ID + support channel + Instant refund SLA</td></tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-3xl font-serif font-bold mt-16">Two users. One shared fear:<br/><span className="italic">"Where is my money?"</span></h2>
  <div className="grid md:grid-cols-2 gap-6 mt-8">
    <div className="bg-white p-6 rounded-xl border">
      <p className="text-xs tracking-widest">PERSONA / AGENT 01</p><h3 className="text-2xl font-bold mt-2">Aisha</h3><p className="text-xs">23, POS girl, Kano</p>
      <p className="mt-4 font-bold italic">"If the network hangs, the customer thinks I took their money."</p>
      <p className="text-xs mt-4"><b>GOALS:</b> Complete cash-in/out fast, know whether transaction safe, protect reputation</p>
      <p className="text-xs mt-2"><b>FRUSTRATIONS:</b> Unclear pending status, having to explain charges, fear BVN data could expose account</p>
      <p className="text-xs mt-2"><b>TRUST TRIGGERS:</b> Green plain-language confirmation with reference number, fee and delivery-time preview, visible escalation route</p>
    </div>
    <div className="bg-white p-6 rounded-xl border">
      <p className="text-xs tracking-widest">PERSONA / TRADER 02</p><h3 className="text-2xl font-bold mt-2">Musa</h3><p className="text-xs">29, Trader, Sabon Gari</p>
      <p className="mt-4 font-bold italic">"I can forgive a delay. I cannot forgive not knowing where the money is."</p>
      <p className="text-xs mt-4"><b>GOALS:</b> Pay suppliers without leaving stall, keep record for reconciliation, use wallet as dependable as Moniepoint</p>
      <p className="text-xs mt-2"><b>FRUSTRATIONS:</b> Dashboard doesn't make balance clear, unexpected fees reduce margin, failed transfer has no clear reversal</p>
      <p className="text-xs mt-2"><b>TRUST TRIGGERS:</b> Clean activity trail, transparent fees in Naira before authorization, CBN regulated identity handling + instant refund SLA</p>
    </div>
  </div>

  <h2 className="text-3xl font-serif font-bold mt-16">Three fixes per screen.<br/><span className="text-orange-700 italic">Small changes, high reassurance.</span></h2>
  <div className="grid md:grid-cols-3 gap-4 mt-6">
    <div className="bg-[#0B1F3A] text-white p-6 rounded-xl"><p className="text-orange-300">01</p><p className="text-sm mt-2">Add a review screen with recipient name, masked account, amount, fee, total, and delivery expectation.</p></div>
    <div className="bg-[#0B1F3A] text-white p-6 rounded-xl"><p className="text-orange-300">02</p><p className="text-sm mt-2">Replace ambiguous loading with three explicit states: Pending, Successful, Failed — each with a next step.</p></div>
    <div className="bg-[#0B1F3A] text-white p-6 rounded-xl"><p className="text-orange-300">03</p><p className="text-sm mt-2">Build an evidence trail: receipt, reversal SLA, and one-tap support/esport path.</p></div>
  </div>

  <div className="bg-[#E8DCC5] p-6 rounded-xl mt-12">
    <h3 className="font-bold">Keep the evidence honest.</h3>
    <p className="text-sm mt-2">This audit is a heuristic diagnosis based on Nigerian fintech context. Validate with event-level funnel analytics, session recordings, and interviews with agents and traders.</p>
    <p className="text-xs mt-4">[1] Central Bank of Nigeria — Bank Verification Number | [2] McKinsey — Harnessing Nigeria's fintech potential</p>
    <p className="text-xs mt-6 font-bold">By Muhammad Ibrahim | MAS ARTIFICS, Kano | UI/UX Track | swift2pay.vercel.app | github.com/muabcampus/swift2pay</p>
  </div>
</div>
</div>
)
  }
