export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-16 text-center sm:items-start sm:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Act as a UI/UX Designer. Build me a mobile app UI for Swift2Pay Fintech. I need ONLY 3 screens as separate sections on one page, mobile size (390px width).  SCREEN 1 - LOGIN SCREEN: - Top: Swift2Pay logo (green #00C271) - Title: Welcome Back - Input: Phone Number, Password - Trust element: Text with lock icon 🔒 Secured by CBN Licensed Bank | 256-bit encryption. We never ask full BVN on login - Buttons: Login (green), Login with Face ID - Bottom: Forgot password  SCREEN 2 - HOME SCREEN: - Header: Good Morning, Aisha + notification bell - Balance Card: Balance ₦152,450.50 with eye icon to hide, Green background - 3 Big Buttons: Send Money, Pay Bills, Transaction History - Section: Recent Transactions (Musa Store -₦5,000, MTN Airtime -₦1,000) - Trust Footer: ⭐ Trusted by 23,450+ traders in Kano + Customer support online - Floating chat button  SCREEN 3 - TRANSACTION SCREEN: - Title: Confirm Payment - Merchant: Musa Store with green badge ✅ Verified Merchant - Details: Amount ₦5,000, Fee ₦10, Total ₦5,010 (make breakdown very clear) - Trust text: Your money is protected. Instant refund if failed - Big Button: Pay Now ₦5,010 - Success State after: Big checkmark Transaction Successful! Receipt ID: SWP-89234 + 2 buttons Share via WhatsApp and Download Receipt  DESIGN STYLE: Clean, modern like Kuda Bank, white background, Inter font, rounded corners, high trust, professional. Make it look like real app screenshot.  Give me live preview link.Implement a dark mode toggle to see how the Swift2Pay UI looks in a dark theme.Add a smooth fade transition animation when toggling between light and dark modes to improve the user experience. And make it pasist , and make the user experience very professional and the UI very professional ready for anyone to take this screenshot of every screenshot make it so professional.
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            To get started, send a prompt or modify this page directly.
          </p>
        </div>
      </main>
    </div>
  );
}