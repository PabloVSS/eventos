import LayoutPage from "../_components/templates/LayoutPage";

export default function Layout(props: any) {
  return (
    <LayoutPage>
    {props.children}
    </LayoutPage>

  )
}