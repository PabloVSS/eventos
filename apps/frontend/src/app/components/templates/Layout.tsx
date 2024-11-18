import Logo from "./Logo";

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="
      flex flex-col items-center py-10 min-h-screen
      bg-[url('/background.png')] bg-cover
    
    ">
      <Logo />
      <main className={`
        flex-1 flex flex-col justify-center py-10 
        container ${props.className}  bg-red-500
      `}
      >
        {props.children}</main>
    </div>
  )

}